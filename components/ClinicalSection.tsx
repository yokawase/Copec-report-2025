import React from 'react';

const ClinicalSection: React.FC = () => {
    return (
        <section id="clinical" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-[60px] after:h-[4px] after:bg-risk-orange after:rounded-sm">
                        臨床的展望と対策
                    </h2>
                    <p className="mb-10 text-gray-600">
                        CoPECの影響は発がんの「開始」だけにとどまりません。がんの悪性化、治療抵抗性、さらには脳腸相関を介したメンタルヘルスにも影響します。
                        臨床現場で考慮すべきポイントをまとめました。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Impact 1: Chemoresistance */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:translate-y-[-2px] transition-transform border-l-4 border-red-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="mr-2">💊</span> 化学療法耐性
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                CoPECは腫瘍内の脂質代謝を変化させ、がん細胞を脂質過多の状態にします。これにより、5-FUやオキサリプラチンなどの抗がん剤が効きにくくなることが報告されています。
                            </p>
                            <div className="bg-red-50 p-3 rounded text-sm text-red-900">
                                <strong>対策案:</strong> アシルCoA合成酵素阻害剤の併用や脂質代謝への介入が検討されています。
                            </div>
                        </div>

                        {/* Impact 2: Immune Evasion */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:translate-y-[-2px] transition-transform border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="mr-2">🛡️</span> 免疫回避 (TME)
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                CoPECは腫瘍微小環境(TME)を操作し、がんを攻撃するCD8+ T細胞の浸潤を阻害します。また、<em>B. fragilis</em>と共生してバイオフィルムを形成し、免疫から身を守ります。
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm text-blue-900">
                                <strong>重要性:</strong> 免疫チェックポイント阻害薬の効果にも影響を与える可能性があります。
                            </div>
                        </div>

                        {/* Impact 3: Screening */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:translate-y-[-2px] transition-transform border-l-4 border-green-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="mr-2">🔍</span> 早期スクリーニング
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                便中の<em>pks</em>陽性菌DNAの定量や、コリバクチン特異的DNA付加体の検出が、特に若年性大腸がんやFAP家系のリスク層別化に有効な可能性があります。
                            </p>
                        </div>

                        {/* Impact 4: Brain-Gut Axis */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:translate-y-[-2px] transition-transform border-l-4 border-purple-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                <span className="mr-2">🧠</span> 脳腸相関への影響
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                CoPEC保菌者は不安やうつ様行動のリスクが高いことが示されています。原因不明のメンタル不調が大腸がんリスクのサインである可能性も示唆されています。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicalSection;