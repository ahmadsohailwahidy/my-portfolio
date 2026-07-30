"use client";

import { useEffect, useReducer, useRef, type CSSProperties } from "react";

import styles from "./InteractiveGrid.module.css";

const GRID_SIZE = 64;
const WIN_LENGTH = 3;
const AUTO_RESET_DELAY = 2600;

type Player = "X" | "O";

interface CellPosition {
  row: number;
  column: number;
}

interface PlayedCell extends CellPosition {
  player: Player;
}

interface WinningLine {
  player: Player;
  start: CellPosition;
  end: CellPosition;
}

interface GameState {
  board: Map<string, PlayedCell>;
  currentPlayer: Player;
  winningLine: WinningLine | null;
}

type GameAction =
  | {
      type: "PLACE_MARK";
      row: number;
      column: number;
    }
  | {
      type: "RESET";
    };

const WIN_DIRECTIONS = [
  { row: 0, column: 1 }, // Horizontal
  { row: 1, column: 0 }, // Vertical
  { row: 1, column: 1 }, // Diagonal: \
  { row: 1, column: -1 }, // Diagonal: /
] as const;

const ignoredClickSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "option",
  "label",
  '[role="button"]',
  '[role="dialog"]',
  '[contenteditable="true"]',
  "[data-grid-ignore]",
].join(",");

function createInitialGameState(): GameState {
  return {
    board: new Map<string, PlayedCell>(),
    currentPlayer: "X",
    winningLine: null,
  };
}

function createCellKey(row: number, column: number): string {
  return `${row}:${column}`;
}

function getCellPlayer(
  board: Map<string, PlayedCell>,
  row: number,
  column: number,
): Player | undefined {
  return board.get(createCellKey(row, column))?.player;
}

function findWinningLine(
  board: Map<string, PlayedCell>,
  origin: CellPosition,
  player: Player,
): WinningLine | null {
  for (const direction of WIN_DIRECTIONS) {
    let count = 1;

    let start: CellPosition = { ...origin };
    let end: CellPosition = { ...origin };

    /*
      Search backward from the clicked cell.
    */
    let step = 1;

    while (
      getCellPlayer(
        board,
        origin.row - direction.row * step,
        origin.column - direction.column * step,
      ) === player
    ) {
      start = {
        row: origin.row - direction.row * step,
        column: origin.column - direction.column * step,
      };

      count += 1;
      step += 1;
    }

    /*
      Search forward from the clicked cell.
    */
    step = 1;

    while (
      getCellPlayer(
        board,
        origin.row + direction.row * step,
        origin.column + direction.column * step,
      ) === player
    ) {
      end = {
        row: origin.row + direction.row * step,
        column: origin.column + direction.column * step,
      };

      count += 1;
      step += 1;
    }

    if (count >= WIN_LENGTH) {
      return {
        player,
        start,
        end,
      };
    }
  }

  return null;
}

function gameReducer(state: GameState, action: GameAction): GameState {
  if (action.type === "RESET") {
    return createInitialGameState();
  }

  if (state.winningLine) {
    return state;
  }

  const cellKey = createCellKey(action.row, action.column);

  /*
    An occupied cell cannot be selected again.
  */
  if (state.board.has(cellKey)) {
    return state;
  }

  const playedCell: PlayedCell = {
    row: action.row,
    column: action.column,
    player: state.currentPlayer,
  };

  const nextBoard = new Map(state.board);

  nextBoard.set(cellKey, playedCell);

  const winningLine = findWinningLine(
    nextBoard,
    playedCell,
    state.currentPlayer,
  );

  return {
    board: nextBoard,

    currentPlayer: winningLine
      ? state.currentPlayer
      : state.currentPlayer === "X"
        ? "O"
        : "X",

    winningLine,
  };
}

function shouldIgnoreClick(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(target.closest(ignoredClickSelector));
}

function getCellCenter(cell: CellPosition): {
  x: number;
  y: number;
} {
  return {
    x: cell.column * GRID_SIZE + GRID_SIZE / 2,
    y: cell.row * GRID_SIZE + GRID_SIZE / 2,
  };
}

