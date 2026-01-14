
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20">
      <div className="bg-[#001f3d] min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#004080] rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 mb-6 border border-white/20 rounded-full text-white/80 text-xs font-semibold tracking-widest uppercase">
            EMPOWERING SMEs WITH AI
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tight">
            AIは「道具」を超え、<br />
            あなたの最高の「相棒」になる。
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed mb-12 max-w-2xl mx-auto">
            中小企業の可能性を広げる、実践的な業務効率化ソリューション。<br className="hidden md:block" />
            私たちは、最新技術を「使える武器」へと昇華させます。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="min-w-[240px] bg-[#004080] text-white h-14 px-8 rounded-lg text-base font-bold shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              無料相談を予約する
            </button>
            <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 px-6">
              サービス一覧を見る <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
