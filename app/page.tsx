import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="bg-black py-6 border-b border-yellow-500">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-400">BetSemPerdas</h1>
          <nav className="flex gap-8 text-lg">
            <Link href="/" className="hover:text-yellow-400">Início</Link>
            <Link href="/ajuda" className="hover:text-yellow-400">Ajuda e Responsabilidade</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-purple-900 to-black py-20 text-center">
          <h2 className="text-5xl font-bold mb-4">Jogue Grátis Sem Perder Dinheiro</h2>
          <p className="text-2xl text-gray-300">Demos oficiais • Zero risco financeiro</p>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold mb-10 text-center">Jogos Populares</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-3xl p-8 hover:bg-gray-800 transition">
              <h4 className="text-2xl font-bold mb-2">Gates of Olympus</h4>
              <p className="text-gray-400">Pragmatic Play</p>
              <a href="https://demogamesfree.pragmaticplay.com/demo/freegames.html?game=vs20olympus" target="_blank" 
                 className="mt-6 block bg-yellow-400 text-black py-4 rounded-2xl font-bold text-center">
                Jogar Grátis
              </a>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 hover:bg-gray-800 transition">
              <h4 className="text-2xl font-bold mb-2">Sweet Bonanza</h4>
              <p className="text-gray-400">Pragmatic Play</p>
              <a href="https://demogamesfree.pragmaticplay.com/demo/freegames.html?game=vs20fruits" target="_blank" 
                 className="mt-6 block bg-yellow-400 text-black py-4 rounded-2xl font-bold text-center">
                Jogar Grátis
              </a>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 hover:bg-gray-800 transition">
              <h4 className="text-2xl font-bold mb-2">Aviator</h4>
              <p className="text-gray-400">Spribe</p>
              <a href="https://casino.guru/free-casino-games/crash-games/aviator" target="_blank" 
                 className="mt-6 block bg-yellow-400 text-black py-4 rounded-2xl font-bold text-center">
                Jogar Grátis
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black py-12 text-center text-gray-500">
        <p>BetSemPerdas • Apenas entretenimento • Jogue com responsabilidade</p>
      </footer>
    </div>
  );
}