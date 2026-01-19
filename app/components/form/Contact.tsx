import { useTranslation } from "react-i18next";
import { FadeInSection } from "../FadeInSection";

const Contact = ({label, title}: {label: string, title: string}) => {
  const { t } = useTranslation();

  return (
    <FadeInSection>
      <div className="text-center mb-12">
        <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
          {label}
        </span>
        <h2 className="font-display text-4xl text-foreground font-light mt-4">
          {title}
        </h2>
        <p className="text-muted-foreground font-body mt-4">
          {t('formContact')}{" "}
          <a
            href="mailto:info@inhaleblue.com"
            className="text-primary hover:underline"
          >
            {t('email')}
          </a>{" "}
          {t('formOr')}{" "}
          <a
            href="tel:+38641335646"
            className="text-primary hover:underline"
          >
            {t('phone')}
          </a>{" "}
          ({t('name')})
        </p>
      </div>
    </FadeInSection>
  );
};

export default Contact;
