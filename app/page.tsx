'use client';   // ← Adicionado isso para resolver o erro

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="bg-black py-5 border-b border-yellow-500">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-400">BetSemPerdas</h1>
          <nav className="flex gap-8 text-lg">
            <Link href="/" className="hover:text-yellow-400">Início</Link>
            <Link href="/ajuda" className="hover:text-yellow-400">Ajuda e Responsabilidade</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-purple-900 to-black py-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Jogue Grátis Sem Perder Dinheiro</h2>
          <p className="text-2xl text-gray-300">Demos oficiais • Zero risco • Apenas diversão</p>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-3xl font-bold mb-10 text-center">Jogos Populares</h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <GameCard 
              title="Gates of Olympus" 
              provider="Pragmatic Play" 
              image="https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Gates+of+Olympus"
              href="/jogos/gates-of-olympus" 
            />
            <GameCard 
              title="Sweet Bonanza" 
              provider="Pragmatic Play" 
              image="https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Sweet+Bonanza"
              href="/jogos/sweet-bonanza" 
            />
            <GameCard 
              title="Sugar Rush" 
              provider="Pragmatic Play" 
              image="https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Sugar+Rush"
              href="/jogos/sugar-rush" 
            />
            <GameCard 
              title="Big Bass Bonanza" 
              provider="Pragmatic Play" 
              image="https://via.placeholder.com/600x400/10B981/FFFFFF?text=Big+Bass"
              href="/jogos/big-bass-bonanza" 
            />
            <GameCard 
              title="Aviator" 
              provider="Spribe" 
              image="https://via.placeholder.com/600x400/F97316/FFFFFF?text=Aviator"
              href="/jogos/aviator" 
            />
            <GameCard 
              title="Starlight Princess" 
              provider="Pragmatic Play" 
              image="https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Starlight"
              href="/jogos/starlight-princess" 
            />
          </div>
        </div>
      </main>

      <footer className="bg-black py-12 text-center text-gray-500">
        <p>BetSemPerdas • Apenas entretenimento • Jogue com responsabilidade</p>
      </footer>
    </div>
  );
}

function GameCard({ title, provider, image, href }: any) {
  return (
    <Link href={href}>
      <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-52 object-cover"
        />
        <div className="p-5">
          <p className="font-semibold text-lg">{title}</p>
          <p className="text-sm text-gray-400">{provider}</p>
        </div>
      </div>
    </Link>
  );
}