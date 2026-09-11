import { servicesContent } from "@/content/services";

import { ServiceModule } from "./ServiceModule";
import { ServicesIcon } from "./ServicesIcons";
import { ServicesReveal } from "./ServicesReveal";
import styles from "./ServicesSection.module.css";

const capabilitySignals = [
  { label: "BUILD", icon: "build" as const, warm: false },
  { label: "IMPROVE", icon: "improve" as const, warm: false },
  { label: "INTEGRATE", icon: "integrate" as const, warm: false },
  { label: "DELIVER", icon: "deliver" as const, warm: true },
] as const;

function SectionKicker({ label }: { label: string }) {
  return (
    <div className={styles.sectionKicker} aria-hidden="true">
      <span>{label}</span>
      <i className={styles.kickerWarmLine} />
      <i className={styles.kickerCoolLine} />
    </div>
  );
}

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
          <aside className={styles.phaseMark} aria-hidden="true">
            <span className={styles.railMarkerTop} />
            <span className={styles.railMarkerMid} />
            <span className={styles.phaseLabel}>SERVICES</span>
            <strong>04</strong>
            <i className={styles.phaseRule} />
            <small>
              SERVICE
              <br />
              BLUEPRINT
            </small>
          </aside>

          <div className={styles.headerCopy}>
            <div className={styles.headerMeta}>
              <span>{servicesContent.label}</span>
              <span>{servicesContent.meta}</span>
            </div>

            <h2 id="services-heading">
              Development <em>support</em>
              <br />
              focused on clear, <em>useful</em>
              <br />
              outcomes.
            </h2>

            <p>{servicesContent.introduction}</p>

            <div
              className={styles.headerSignals}
              aria-label="Core delivery capabilities"
            >
              {capabilitySignals.map((signal) => (
                <span
                  key={signal.label}
                  className={signal.warm ? styles.signalWarm : undefined}
                >
                  <ServicesIcon name={signal.icon} />
                  <b>{signal.label}</b>
                </span>
              ))}
            </div>
          </div>
        </header>

        <section
          className={styles.servicesBlock}
          aria-labelledby="services-list-heading"
        >
          <div className={styles.subsectionHeader} data-services-reveal>
            <SectionKicker label={servicesContent.servicesLabel} />
            <h3 id="services-list-heading">
              {servicesContent.servicesHeading}
            </h3>
          </div>

          <div className={styles.serviceModules}>
            {servicesContent.services.map((service, index) => (
              <ServiceModule key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        <section
          className={styles.collaborationSection}
          aria-labelledby="collaboration-heading"
          data-services-reveal
        >
          <SectionKicker label={servicesContent.collaborationLabel} />
          <h3 id="collaboration-heading">
            {servicesContent.collaborationHeading}
          </h3>
          <p className={styles.sectionIntro}>
            {servicesContent.collaborationDescription}
          </p>

          <div className={styles.collaborationGrid}>
            {servicesContent.collaborationTypes.map((item, index) => (
              <article key={item.title} className={styles.collaborationCard}>
                <span className={styles.collaborationNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.collaborationIcon} aria-hidden="true">
                  <ServicesIcon name={item.icon} />
                </div>
                <div className={styles.collaborationCopy}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <span
                  className={styles.collaborationCorner}
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.deliverySection}
          aria-labelledby="workflow-heading"
          data-services-reveal
        >
          <SectionKicker label={servicesContent.workflowLabel} />
          <h3 id="workflow-heading">{servicesContent.workflowHeading}</h3>

          <ol className={styles.deliveryTrack}>
            {servicesContent.workflow.map((step) => (
              <li key={step.index} className={styles.deliveryStep}>
                <div className={styles.deliveryHeader}>
                  <span>{step.index}</span>
                  <ServicesIcon name={step.icon} />
                  <h4>{step.title}</h4>
                </div>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <aside
          className={styles.contactHandoff}
          data-services-reveal
          aria-labelledby="services-handoff-heading"
        >
          <span className={styles.handoffWarmTrace} aria-hidden="true" />
          <span className={styles.handoffCoolTrace} aria-hidden="true" />
          <span className={styles.handoffLabel}>
            {servicesContent.ctaEyebrow}
          </span>

          <div className={styles.handoffIcon} aria-hidden="true">
            <ServicesIcon name="checkCircle" />
          </div>

          <div className={styles.handoffCopy}>
            <h3 id="services-handoff-heading">{servicesContent.ctaHeading}</h3>
            <p>{servicesContent.ctaDescription}</p>
          </div>

          <a className={styles.contactAction} href={servicesContent.ctaHref}>
            <span>{servicesContent.ctaLabel}</span>
            <ServicesIcon name="arrow" />
          </a>
        </aside>

        <div className={styles.sectionEnd} aria-hidden="true">
          <i />
          <span>{servicesContent.meta}</span>
          <i />
        </div>
      </div>
    </section>
  );
}
