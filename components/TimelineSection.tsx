import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TimelineEvent } from '../types';

const timelineData: TimelineEvent[] = [
    { year: 2006, impact: 20, label: '発見', desc: 'pksアイランドの発見。DNA二本鎖切断能の同定。' },
    { year: 2012, impact: 40, label: '炎症との関連', desc: '炎症が大腸菌の発がん活性を促進することを示唆。' },
    { year: 2019, impact: 70, label: '構造解明', desc: 'コリバクチンの化学構造とDNAアルキル化作用を特定。' },
    { year: 2020, impact: 90, label: '因果関係確立', desc: '変異シグネチャー(SBS-pks)の特定。発がんの直接原因であると証明。' },
    { year: 2025, impact: 100, label: '環境・代謝', desc: '食事(繊維)、代謝(L-セリン)、付着因子による制御メカニズムの解明。' }
];

const TimelineSection: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

    return (
        <section id="overview" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-[60px] after:h-[4px] after:bg-risk-orange after:rounded-sm">
                        研究のパラダイムシフト
                    </h2>
                    <p className="mb-8 text-gray-600">
                        本セクションでは、2006年の発見から2025年の最新知見に至るまでの研究の歴史を可視化します。
                        かつては「相関関係」にとどまっていた理解が、変異シグネチャーの発見により「因果関係」へと変化し、
                        現在は食事や代謝による制御メカニズムの解明へと進んでいます。
                    </p>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-center mb-4 text-gray-700">CoPEC研究の進展とインパクト (2006-2025)</h3>
                        <div className="h-[300px] md:h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart 
                                    data={timelineData} 
                                    onClick={(e) => {
                                        if (e && e.activePayload && e.activePayload.length > 0) {
                                            setSelectedEvent(e.activePayload[0].payload as TimelineEvent);
                                        }
                                    }}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis 
                                        dataKey="year" 
                                        tick={{fill: '#4b5563'}} 
                                        axisLine={{stroke: '#9ca3af'}}
                                        padding={{ left: 20, right: 20 }}
                                    />
                                    <YAxis 
                                        domain={[0, 110]} 
                                        tick={{fill: '#4b5563'}} 
                                        axisLine={false}
                                        label={{ value: '重要度', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                                    />
                                    <Tooltip 
                                        formatter={(value: number) => [value, 'インパクト']}
                                        labelFormatter={(label) => `${label}年`}
                                        contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    />
                                    <Line 
                                        type="monotone" 
                                        dataKey="impact" 
                                        stroke="#2b6cb0" 
                                        strokeWidth={3}
                                        dot={{ r: 6, fill: '#fff', stroke: '#c05621', strokeWidth: 2 }}
                                        activeDot={{ r: 8, fill: '#c05621' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        
                        {/* Detail Box */}
                        <div className={`mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm text-blue-900 rounded transition-all duration-300 ${selectedEvent ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'}`}>
                            {selectedEvent && (
                                <p>
                                    <strong>{selectedEvent.year}年 - {selectedEvent.label}:</strong> {selectedEvent.desc}
                                </p>
                            )}
                        </div>
                        {!selectedEvent && <p className="text-center text-xs text-gray-400 mt-2">ポイントをクリックして詳細を表示</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;