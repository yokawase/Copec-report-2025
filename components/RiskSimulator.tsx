import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { RiskData } from '../types';

const RiskSimulator: React.FC = () => {
    const [fiber, setFiber] = useState<number>(50);
    const [fat, setFat] = useState<number>(50);

    // Derived logic based on original JS
    const { adhesion, inflammation, risk, riskColor, riskLabel } = useMemo(() => {
        let calcAdhesion = 50 + (fat * 0.3) - (fiber * 0.4);
        let calcInflammation = 20 + (fat * 0.8) - (fiber * 0.2);

        // Interaction effect: High Fat + Low Fiber = Multiplier effect
        if (fat > 70 && fiber < 30) {
            calcAdhesion += 15;
            calcInflammation += 15;
        }

        // Clamp values
        calcAdhesion = Math.min(100, Math.max(0, calcAdhesion));
        calcInflammation = Math.min(100, Math.max(0, calcInflammation));

        // Risk is a composite
        let calcRisk = (calcAdhesion * 0.4) + (calcInflammation * 0.6);
        calcRisk = Math.min(100, Math.max(0, calcRisk));

        let color = '';
        let label = '';
        if (calcRisk < 30) {
            label = "良好 (防御的環境)";
            color = "#38a169"; // Green
        } else if (calcRisk < 60) {
            label = "中等度リスク";
            color = "#fbbf24"; // Yellow
        } else {
            label = "高リスク (炎症・増殖促進)";
            color = "#ef4444"; // Red
        }

        return {
            adhesion: Math.round(calcAdhesion),
            inflammation: Math.round(calcInflammation),
            risk: Math.round(calcRisk),
            riskColor: color,
            riskLabel: label
        };
    }, [fiber, fat]);

    const chartData: RiskData[] = [
        { name: 'CoPEC付着率', value: adhesion, fill: 'rgba(54, 162, 235, 0.7)' },
        { name: '炎症レベル', value: inflammation, fill: 'rgba(255, 99, 132, 0.7)' },
        { name: '発がんリスク', value: risk, fill: 'rgba(255, 159, 64, 0.7)' },
    ];

    const getFiberLabel = (val: number) => val < 30 ? "低" : val > 70 ? "高" : "中";
    const getFatLabel = (val: number) => val < 30 ? "低" : val > 70 ? "高" : "中";

    return (
        <section id="environment" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-[60px] after:h-[4px] after:bg-risk-orange after:rounded-sm">
                        環境要因：運命を決める「食事」
                    </h2>
                    <p className="mb-8 text-gray-600 max-w-3xl">
                        「菌がいるだけ」では必ずしも発がんしません。最新の研究(2024-2025)は、食事や腸内環境が発がんのスイッチになることを示しています。
                        以下のシミュレーターで、<strong>食物繊維</strong>と<strong>脂肪摂取量</strong>のバランスが、CoPECのリスクレベルにどう影響するか確認してください。
                    </p>

                    <div className="flex flex-col lg:flex-row gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        {/* Controls */}
                        <div className="w-full lg:w-1/3 space-y-8 p-4 bg-white rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-slate-700 border-b pb-2">食事パラメーター設定</h3>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 flex justify-between">
                                    <span>🥦 水溶性食物繊維 (イヌリン等)</span>
                                    <span className="text-green-600">{getFiberLabel(fiber)}</span>
                                </label>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={fiber} 
                                    onChange={(e) => setFiber(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" 
                                />
                                <p className="text-xs text-gray-500 mt-1">高繊維食は粘膜バリアを保護します。</p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 flex justify-between">
                                    <span>🍔 脂肪摂取量</span>
                                    <span className="text-orange-600">{getFatLabel(fat)}</span>
                                </label>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={fat} 
                                    onChange={(e) => setFat(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600" 
                                />
                                <p className="text-xs text-gray-500 mt-1">高脂肪食は炎症と細菌増殖を促進します。</p>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-800 text-sm mb-2">💡 最新エビデンス</h4>
                                <p className="text-xs text-blue-700">
                                    2025年のThakurらの研究により、イヌリン（水溶性食物繊維）の摂取がCoPECによる発がんリスクを有意に低減させることが示されました。
                                </p>
                            </div>
                        </div>

                        {/* Visual Output */}
                        <div className="w-full lg:w-2/3 flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-gray-700 mb-4">大腸発がんリスク予測シミュレーション</h3>

                            {/* Visual Feedback Bar */}
                            <div className="w-full max-w-md mb-6">
                                <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                                    <span>腸内環境の状態:</span>
                                    <span style={{ color: riskColor }} className="font-bold">{riskLabel}</span>
                                </div>
                                <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full transition-all duration-500 ease-out" 
                                        style={{ width: `${risk}%`, backgroundColor: riskColor }}
                                    ></div>
                                </div>
                            </div>

                            <div className="h-[300px] md:h-[350px] w-full max-w-[600px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                        <YAxis domain={[0, 100]} />
                                        <Tooltip cursor={{ fill: 'transparent' }} />
                                        <Bar dataKey="value" radius={[5, 5, 0, 0]}>
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="text-xs text-center text-gray-400 mt-2">※このグラフは報告書の定性的知見に基づいた概念的なシミュレーションです。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskSimulator;