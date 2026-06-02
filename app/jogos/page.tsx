import Link from 'next/link';

const jogos = [
  { id: "gates-of-olympus", nome: "Gates of Olympus", provider: "Pragmatic Play" },
  { id: "sweet-bonanza", nome: "Sweet Bonanza", provider: "Pragmatic Play" },
  { id: "sugar-rush", nome: "Sugar Rush", provider: "Pragmatic Play" },
  { id: "aviator", nome: "Aviator", provider: "Spribe" },
];

export default function Jogos() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Todos os Jogos Grátis</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jogos.map((jogo) => (
            <Link key={jogo.id} href={`/jogos/${jogo.id}`} className="block">
              <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition p-4">
                <div className="h-64 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-2xl font-bold text-center px-6">
                  {jogo.nome}
                </div>
                <div className="mt-4 text-center">
                  <p className="font-semibold text-lg">{jogo.nome}</p>
                  <p className="text-sm text-gray-400">{jogo.provider}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}