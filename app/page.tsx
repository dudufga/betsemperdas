'use client';

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
            <GameCard title="Gates of Olympus" provider="Pragmatic Play" href="/jogos/gates-of-olympus" />
            <GameCard title="Sweet Bonanza" provider="Pragmatic Play" href="/jogos/sweet-bonanza" />
            <GameCard title="Sugar Rush" provider="Pragmatic Play" href="/jogos/sugar-rush" />
            <GameCard title="Big Bass Bonanza" provider="Pragmatic Play" href="/jogos/big-bass-bonanza" />
            <GameCard title="Aviator" provider="Spribe" href="/jogos/aviator" />
            <GameCard title="Starlight Princess" provider="Pragmatic Play" href="/jogos/starlight-princess" />
          </div>
        </div>
      </main>

      <footer className="bg-black py-12 text-center text-gray-500">
        <p>BetSemPerdas • Apenas entretenimento • Jogue com responsabilidade</p>
      </footer>
    </div>
  );
}

function GameCard({ title, provider, href }: any) {
  // Imagens fixas e confiáveis (picsum.photos)
  const images: { [key: string]: string } = {
    "Gates of Olympus": "https://picsum.photos/id/1015/600/400",
    "Sweet Bonanza": "https://picsum.photos/id/133/600/400",
    "Sugar Rush": "https://picsum.photos/id/201/600/400",
    "Big Bass Bonanza": "https://picsum.photos/id/251/600/400",
    "Aviator": "https://picsum.photos/id/1005/600/400",
    "Starlight Princess": "https://picsum.photos/id/1009/600/400",
  };

  const imageUrl = images[title] || "https://picsum.photos/id/1015/600/400";

  return (
    <Link href={href}>
      <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg">
        <img 
          src={imageUrl} 
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