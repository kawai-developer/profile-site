
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('お問い合わせありがとうございます。担当者よりご連絡いたします。');
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-[#004080] font-bold tracking-widest text-sm mb-4 uppercase">CONTACT</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">新しい一歩を、<br className="md:hidden" />ここから始めましょう。</h2>
          <p className="text-slate-500">ご質問や無料相談のご予約は、以下のフォームよりお気軽にお問い合わせください。</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">お名前</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#004080] h-12 px-4 transition-all" 
                placeholder="山田 太郎" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">貴社名</label>
              <input 
                type="text" 
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#004080] h-12 px-4 transition-all" 
                placeholder="株式会社AIソリューション" 
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-700 mb-2">メールアドレス</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#004080] h-12 px-4 transition-all" 
              placeholder="example@company.com" 
            />
          </div>
          <div className="mb-10">
            <label className="block text-sm font-bold text-slate-700 mb-2">お問い合わせ内容</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#004080] px-4 py-3 transition-all" 
              placeholder="ご相談内容の詳細をご記入ください" 
              rows={5}
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-[#001f3d] text-white h-14 rounded-lg text-base font-bold shadow-lg shadow-navy-800/20 hover:bg-[#004080] transition-all flex items-center justify-center gap-2"
          >
            送信する <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
