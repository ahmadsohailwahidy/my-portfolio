import type { PortfolioService } from "@/types/services";

import { ServicesIcon } from "./ServicesIcons";
import styles from "./ServicesSection.module.css";

interface ServiceCardProps {
  service: PortfolioService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.serviceCard}>
      <span className={styles.warmTrace} aria-hidden="true" />
      <span className={styles.coolTrace} aria-hidden="true" />
      <span className={styles.cardCornerWarm} aria-hidden="true" />
      <span className={styles.cardCornerCool} aria-hidden="true" />

      <span className={styles.serviceNumber}>{service.index}</span>

      <div className={styles.serviceIcon} aria-hidden="true">
        <ServicesIcon name={service.icon} />
      </div>

      <div className={styles.serviceCopy}>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>

      <div className={styles.bestFit}>
        <span>Best fit</span>
        <p>{service.bestFor}</p>
      </div>
    </article>
  );
}
