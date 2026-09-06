import { useState } from 'react';
import { faq } from '../../data/faq';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-24 bg-canvas" aria-label="Frequently Asked Questions">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-ink mb-12 text-center">
          Frequently asked questions
        </h2>
        <div className="border-t border-slate/20">
          {faq.map((item) => (
            <Accordion
              key={item.id}
              title={item.question}
              isOpen={openId === item.id}
              onClick={() => toggleItem(item.id)}
            >
              {item.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}