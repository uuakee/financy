import Header from '@/components/ui/Header';
import PeriodSelector from '@/components/ui/PeriodSelector';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl font-bold">👋 Olá, John Doe</h1>
          <PeriodSelector />
        </div>
      </div>
    </div>
  );
}
