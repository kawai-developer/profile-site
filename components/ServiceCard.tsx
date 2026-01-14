
import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, items }) => {
  return (
    <div className="group bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="w-14 h-14 bg-[#004080]/10 rounded-xl flex items-center justify-center text-[#004080] mb-8 group-hover:bg-[#004080] group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <ul className="space-y-3 text-sm text-slate-500">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#004080] text-sm">check_circle</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
