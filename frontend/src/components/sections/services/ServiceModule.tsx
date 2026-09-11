import type { PortfolioService } from "@/types/services";

import { ServiceCard } from "./ServiceCard";
import { ServiceIllustration } from "./ServiceIllustration";
import styles from "./ServicesSection.module.css";

const illustrationKinds = ["browser", "integration", "dashboard"] as const;

interface ServiceModuleProps {
  service: PortfolioService;
  index: number;
}

export function ServiceModule({ service, index }: ServiceModuleProps) {
  const variant = index + 1;
  const illustration = illustrationKinds[index] ?? "browser";

  return (
    <div
      className={styles.serviceModule}
      data-service-variant={variant}
      data-services-reveal
    >
      <ServiceCard service={service} />
      <ServiceIllustration kind={illustration} />
    </div>
  );
}
