import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "@/app/components/FadeInSection";
import Contact from "@/app/components/form/Contact";

interface CourseBookingFormProps {
  labelKey: string;
  titleKey: string;
  coursePage: string;
}

const CourseBookingForm = ({
  labelKey,
  titleKey,
  coursePage
}: CourseBookingFormProps) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      console.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    await fetch("/api/course-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...formData, coursePage }),
    });

    setFormData({ firstName: "", lastName: "", email: "", message: "", });
    setIsSubmitting(false);
    setSent(true);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <Contact label={t(labelKey)} title={t(titleKey)} />

          <FadeInSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    {t(`formFirstName`)} <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    {t(`formLastName`)}
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  {t(`formEmail`)} <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  {t(`formMessage`)} <span className="text-accent">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors font-body resize-none"
                  placeholder={t(`formPlaceholder`)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground rounded-sm font-medium tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50 font-body"
              >
                {isSubmitting ? t(`formSending`) : t(`formButton`)}
              </button>
              
              { sent && <div className="mt-2 text-primary font-body text-sm text-center font-bold">
                {t('formSuccess')} 😊
                </div>
              }
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default CourseBookingForm;