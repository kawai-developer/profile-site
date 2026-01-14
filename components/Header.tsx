
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#004080] rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">deployed_code</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">Takuya Kawai</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#vision" className="text-sm font-medium hover:text-[#004080] transition-colors">Vision</a>
          <a href="#services" className="text-sm font-medium hover:text-[#004080] transition-colors">Services</a>
          <a href="#profile" className="text-sm font-medium hover:text-[#004080] transition-colors">Profile</a>
          <a href="#contact" className="text-sm font-medium hover:text-[#004080] transition-colors">Contact</a>
          <button className="bg-[#004080] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
            無料相談を予約する
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
