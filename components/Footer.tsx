import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <h4 className="text-lg font-bold mb-2">大腸がんとコリバクチン：最新知見まとめ</h4>
                <p className="text-gray-400 text-sm mb-4">Based on Evidence Miner Report (2025/12/25)</p>
                <p className="text-xs text-gray-500 max-w-2xl mx-auto">
                    免責事項: 本アプリケーションは研究報告の情報を可視化したものであり、医療アドバイスではありません。診断や治療については専門医にご相談ください。
                </p>
            </div>
        </footer>
    );
};

export default Footer;