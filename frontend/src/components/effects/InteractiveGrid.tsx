"use client"
import {
  
  PointerEvent as ReactPointerEvent,
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

const GRID_SIZE = 64;
const LINE_CHANGE_DELAY = 1500;

type InteractiveGridProps = {
    children?: ReactNode;
};

type GridStyle = CSSProperties & {
    "--left-line-x": string;
    "--right-line-x": string;
};
export default function InteractiveGrid({
    children,
}: InteractiveGridProps) {
  const gridRef = useRef<HTMLElement>(null);

  const [leftLine, setLeftLine] = useState(0);
  const [rightLine, setRightLine] = useState(0);
  const [columnCount, setColumnCount] = useState(1);

  /*
   * محاسبه تعداد ستون‌های موجود در صفحه
   * این بخش هنگام تغییر اندازه Browser نیز اجرا می‌شود.
   */

  useEffect(() => {
    const gridElement = gridRef.current;

    if (!gridElement) {
      return;
    }

    const updateColumnCount = () => {
      const gridWidth = gridElement.clientWidth;

      const newColumnCount = Math.floor(gridWidth / GRID_SIZE) + 1;

      setColumnCount(newColumnCount);

      setLeftLine((currentColumn) => {
        return currentColumn % newColumnCount;
      });
       setRightLine((currentColumn) => {
         return currentColumn % newColumnCount;
       });
    };

    updateColumnCount();

    const resizeObserver = new ResizeObserver(updateColumnCount);

    resizeObserver.observe(gridElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  /*
   * هر ۱.۵ ثانیه خط روشن را
   * به ستون بعدی انتقال می‌دهد.
   */

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLeftLine((currentColumn) => {
        return (currentColumn + 1) % columnCount;
      });
      setRightLine((currentColumn) => {
        return (currentColumn - 1 + columnCount) % columnCount;
      });
    }, LINE_CHANGE_DELAY);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [columnCount]);

  /*
   * موقعیت Cursor را داخل CSS Variables ذخیره می‌کند.
   */

  function handlePointerMove(
    event: ReactPointerEvent<HTMLElement>,
  ) {
    const gridElement = event.currentTarget;
    const rectangle = gridElement.getBoundingClientRect();

    const pointerX = event.clientX - rectangle.left;
    const pointerY = event.clientY - rectangle.top;

    // موقعیت Cursor را داخل CSS Variables ذخیره می‌کند.
    const activeCellX = 
        Math.floor(pointerX / GRID_SIZE) * GRID_SIZE;

    const activeCellY =
        Math.floor(pointerY / GRID_SIZE) * GRID_SIZE;

    gridElement.style.setProperty(
        "--pointer-x",
        `${pointerX}px` ,
    );

    gridElement.style.setProperty(
        "--pointer-y",
        `${pointerY}px` ,
    );

    gridElement.style.setProperty("--cell-x", `${activeCellX}px`);


    gridElement.style.setProperty(
        "--cell-y",
        `${activeCellY}px` ,
    );

    gridElement.style.setProperty(
        "--pointer-opacity",
        "1" ,
    );
  }

  function handlePointerLeave(
    event: ReactPointerEvent<HTMLElement>,
  ) {
    event.currentTarget.style.setProperty(
        "--pointer-opacity",
        "0",
    );
  }

    const gridStyle: GridStyle = {
      "--left-line-x": `${leftLine * GRID_SIZE}px`,
      "--right-line-x": `${rightLine * GRID_SIZE}px`,
    };
    return (
      <main
        ref={gridRef}
        style={gridStyle}
        className="interactive-grid relative min-h-screen overflow-x-hidden text-slate-100"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {/* Exact Low Colored GRID*/}
        <div
          className="grid-base pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        {/* Around color of cursor */}
        <div
          className="grid-cursor-aura pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        {/* light lines around cursor */}
        <div
          className="grid-cursor-lines pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        {/* the cells' cursor will place */}
        <div
          className="grid-active-cell pointer-events-none absolute "
          aria-hidden="true"
        />

        {/* Automated horizontal line */}
        <div
          className="grid-auto-line-left pointer-events-none absolute inset-y-0"
          aria-hidden="true"
        />
        {/* Automated horizontal line */}
        <div
          className="grid-auto-line-right pointer-events-none absolute inset-y-0"
          aria-hidden="true"
        />

        {/* The Content Place */}
        <div className="relative z-10 min-h-screen">{children}</div>
      </main>
    );
}
