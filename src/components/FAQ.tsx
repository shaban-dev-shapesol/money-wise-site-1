import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const faqs = [
  {
    question: "What is FocusMembers?",
    answer:
      "A monthly subscription (£3.99/month) offering budgeting tools, planners, trackers, discount codes, freebies, and practical monthly resources all delivered digitally.",
  },
  {
    question: "Is the content digital?",
    answer: "Yes, everything is delivered online for instant access.",
  },
  {
    question: "Can I try it first?",
    answer: "Yes, enjoy a 1-month free trial.",
  },
  {
    question: "What do I get as a member?",
    answer:
      "• Monthly digital magazine\n• Budgeting worksheets & seasonal planners\n• Money challenges & organisational tools\n• Discount codes & freebies\n• Member-only updates and perks",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts or hidden fees.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <FadeUp>
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                FAQ
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Need Answers Fast?
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground text-lg">
                We've got you covered.
              </p>
            </FadeUp>
          </div>

          {/* Accordion */}
          <StaggerContainer staggerDelay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-premium-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline hover:text-accent transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
