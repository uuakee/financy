import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function MoneyCard({ title, amount, percentage, highlight = false }) {
  // Verifica se a porcentagem é positiva ou negativa
  const isPositive = parseFloat(percentage) > 0;

  // Se highlight for verdadeiro, o amount será azul, caso contrário, preto
  const amountClass = highlight ? 'text-blue-600' : 'text-gray-800';
  
  // A porcentagem terá a cor verde se positiva, vermelha se negativa
  const percentageClass = isPositive ? 'text-green-700' : 'text-red-700';

  return (
    <div className="p-4 bg-white border rounded-lg flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className={`${amountClass} text-3xl font-bold`}>{amount}</h2>
      </div>

      {/* Renderiza a porcentagem e o ícone somente se a porcentagem estiver preenchida */}
      {percentage && (
        <div className={`flex items-center ${isPositive ? 'bg-green-100' : 'bg-red-100'} rounded-lg px-2 py-1`}>
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-sm ml-1 ${percentageClass}`}>
            {percentage}
          </span>
        </div>
      )}
    </div>
  );
}
