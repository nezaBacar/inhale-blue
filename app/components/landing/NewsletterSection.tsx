'use client'

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSection = () => {
  const { t } = useTranslation();
  const isInView = true;
  
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      console.error(t('newsletter.errorEmail'));
      return;
    }

    setIsSubmitting(true);
    
    await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    
    setEmail("");
    setIsSubmitting(false);
    setSent(true);
  };

  return (
    <section id="newsletter" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm tracking-[0.3em] uppercase font-body"
          >
            {t('newsletter.label')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-foreground font-light mt-6 mb-6"
          >
            {t('newsletter.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground font-light mb-12 font-body"
          >
            {t('newsletter.description')}
          </motion.p>

          { sent ? 
            <div className="mt-6 text-primary font-body text-sm font-bold">
              {t('formSuccess')} 😊
            </div> : 
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50 font-body text-sm"
              >
                {isSubmitting ? t('newsletter.submitting') : t('newsletter.button')}
              </button>
            </motion.form>
          }
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
