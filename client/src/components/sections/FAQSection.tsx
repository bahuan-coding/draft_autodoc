import { useTranslation } from "react-i18next";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export default function FAQSection() {
  const { t } = useTranslation("home");
  const faqs = (t("faq.items", { returnObjects: true }) as { question: string; answer: string }[]).map((item, i) => ({ ...item, value: `item-${i + 1}` }));
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-black">
      <div className="container max-w-3xl">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              {t("faq.title")} <span className="gradient-text">{t("faq.titleHighlight")}</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="glass-card p-6 sm:p-8">
            <Accordion.Root type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <Accordion.Item
                  key={faq.value}
                  value={faq.value}
                  className="border-b border-white/5 last:border-0"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="w-full flex items-center justify-between py-5 text-left group focus-visible:ring-2 focus-visible:ring-[#FB0047] focus-visible:outline-none rounded-md px-2 -mx-2">
                      <span className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#FB0047] transition-colors pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className="text-[#5D5D5D] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:rotate-180 shrink-0"
                        aria-hidden="true"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-[#CCCCCC] text-sm sm:text-base leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ lineHeight: '150%' }}>
                    <div className="pb-5 px-2 -mx-2">{faq.answer}</div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
