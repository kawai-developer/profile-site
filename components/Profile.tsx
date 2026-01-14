
import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-slate-100 overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm-Y0mBnOH0Ikfq7YZ8Rz-ad22AK6yP1LgBWLMEC9Q-wYURts03k37VY1Gb8QKV_pL3N5xhsIkZrcJDxVpReVqxiH9Rx7pOt5LjjwRPT28UdjfxFy2pi4jTP-q-eYXnoFrSH9HrQkZaFk-aQAj35b3IROtWHm2E-m6cs-_Z6_UywjNgZ3h-1-mh2aTEso-Ap4ScILAiuNHbOlpI0kOhji4MlGpIzrhvlR9I4KjpLDqT-oLsfb1UhcsTecHwDJqW-pcRRqskgS_Mv4" 
                alt="川合 卓也" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/50">
                <p className="text-[#004080] font-bold text-lg mb-1">川合 卓也 (Takuya Kawai)</p>
                <p className="text-slate-500 text-sm">AI Efficiency Consultant</p>
              </div>
            </div>
            {/* Decorative backgrounds */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#004080]/5 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#004080]/10 rounded-full -z-10"></div>
          </div>

          <div>
            <h3 className="text-[#004080] font-bold tracking-widest text-sm mb-4 uppercase">PROFILE</h3>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">
              ビジネスの最前線と<br />テクノロジーを繋ぐ。
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                大手IT企業でのエンジニア経験と、多種多様な中小企業でのコンサルティング実績を併せ持つビジネス効率化スペシャリスト。
              </p>
              <p>
                「現場で使われない技術は意味がない」という信念のもと、現場の従業員が明日から使える、地に足の着いたAI活用術を提唱。これまでに延べ100社以上のSMEに対し、ChatGPT導入やRPAを活用した業務改善を実施。
              </p>
              <p>
                技術的な指導に留まらず、経営戦略に基づいたDXのロードマップ策定を得意とし、経営者の「想い」を形にするデジタルパートナーとして活動しています。
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#004080]">100+</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Support Companies</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#004080]">15yrs</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">IT Industry Exp.</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#004080]">500+</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">AI Training Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
