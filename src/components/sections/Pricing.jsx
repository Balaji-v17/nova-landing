import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import Toggle from '../ui/Toggle';
import { pricing } from '../../data/pricing';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="w-full py-24 bg-white" aria-label="Pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-ink mb-6">Simple, transparent pricing.</h2>
          <Toggle 
            enabled={isAnnual} 
            onChange={setIsAnnual} 
            labelLeft="Monthly" 
            labelRight="Annually (Save 20%)" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-xl border flex flex-col ${
                plan.popular ? 'border-accent shadow-sm' : 'border-slate/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-bold text-ink mb-2">{plan.name}</h3>
              <p className="text-slate mb-6 h-12">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-5xl font-display font-bold text-ink">
                  ${isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className="text-slate font-medium">/mo</span>
              </div>
              
              <button className={`w-full py-3 rounded-md font-medium mb-8 transition-colors ${
                plan.popular ? 'bg-accent text-white hover:bg-ink' : 'bg-canvas text-ink border border-slate/20 hover:bg-slate/10'
              }`}>
                Get Started
              </button>
              
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate">
                    <FiCheck className="w-5 h-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}