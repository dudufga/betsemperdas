'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const jogosInfo: any = {
  "gates-of-olympus": {
    nome: "Gates of Olympus",
    provider: "Pragmatic Play",
    demoUrl: "https://great.com/slots/gates-of-olympus/"
  },
  "sweet-bonanza": {
    nome: "Sweet Bonanza",
    provider: "Pragmatic Play",
    demoUrl: "https://great.com/slots/sweet-bonanza-1000/"
  },
  "sugar-rush": {
    nome: "Sugar Rush",
    provider: "Pragmatic Play",
    demoUrl: "https://great.com/slots/sugar-rush/"
  },
  "aviator": {
    nome: "Aviator",
    provider: "Spribe",
    demoUrl: "https://great.com/crash-games/aviator/"
  }
};

export default function JogoPage() {
  const params = useParams();
  const id = params.id as string;
  const jogo = jogosInfo[id];

  if (!jogo) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Jogo não encontrado</h1>
          <Link href="/jogos" className="text-yellow-400 hover:underline text-xl">
            ← Voltar para Todos os Jogos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link href="/jogos" className="text-yellow-400 hover:underline mb-8 inline-block text-lg">
          ← Voltar para Todos os Jogos
        </Link>

        <h1 className="text-4xl font-bold mb-2">{jogo.nome}</h1>
        <p className="text-gray-400 mb-8">{jogo.provider}</p>

        <div className="bg-black rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
          <iframe 
            src={jogo.demoUrl}
            className="w-full aspect-[16/9] min-h-[620px]"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          <p>🎮 Modo demonstração grátis - Saldo virtual</p>
          <p className="mt-3 text-yellow-400">Jogue com responsabilidade • Apenas para entretenimento</p>
        </div>
      </div>
    </div>
  );
}