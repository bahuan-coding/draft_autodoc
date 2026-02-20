# Autodoc — Site Institucional

Site institucional premium da Autodoc, plataforma líder em gestão de projetos, documentos e mão de obra para construção civil.

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **Framer Motion** (animações)
- **Wouter** (roteamento)
- **Vite 7** (build)

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home — landing page principal |
| `/projetos` | Autodoc Projetos — CDE |
| `/workforce` | Autodoc Workforce — gestão de fornecedores |
| `/agentes-gd4` | Agentes GD4 — 21 agentes de IA |

## Setup Local (Cursor)

```bash
# 1. Instalar dependências
pnpm install

# 2. Rodar em modo desenvolvimento
pnpm run dev

# 3. Abrir no browser
# http://localhost:3000
```

## Deploy no Netlify

### Opção 1 — Drag & Drop
```bash
pnpm install
pnpm run build
# Arraste a pasta dist/public no Netlify
```

### Opção 2 — CLI
```bash
pnpm install
pnpm run build
npx netlify-cli deploy --prod --dir=dist/public
```

### Opção 3 — Git (recomendado)
1. Suba o código para um repositório GitHub
2. Conecte o repositório no Netlify
3. Configure:
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist/public`
   - **Node version:** 22

## Imagens

As 5 imagens geradas por IA estão em `client/public/images/`:
- `autodoc-hero.png` — Hero da home
- `autodoc-ai-agents.png` — Seção de IA
- `autodoc-projetos.png` — Página Projetos
- `autodoc-workforce.png` — Página Workforce
- `autodoc-construction.png` — Backgrounds

## Estrutura

```
client/
  public/
    images/          ← Imagens do site
  src/
    components/      ← Navbar, Footer, SectionReveal, AnimatedCounter
    lib/             ← images.ts (paths das imagens)
    pages/           ← Home, Projetos, Workforce, AgentesGD4
    App.tsx          ← Rotas
    index.css        ← Tema dark premium
    main.tsx         ← Entry point
server/              ← Server Express (para SSR/produção)
```
