import React from 'react';

const MechanismSection: React.FC = () => {
    return (
        <section id="mechanism" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-[60px] after:h-[4px] after:bg-risk-orange after:rounded-sm">
                        発がんの分子メカニズム
                    </h2>
                    <p className="mb-10 text-gray-600">
                        コリバクチン産生菌（CoPEC）がどのようにして正常な細胞をがん化させるのか、その微細なメカニズムを解説します。
                        最新の研究では、コリバクチンがDNAの特定の領域（ATリッチなマイナーグルーブ）を標的とし、
                        「SBS-pks」という消えない痕跡（変異シグネチャー）を残すことが判明しています。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:translate-y-[-2px] transition-transform border-t-4 border-orange-400">
                            <div className="text-4xl mb-4">🦠</div>
                            <h3 className="text-xl font-bold mb-2">1. 侵入と付着</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                腸内環境が悪化すると、CoPECはL-セリンを利用して増殖し、腸管上皮に物理的に<strong>付着(Adhesion)</strong>します。
                            </p>
                            <div className="bg-orange-50 p-2 rounded text-xs text-orange-800">
                                <strong>最新知見(2025):</strong> 付着こそが毒性発揮の必須条件。
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:translate-y-[-2px] transition-transform border-t-4 border-red-500">
                            <div className="text-4xl mb-4">🧬</div>
                            <h3 className="text-xl font-bold mb-2">2. DNA攻撃</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                不安定なシクロプロパン環を持つコリバクチンが放出され、DNAの<strong>アデニン残基をアルキル化</strong>し、鎖間架橋(ICL)を形成します。
                            </p>
                            <div className="bg-red-50 p-2 rounded text-xs text-red-800">
                                <strong>構造解析:</strong> ATリッチな領域のマイナーグルーブを標的とする。
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:translate-y-[-2px] transition-transform border-t-4 border-purple-600">
                            <div className="text-4xl mb-4">⚠️</div>
                            <h3 className="text-xl font-bold mb-2">3. 変異の刻印</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                修復エラーにより二本鎖切断が発生。修復後もゲノムに<strong>SBS-pks</strong>という特有の変異シグネチャーが残ります。
                            </p>
                            <div className="bg-purple-50 p-2 rounded text-xs text-purple-800">
                                <strong>証拠:</strong> この痕跡により過去の感染歴と発がんの因果関係が証明可能に。
                            </div>
                        </div>
                    </div>

                    {/* Visual Explanation Block */}
                    <div className="mt-12 bg-white rounded-xl shadow-inner p-8 border border-gray-200">
                        <h3 className="font-bold text-lg mb-4 text-center">DNA損傷のプロセス概念図</h3>
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center">
                            <div className="flex-1">
                                <div className="inline-block px-4 py-2 bg-gray-200 rounded-full font-bold text-gray-700">正常 DNA</div>
                            </div>
                            <div className="text-2xl text-gray-400">⬇️</div>
                            <div className="flex-1">
                                <div className="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-lg text-orange-900">
                                    <span className="block text-xs font-bold text-orange-600">コリバクチン</span>
                                    アルキル化 & 架橋
                                </div>
                            </div>
                            <div className="text-2xl text-gray-400">⬇️</div>
                            <div className="flex-1">
                                <div className="inline-block px-4 py-2 bg-red-100 border border-red-400 rounded-lg text-red-900">
                                    <span className="block text-xs font-bold text-red-600">修復エラー</span>
                                    二本鎖切断 (DSB)
                                </div>
                            </div>
                            <div className="text-2xl text-gray-400">⬇️</div>
                            <div className="flex-1">
                                <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-400 rounded-full font-bold text-purple-900">
                                    癌化 (SBS-pks)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MechanismSection;