export default function InteractiveGrid() {
  const rootRef = useRef<HTMLDivElement>(null);

  const [gameState, dispatch] = useReducer(
    gameReducer,
    undefined,
    createInitialGameState,
  );

  /*
    Mouse aura and active-cell tracking.

    CSS variables are updated directly instead of using React State.
    This prevents a React rerender on every mouse movement.
  */
  useEffect(() => {
    const rootElement = rootRef.current;

    if (!rootElement) {
      return;
    }

    let animationFrameId = 0;
    let latestPointerX = 0;
    let latestPointerY = 0;

    const updatePointerPosition = () => {
      animationFrameId = 0;

      const cellX = Math.floor(latestPointerX / GRID_SIZE) * GRID_SIZE;

      const cellY = Math.floor(latestPointerY / GRID_SIZE) * GRID_SIZE;

      rootElement.style.setProperty("--pointer-x", `${latestPointerX}px`);

      rootElement.style.setProperty("--pointer-y", `${latestPointerY}px`);

      rootElement.style.setProperty("--cell-x", `${cellX}px`);

      rootElement.style.setProperty("--cell-y", `${cellY}px`);

      rootElement.style.setProperty("--pointer-opacity", "1");
    };

    const handlePointerMove = (event: PointerEvent) => {
      latestPointerX = event.clientX;
      latestPointerY = event.clientY;

      if (animationFrameId !== 0) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updatePointerPosition);
    };

    const hidePointerEffects = () => {
      rootElement.style.setProperty("--pointer-opacity", "0");
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    window.addEventListener("blur", hidePointerEffects);

    document.documentElement.addEventListener("mouseleave", hidePointerEffects);

    return () => {
      if (animationFrameId !== 0) {
        window.cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("pointermove", handlePointerMove);

      window.removeEventListener("blur", hidePointerEffects);

      document.documentElement.removeEventListener(
        "mouseleave",
        hidePointerEffects,
      );
    };
  }, []);

  /*
    Tic-Tac-Toe click handling.
  */
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      /*
        Only use the primary mouse button.
      */
      if (event.button !== 0) {
        return;
      }

      /*
        Do not interfere with links, buttons,
        forms or explicitly ignored sections.
      */
      if (event.defaultPrevented || shouldIgnoreClick(event.target)) {
        return;
      }

      /*
        Do not create marks during keyboard-modified clicks.
      */
      if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) {
        return;
      }

      const column = Math.floor(event.clientX / GRID_SIZE);

      const row = Math.floor(event.clientY / GRID_SIZE);

      dispatch({
        type: "PLACE_MARK",
        row,
        column,
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      /*
        Press Escape to clear the board.
      */
      if (event.key === "Escape") {
        dispatch({ type: "RESET" });
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
    Clear the board automatically after a win.
  */
  useEffect(() => {
    if (!gameState.winningLine) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      dispatch({ type: "RESET" });
    }, AUTO_RESET_DELAY);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [gameState.winningLine]);

  const winningStart = gameState.winningLine
    ? getCellCenter(gameState.winningLine.start)
    : null;

  const winningEnd = gameState.winningLine
    ? getCellCenter(gameState.winningLine.end)
    : null;

  const rootStyle = {
    "--grid-size": `${GRID_SIZE}px`,
  } as CSSProperties;

  const accessibilityMessage = gameState.winningLine
    ? `${gameState.winningLine.player} won the game.`
    : `Current turn: ${gameState.currentPlayer}`;

  return (
    <>
      <div
        ref={rootRef}
        className={styles.root}
        style={rootStyle}
        aria-hidden="true"
      >
        <div className={`${styles.layer} ${styles.gridBase}`} />

        <div className={`${styles.layer} ${styles.cursorAura}`} />

        <div className={`${styles.layer} ${styles.cursorLines}`} />

        <div className={styles.activeCell} />

        <div className={`${styles.scanLine} ${styles.scanLineLeft}`} />

        <div className={`${styles.scanLine} ${styles.scanLineRight}`} />

        <div className={styles.marksLayer}>
          {Array.from(gameState.board.values()).map((cell) => (
            <div
              key={createCellKey(cell.row, cell.column)}
              className={`${styles.mark} ${
                cell.player === "X" ? styles.xMark : styles.oMark
              }`}
              style={{
                left: cell.column * GRID_SIZE,
                top: cell.row * GRID_SIZE,
                width: GRID_SIZE,
                height: GRID_SIZE,
              }}
            >
              {cell.player === "X" ? (
                <svg viewBox="0 0 64 64" focusable="false">
                  <path d="M19 19L45 45" />
                  <path d="M45 19L19 45" />
                </svg>
              ) : (
                <svg viewBox="0 0 64 64" focusable="false">
                  <circle cx="32" cy="32" r="17" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {winningStart && winningEnd && (
          <svg className={styles.winningOverlay} focusable="false">
            <line
              className={styles.winningGlow}
              x1={winningStart.x}
              y1={winningStart.y}
              x2={winningEnd.x}
              y2={winningEnd.y}
              pathLength="1"
            />

            <line
              className={styles.winningLine}
              x1={winningStart.x}
              y1={winningStart.y}
              x2={winningEnd.x}
              y2={winningEnd.y}
              pathLength="1"
            />
          </svg>
        )}
      </div>

      <p className="sr-only" aria-live="polite">
        {accessibilityMessage}
      </p>
    </>
  );
}
