'use client';

import { Calendar } from 'lucide-react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PeriodSelector() {
  const [selectedPeriod, setSelectedPeriod] = useState('This month');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const periods = ['Hoje', 'Este mês', 'Últimos 2 meses', 'Este ano'];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
      <div className="hidden sm:flex flex-wrap sm:flex-nowrap space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 bg-gray-100 p-1 rounded-lg w-full sm:w-auto">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`w-full sm:w-auto px-3 py-2 rounded-md text-sm font-medium ${
              selectedPeriod === period ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      <button
        className="flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 w-full sm:w-auto sm:hidden"
        onClick={() => setShowDatePicker(true)}
      >
        <Calendar className="w-5 h-5 mr-2" />
        Selecionar período
      </button>

      {showDatePicker && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 sm:w-3/4 lg:w-1/2 max-h-[90vh] overflow-auto">
            <h2 className="text-lg font-semibold mb-4 text-center">Escolha o período</h2>

            <div className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Data de início</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholderText="Selecione a data de início"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Data de término</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholderText="Selecione a data de término"
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md w-full mr-2"
                onClick={() => setShowDatePicker(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md w-full ml-2"
                onClick={() => {
                  setShowDatePicker(false);
                  // Adicionar lógica para processar as datas selecionadas
                }}
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
