import type { CSSProperties } from "react";

import type { PortfolioService } from "@/types/services";

import { ServicesIcon } from "./ServicesIcons";
import styles from "./ServicesSection.module.css";

interface ServiceCardProps {
  service: PortfolioService;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article
      className={styles.serviceCard}
      data-accent={service.accent}
      data-services-reveal
      style={{ "--service-order": index } as CSSProperties}
    >
      <div className={styles.cardTopline}>
        <span>{service.index}</span>
        <span>BUILD MODULE</span>
      </div>

      <div className={styles.cardHeadingRow}>
        <div className={styles.cardIcon} aria-hidden="true">
          <ServicesIcon name={service.icon} />
        </div>
        <h4>{service.title}</h4>
      </div>

      <p className={styles.cardDescription}>{service.description}</p>

      <div className={styles.bestFor}>
        <span>Best for</span>
        <p>{service.bestFor}</p>
      </div>

      <div className={styles.capabilityBlock}>
        <span className={styles.capabilityLabel}>Capabilities</span>
        <div className={styles.capabilityList}>
          {service.capabilities.map((capability) => (
            <span
              key={capability.label}
              className={
                capability.status === "growth"
                  ? styles.growthCapability
                  : styles.capability
              }
            >
              {capability.label}
              {capability.status === "growth" ? <small>growth</small> : null}
            </span>
          ))}
        </div>
      </div>

      <span className={styles.cardCorner} aria-hidden="true" />
    </article>
  );
}
