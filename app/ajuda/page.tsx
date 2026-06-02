import Link from 'next/link';

export default function Ajuda() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-yellow-400">Ajuda para Quem Está Viciado em Jogos</h1>
        
        <div className="bg-gray-900 rounded-3xl p-10 mb-10">
          <h2 className="text-2xl font-bold mb-6">🎯 Nossa Missão</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            BetSemPerdas foi criado para ajudar pessoas que lutam contra o vício em apostas. 
            Aqui você pode jogar quantas vezes quiser sem gastar dinheiro real, apenas por diversão.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🚨 Sinais de que você pode estar com vício</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Jogar mais do que pretendia</li>
              <li>Esconder quanto gasta em apostas</li>
              <li>Irritação quando não pode jogar</li>
              <li>Tentar recuperar o dinheiro perdido</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">📞 Onde buscar ajuda no Brasil</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">CVV - Centro de Valorização da Vida</h4>
                <p className="text-3xl font-bold text-green-400">188</p>
                <p className="text-sm text-gray-400 mt-2">Atendimento 24h - Gratuito e confidencial</p>
                <a href="https://cvv.org.br" target="_blank" className="text-yellow-400 hover:underline mt-4 block">
                  Acessar site →
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">Jogadores Anônimos Brasil</h4>
                <p className="text-gray-300">Grupo de apoio para pessoas com vício em jogos</p>
                <a href="https://www.jogadoresanonimos.org.br" target="_blank" className="text-yellow-400 hover:underline mt-4 block">
                  Acessar site →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">Lembre-se: Você não está sozinho. Pedir ajuda é sinal de força.</p>
        </div>
      </div>
    </div>
  );
}