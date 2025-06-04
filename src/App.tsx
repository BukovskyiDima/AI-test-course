import { useState } from 'react';
import { PricingCard } from './components/PricingCard';
import { Modal } from './components/Modal';

const cards = [
  {
    plan: 'Standard',
    price: '100',
    features: [
      '50,000 Requests',
      '4 contributors',
      'Up to 3 GB storage space',
    ],
  },
  {
    plan: 'Pro',
    price: '200',
    features: [
      '100,000 Requests',
      '7 contributors',
      'Up to 6 GB storage space',
    ],
  },
  {
    plan: 'Expert',
    price: '500',
    features: [
      '200,000 Requests',
      '11 contributors',
      'Up to 10 GB storage space',
    ],
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(1); // по умолчанию Pro
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-12 text-center">Pricing</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-0">
          {cards.map((card, idx) => (
            <PricingCard
              key={card.plan}
              {...card}
              isActive={idx === activeIndex}
              onClick={() => setActiveIndex(idx)}
              style={{ cursor: 'pointer' }}
              onSubscribe={() => setShowModal(true)}
            />
          ))}
        </div>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="text-xl font-semibold mb-2">Спасибо за покупку</div>
      </Modal>
    </div>
  );
}

export default App; 