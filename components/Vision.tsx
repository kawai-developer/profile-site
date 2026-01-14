
import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-[#004080] font-bold tracking-widest text-sm mb-4 uppercase">VISION</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 leading-tight">
          AIは特別な技術ではなく、<br />共に歩むパートナーです。
        </h2>
        <div className="space-y-6">
          <p className="text-slate-600 text-lg leading-loose">
            私たちは、最先端のAI技術をすべての中小企業の皆様が使いこなせる「日常の道具」として提供することを使命としています。
          </p>
          <p className="text-slate-600 text-lg leading-loose">
            テクノロジーは人を置き換えるためのものではなく、人がよりクリエイティブな仕事に集中し、ビジネスの成長を加速させるための「伴走者」であるべきです。私たちは技術の導入だけでなく、その先の組織文化の変革までを共に歩みます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
