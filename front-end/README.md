# Product Management Front-end

> **Versão:** 1.73.0 — Atualizado em: 07/05/2026

Aplicação front-end em Angular para gerenciamento de usuários e produtos, com fluxo de cadastro, login, dashboard e formulário de criação de produtos.

## Tecnologias

| Tecnologia | Versão |
|---|---|
| Angular (CLI + Core) | 21.2.5 / 21.2.x |
| Angular Material + CDK | ^21.2.4 |
| Angular SSR | ^21.2.5 |
| TypeScript | ~5.9.2 |
| RxJS | ~7.8.0 |
| Express | ^5.1.0 |
| Vitest (testes) | ^4.0.8 |
| Json Server (API fake) | ^1.0.0-beta.15 |
| Node.js (mínimo) | 20+ |
| npm (mínimo) | 11+ |

## Requisitos

- Node.js 20+
- npm 11+

## Instalação

```bash
npm install
```

## Como Executar

### Aplicação (modo desenvolvimento)

```bash
npm start
```

A aplicação ficará disponível em:

http://localhost:4200

### API fake (opcional)

```bash
npm run api
```

A API fake ficará disponível em:

http://localhost:3000

## Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm start` | Sobe o front-end com hot reload |
| `npm run build` | Gera build de produção |
| `npm run watch` | Build em modo watch |
| `npm test` | Executa testes com Vitest |
| `npm run api` | Sobe json-server na porta 3000 |
| `npm run serve:ssr:front-end` | Executa servidor SSR após build |

## Rotas da Aplicação

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `TelaLoginComponent` | Tela de login (padrão) |
| `/login` | `TelaLoginComponent` | Tela de login |
| `/CadastroUsuario` | `UserRegistration` | Cadastro de novo usuário |
| `/dashboard` | `DashboardComponent` | Dashboard principal |
| `/dashboard/settings` | `DashboardComponent` | Configurações (sub-rota) |
| `/forms-dashboard` | `FormsDashboardComponent` | Formulário de criação de produto |

## Fluxo de Uso

1. Acesse a tela de cadastro em `/CadastroUsuario`.
2. Cadastre um usuário com nome, email, telefone e senha.
3. Faça login na rota `/login` com email e senha cadastrados.
4. Em caso de sucesso, o sistema navega para `/dashboard`.
5. No dashboard, acesse `/forms-dashboard` para criar um novo produto (nome, descrição, quantidade, URL e preço).

## Estrutura do Projeto

Principais pastas em `src/app`:

```
app/
├── features/
│   ├── login/              # Tela e lógica de autenticação
│   ├── user-registration/  # Tela e lógica de cadastro de usuário
│   ├── dashboard/          # Tela principal após login
│   └── forms-dashboard/    # Formulário de criação de produtos
├── service/
│   ├── tela-inicial/       # Regras de busca e cadastro de usuários
│   └── forms-dashboard/    # Regras de criação e listagem de produtos
├── interfece/
│   ├── crud-usuarios.ts    # Interface CRUD de usuários
│   └── crud-produtos.ts    # Interface CRUD de produtos
├── model/
│   ├── usuario.dto.ts      # DTO de usuário
│   └── produtos.dto.ts     # DTO de produto
├── pipes/
│   └── telefone/           # Pipe de formatação de telefone
└── exceptions/             # Exceções personalizadas
```

## Regras de Negócio Atuais

- Usuários cadastrados são armazenados em memória (serviço local).
- A busca de login normaliza email (trim + lowercase) e senha (trim).
- Se usuário não for encontrado, o sistema exibe alerta.
- O estado de login é mantido em memória enquanto a aplicação está aberta.
- Produtos são gerenciados via `FormsDashboardService` (criação, listagem, exclusão por id).
- Dados de produtos também são armazenados em memória (sem persistência).

## Limitações Atuais

- Dados de usuários e produtos não persistem ao recarregar a página.
- Ainda não há integração completa com backend real para autenticação.
- Não há controle de rota protegida por guard (AuthGuard).

## Referências

- Angular CLI: https://angular.dev/tools/cli
- Angular Material: https://material.angular.dev
- Vitest: https://vitest.dev
