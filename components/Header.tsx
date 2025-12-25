import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="font-bold text-xl text-gray-800 flex items-center">
                    <span className="text-2xl mr-2">🧬</span>
                    <span>CoPEC Report 2025</span>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                    <a href="#overview" className="hover:text-blue-600 transition">概要</a>
                    <a href="#mechanism" className="hover:text-blue-600 transition">分子メカニズム</a>
                    <a href="#environment" className="hover:text-blue-600 transition">食事と環境</a>
                    <a href="#clinical" className="hover:text-blue-600 transition">臨床展望</a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-50 border-t">
                    <a href="#overview" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>概要</a>
                    <a href="#mechanism" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>分子メカニズム</a>
                    <a href="#environment" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>食事と環境</a>
                    <a href="#clinical" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>臨床展望</a>
                </div>
            )}
        </nav>
    );
};

export default Header;