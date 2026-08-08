import { servicesContent } from "@/content/services";

import { ServiceCard } from "./ServiceCard";
import { ServicesIcon } from "./ServicesIcons";
import { ServicesReveal } from "./ServicesReveal";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="services-heading"
      data-services-root
    >
      <ServicesReveal />

      <div className={styles.container}>
        <header className={styles.sectionHeader} data-services-reveal>
          <div className={styles.phaseMark} aria-hidden="true">
            <span>PHASE</span>
            <strong>08</strong>
            <i />
            <small>SERVICE BLUEPRINT</small>
          </div>

          <div className={styles.headerCopy}>
            <div className={styles.headerMeta}>
              <span>{servicesContent.label}</span>
              <i aria-hidden="true" />
              <span>{servicesContent.meta}</span>
            </div>

            <h2 id="services-heading">{servicesContent.heading}</h2>
            <p>{servicesContent.introduction}</p>

            <div className={styles.headerSignals} aria-label="Service focus">
              <span>BUILD</span>
              <span>IMPROVE</span>
              <span>INTEGRATE</span>
              <span>DELIVER</span>
            </div>
          </div>
        </header>

        <section
          className={styles.servicesBlock}
          aria-labelledby="services-list-heading"
        >
          <div className={styles.subsectionHeader} data-services-reveal>
            <div>
              <p>{servicesContent.servicesLabel}</p>
              <h3 id="services-list-heading">
                {servicesContent.servicesHeading}
              </h3>
            </div>
            <p>{servicesContent.servicesDescription}</p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesContent.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        <div className={styles.collaborationLayout}>
          <section
            className={styles.collaborationPanel}
            aria-labelledby="collaboration-heading"
            data-services-reveal
          >
            <div className={styles.panelHeading}>
              <div className={styles.panelIcon} aria-hidden="true">
                <ServicesIcon name="collaboration" />
              </div>
              <div>
                <p>{servicesContent.collaborationLabel}</p>
                <h3 id="collaboration-heading">
                  {servicesContent.collaborationHeading}
                </h3>
              </div>
            </div>

            <p className={styles.panelDescription}>
              {servicesContent.collaborationDescription}
            </p>

            <div className={styles.collaborationList}>
              {servicesContent.collaborationTypes.map((item, index) => (
                <article key={item.title} className={styles.collaborationItem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className={styles.workflowPanel}
            aria-labelledby="workflow-heading"
            data-services-reveal
          >
            <div className={styles.panelHeading}>
              <div className={styles.panelIcon} aria-hidden="true">
                <ServicesIcon name="workflow" />
              </div>
              <div>
                <p>{servicesContent.workflowLabel}</p>
                <h3 id="workflow-heading">{servicesContent.workflowHeading}</h3>
              </div>
            </div>

            <p className={styles.panelDescription}>
              {servicesContent.workflowDescription}
            </p>

            <ol className={styles.workflowRail}>
              {servicesContent.workflow.map((step) => (
                <li key={step.index}>
                  <div className={styles.workflowNode}>
                    <span>{step.index}</span>
                    <i aria-hidden="true" />
                  </div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className={styles.contactHandoff} data-services-reveal>
          <div className={styles.handoffMarker} aria-hidden="true">
            <span>08</span>
            <i />
            <ServicesIcon name="check" />
          </div>

          <div className={styles.handoffCopy}>
            <p>{servicesContent.ctaEyebrow}</p>
            <h3>{servicesContent.ctaHeading}</h3>
            <span>{servicesContent.ctaDescription}</span>
          </div>

          <a className={styles.contactAction} href={servicesContent.ctaHref}>
            <span>{servicesContent.ctaLabel}</span>
            <ServicesIcon name="arrow" />
          </a>
        </aside>
      </div>
    </section>
  );
}
