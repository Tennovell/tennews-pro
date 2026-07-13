"use client";
import { useState } from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button className="text-2xl hover:bg-gray-100 p-1 rounded-lg transition-colors">☰</button>
        <h1 className="text-xl font-black text-blue-700 tracking-tighter uppercase">TĒNNEWS PRO</h1>
      </div>
      <button className="text-xl hover:bg-gray-100 p-2 rounded-full transition-colors">🔍</button>
    </header>
  );
}

