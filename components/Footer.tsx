
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f3d] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-white/10 pb-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#004080] rounded flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">deployed_code</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Takuya Kawai</h2>
            </div>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              中小企業のAI活用と業務効率化を支援するパートナー。<br />
              テクノロジーの力で、あなたのビジネスに新しい風を吹き込みます。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <p className="font-bold text-sm">Navigation</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#vision" className="hover:text-white transition-colors">Vision</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-sm">About</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#profile" className="hover:text-white transition-colors">Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <p className="font-bold text-sm">Social</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-lg">alternate_email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] uppercase tracking-widest">
          <p>© 2024 Takuya Kawai Digital Portfolio. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Designed for Excellence</span>
            <span>Powered by AI Insight</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
