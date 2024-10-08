import { Mail, Lock, Phone } from "lucide-react";
import InputIcon from "@/components/ui/InputIcon";

export default function Register() {
    return (
        <div className="flex h-screen w-screen">
            <div className="w-full sm:w-1/2 flex items-center justify-center bg-white p-8">
                <div className="max-w-md w-full">
                    <img src="/logo.svg" alt="Logo" className="mx-auto mb-6 w-32 h-auto" />
                    
                    <h2 className="text-2xl font-bold mb-6 text-center text-brand">Crie sua conta agora mesmo.</h2>
                    <form>
                        <InputIcon Icon={Mail} placeholder="Digite seu melhor e-mail" type="email" id="email" />
                        <InputIcon Icon={Phone} placeholder="Seu número de celular" type="password" id="password" />
                        <InputIcon Icon={Lock} placeholder="Digite sua senha" type="password" id="password" />
                        <InputIcon Icon={Lock} placeholder="Confirme sua senha" type="password" id="password" />

                        <div className="flex items-center mb-4">
                            <input
                                id="terms"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-brand"
                            />
                            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">
                                Eu aceito os <a href="#" className="text-brand hover:underline">termos de uso</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand font-bold text-white py-2 rounded-md hover:bg-brand-darker transition-colors"
                        >
                            Cadastrar
                        </button>
                    </form>

                    <p className="text-center mt-4">Ja possui conta? <a href="/auth/login" className="text-brand hover:underline">Clique aqui</a></p>
                </div>
            </div>

            <div className="hidden sm:flex w-1/2 bg-brand items-center justify-center p-8">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold">Bem-vindo!</h1>
                    <p className="mt-4 text-lg">Ainda estamos pensando no que colocar aqui...</p>
                </div>
            </div>
        </div>
    );
}
