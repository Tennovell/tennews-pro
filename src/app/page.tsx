"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[#0a0a0a] min-h-screen"></div>;

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white font-sans p-5">
      <header className="border-b border-[#222] pb-5 mb-5">
        <h1 className="text-xl font-bold">BERITA TĒN</h1>
      </header>
      
      <div className="space-y-4">
        <div className="p-5 bg-[#141414] rounded-2xl border border-[#222]">
          <p className="text-[10px] text-[#bf9b30] font-black uppercase mb-1">FIFA</p>
          <h2 className="text-sm font-bold">Laga Final Sepakbola Dunia: FIFA Umumkan Tuan Rumah Baru</h2>
        </div>
      </div>
    </main>
  );
}

