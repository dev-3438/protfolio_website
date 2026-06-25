import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have extensive experience with TypeScript, Tailwind CSS, Framer Motion, and modern frontend tooling. I also work with C++, Python, and SQL for broader development needs.',
  },
  {
    question: 'What types of projects have you built?',
    answer: 'I have built production-ready SaaS applications, e-commerce platforms, visitor management systems, banking applications, learning management systems, and task management apps. Each project focuses on scalability, security, and exceptional user experience.',
  },
  {
    question: 'Are you available for freelance work?',
    answer: 'Yes, I am available for freelance projects and collaborations. I enjoy working on challenging projects that require creative problem-solving and modern web technologies. Feel free to reach out through the contact form.',
  },
  {
    question: 'How do you approach project development?',
    answer: 'I follow agile methodologies with a focus on clean architecture, test-driven development, and continuous integration. I prioritize understanding client requirements, planning thoroughly, and delivering iterative improvements with clear communication throughout.',
  },
  {
    question: 'What is your experience with open source?',
    answer: 'I actively contribute to open-source projects on GitHub. I believe in giving back to the community and have submitted PRs, reported issues, and collaborated with developers worldwide to improve tools and libraries.',
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-white pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-accent-cyan" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-slate-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-2 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
