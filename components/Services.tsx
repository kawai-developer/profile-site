
import React from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="text-[#004080] font-bold tracking-widest text-sm mb-4 uppercase">SERVICES</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              事業成長を加速させる<br />3つのコアサービス
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm">
            お客様の課題に合わせた柔軟なソリューションを提供し、短期間で目に見える成果を創出します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon="school"
            title="社内研修"
            description="AIリテラシーの向上から、具体的なツール活用術まで。社員一人ひとりがAIを武器にできる組織づくりを支援します。"
            items={["基礎リテラシー講座", "実践ワークショップ"]}
          />
          <ServiceCard 
            icon="chat_paste_go"
            title="ChatGPT導入支援"
            description="業務フローの分析からプロンプトエンジニアリングの定着まで。セキュアで効率的な導入プロセスをリードします。"
            items={["業務プロセス最適化", "社内ガイドライン策定"]}
          />
          <ServiceCard 
            icon="precision_manufacturing"
            title="自動化ツール開発"
            description="ノーコード・ローコードツールを駆使し、単純作業を徹底的に自動化。即効性のあるシステムを構築します。"
            items={["API連携開発", "独自ボット構築"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
