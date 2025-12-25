import React from 'react';

const Hero: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 md:py-20">
            <div className="container mx-auto px-4 text-center">
                <span className="inline-block bg-orange-500 text-xs font-bold px-2 py-1 rounded mb-4 tracking-wider">
                    LATEST EVIDENCE 2006-2025
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    大腸がんとコリバクチン
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    遺伝毒素産生大腸菌（CoPEC）は、単なるリスク因子ではなく<br className="hidden md:inline" />
                    <span className="text-white font-bold border-b-2 border-orange-500">
                        発がんの直接的なドライバー
                    </span>
                    であることが証明されました。
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#environment" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105">
                        食事リスクをシミュレート
                    </a>
                    <a href="#mechanism" className="bg-transparent border border-gray-400 hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-lg transition">
                        メカニズムを知る
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;