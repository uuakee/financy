"use client";

import { Bell, Settings, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 sm:px-12 py-4 sm:py-2 shadow-sm bg-white">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Financy Logo" width={120} height={32} />
      </div>

      <nav className="hidden md:flex items-center space-x-6 font-bold">
        <Link href="/dashboard/overview" className="text-sm text-blue-600 bg-blue-100 px-3 py-2 rounded-md">
          Visão Geral
        </Link>
        <Link href="/dashboard/transactions" className="text-sm  text-gray-600 hover:text-gray-800">
          Transações
        </Link>
        <Link href="/dashboard/analytics" className="text-sm  text-gray-600 hover:text-gray-800">
          Análises
        </Link>
        <Link href="/dashboard/accounts" className="text-sm  text-gray-600 hover:text-gray-800">
          Contas
        </Link>
        <Link href="/dashboard/wallet" className="text-sm  text-gray-600 hover:text-gray-800">
          Carteira
        </Link>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <Settings className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <Image
          src='https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671122.jpg'
          alt="Avatar do Usuário"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <div className="flex md:hidden items-center space-x-4">
        <Menu
          className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 space-y-5 w-screen h-screen">
            <div className="flex justify-end">
              <X onClick={() => setMobileMenuOpen(false)} className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src='https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671122.jpg'
                alt="Avatar do Usuário"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-lg font-bold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-600">john.doe@example.com</p>
              </div>
            </div>

            <Link href="/dashboard/overview" className="block text-sm text-blue-600 bg-blue-100 px-3 py-2 rounded-md">
              Visão Geral
            </Link>
            <Link href="/dashboard/transactions" className="block text-sm text-gray-600 hover:text-gray-800">
              Transações
            </Link>
            <Link href="/dashboard/analytics" className="block text-sm text-gray-600 hover:text-gray-800">
              Análises
            </Link>
            <Link href="/dashboard/accounts" className="block text-sm text-gray-600 hover:text-gray-800">
              Contas
            </Link>
            <Link href="/dashboard/wallet" className="block text-sm text-gray-600 hover:text-gray-800">
              Carteira
            </Link>

            <div className="border-t border-gray-200"></div>
            <Link href="/settings" className="block text-sm text-gray-600 hover:text-gray-800">
              Configurações
            </Link>
            <Link href="/auth/login" className="block text-sm text-red-700 hover:text-gray-800">
              Sair
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
