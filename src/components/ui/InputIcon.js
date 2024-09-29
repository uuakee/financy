import React from 'react';
import { LucideIcon } from 'lucide-react';

export default function InputIcon({ Icon, placeholder, type = 'text', id }) {
  return (
    <div className="relative mb-4">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon className="w-4 h-4 text-gray-400" />
      </span>
      <input
        id={id}
        type={type}
        className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand"
        placeholder={placeholder}
      />
    </div>
  );
}
