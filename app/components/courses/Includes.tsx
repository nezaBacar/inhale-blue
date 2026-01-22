'use client'

import { useTranslation } from "react-i18next";

interface CourseIncludesListProps {
  labelKey: string;
  titleKey: string;
  itemsPrefix: string;
  pricing: string;
  itemCount?: number;
}

const CourseIncludesList = ({
  labelKey,
  titleKey,
  itemsPrefix,
  pricing,
  itemCount = 6,
}: CourseIncludesListProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
        {t(labelKey)}
      </span>
      <h2 className="font-display text-3xl text-foreground font-light mt-4 mb-8">
        {t(titleKey)}
      </h2>
      <div className="p-8 bg-secondary rounded-sm">
        <div className="mb-6">
          <span className="font-display text-4xl text-primary">
            {pricing}
          </span>
          <span className="text-muted-foreground font-body">{t('depthWorkshops.priceNote')}</span>
        </div>
        <ul className="space-y-3">
          {Array.from({ length: itemCount }, (_, index) => (
            <li
              key={index + 1}
              className="flex items-start gap-3 text-muted-foreground font-body text-sm"
            >
              <svg
                className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {t(`${itemsPrefix}${index + 1}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseIncludesList;