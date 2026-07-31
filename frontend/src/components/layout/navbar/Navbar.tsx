"use client";

import { useCallback, useMemo, useState, type MouseEvent } from "react";

import {
  contactNavigationItem,
  navigationItems,
  primaryNavigationItems,
  secondaryNavigationItems,
} from "@/content/navigation";
import { useNavbarState } from "@/hooks/useNavbarState";
import { scrollToSection } from "@/lib/scroll-to-section";

import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { MoreMenu } from "./MoreMenu";
import { NavbarActions } from "./NavbarActions";
import { NavbarBrand } from "./NavbarBrand";
import { MenuIcon } from "./NavbarIcons";
import { NavigationProgress } from "./NavigationProgress";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = useMemo(() => navigationItems.map((item) => item.id), []);

  const { activeSection, isScrolled, scrollProgress } =
    useNavbarState(sectionIds);

  const handleNavigate = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      scrollToSection(event, sectionId);
    },
    [],
  );

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
      data-grid-ignore
    >
      <NavigationProgress progress={scrollProgress} />

      <div className={styles.navShell}>
        <div className={styles.navInner}>
          <NavbarBrand onNavigate={handleNavigate} />

          <div className={styles.desktopCenter}>
            <DesktopNavigation
              items={primaryNavigationItems}
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />

            <MoreMenu
              items={secondaryNavigationItems}
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />
          </div>

          <NavbarActions onContactClick={handleNavigate} />

          <button
            type="button"
            className={styles.mobileMenuButton}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="portfolio-mobile-navigation"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div id="portfolio-mobile-navigation">
        <MobileNavigation
          isOpen={isMobileMenuOpen}
          items={navigationItems}
          activeSection={activeSection}
          onClose={closeMobileMenu}
          onNavigate={handleNavigate}
        />
      </div>

      <span className={styles.activeSectionLabel} aria-hidden="true">
        {activeSection === "contact"
          ? contactNavigationItem.shortLabel
          : (navigationItems.find((item) => item.id === activeSection)
              ?.shortLabel ?? "Home")}
      </span>
    </header>
  );
}
