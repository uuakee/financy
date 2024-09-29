![Financy Logo](./public/logo.svg)


**Financy** é um aplicativo de finanças pessoais projetado para ajudar os usuários a gerenciar suas receitas e despesas de forma eficiente. A plataforma oferece uma interface simples e intuitiva, permitindo que você acompanhe seus ganhos, gastos e tenha um melhor controle do seu orçamento. O objetivo do Financy é facilitar a gestão financeira e ajudar as pessoas a tomar decisões mais inteligentes sobre o uso do seu dinheiro.

## Funcionalidades principais:

- **Gestão de Receitas e Despesas:** Registre e acompanhe todas as suas movimentações financeiras.
- **Relatórios Detalhados:** Visualize gráficos e relatórios que ajudam a entender melhor seus hábitos financeiros.
- **Orçamento Personalizado:** Crie metas e orçamentos mensais para manter o controle de suas finanças.
- **Integração com Carteiras Digitais:** Conecte suas carteiras digitais e cartões para sincronizar suas transações automaticamente.
- **Segurança e Privacidade:** Seus dados financeiros são armazenados com segurança e criptografados.

## Pré-requisitos

- Node.js v16.8.0 ou superior
- NPM (ou Yarn, PNPM ou Bun)

## Como iniciar o projeto

### Primeiro, clone o repositório:

```bash
git clone https://github.com/uuakee/financy.git
cd financy
```

### Em seguida, instale as dependências:

Se estiver usando **NPM**:

```bash
npm install
```

Se estiver usando **Yarn**:

```bash
yarn install
```

Se estiver usando **PNPM**:

```bash
pnpm install
```

### Rodando o servidor de desenvolvimento:

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

### Configuração adicional

Você pode começar a editar as páginas modificando o arquivo `app/page.js`. A página atualiza automaticamente à medida que você edita o arquivo, oferecendo uma experiência de desenvolvimento fluida.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar fontes do Google automaticamente.

## Estrutura do Projeto

```bash
├── /app
│   ├── /auth              # Páginas de autenticação (login, registro)
│   ├── /dashboard         # Painel principal do usuário
│   ├── /components        # Componentes reutilizáveis
│   └── /services          # Serviços como API calls
├── /public                # Assets estáticos (logo, ícones)
├── /styles                # Estilos globais e Tailwind
├── /utils                 # Funções utilitárias
└── /pages                 # Páginas da aplicação
```

## Tecnologias utilizadas

- **Next.js**: Framework para React, focado em desempenho e funcionalidades avançadas como renderização do lado do servidor (SSR) e geração estática.
- **Tailwind CSS**: Um framework CSS que facilita a criação de interfaces de usuário modernas e responsivas.
- **Lucide Icons**: Conjunto de ícones para uma interface visualmente atraente.
- **React Datepicker**: Um componente de seleção de datas totalmente customizável.
  
## Como contribuir

Se você deseja contribuir para o projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`).
3. Faça o commit das suas alterações (`git commit -m 'Minha nova feature'`).
4. Faça o push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob os termos da [MIT License](LICENSE).

