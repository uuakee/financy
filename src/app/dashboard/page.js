import Header from '@/components/ui/Header';
import PeriodSelector from '@/components/ui/PeriodSelector';
import MoneyCard from '@/components/ui/MoneyCard';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl font-bold">👋 Olá, John Doe</h1>
          <PeriodSelector />
        </div>
        <div className='mt-8 items-center grid grid-cols-3 gap-2'>
        <MoneyCard title="Total em conta" amount="R$ 1,230.12" highlight="amount"/>
        <MoneyCard title="Entradas" amount="R$ 1,230.12" percentage="8.2%" />
        <MoneyCard title="Despesas" amount="R$ 5,323.21" percentage="-8.2%" />
        </div>
      </div>
    </div>
  );
}
