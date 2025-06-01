# Documentação do SoloDev

SoloDev é uma plataforma de aprendizagem com IA criada para ajudar usuários a explorar e dominar tópicos de desenvolvimento de software de forma simples, eficiente e estruturada. Ela integra tutoriais selecionados do YouTube, resultados de busca do Google, resumos gerados por IA e questões práticas em uma experiência de aprendizado fluida.

---

## Funcionalidades

- Pesquise qualquer tópico e receba:
  - Um tutorial relevante do YouTube
  - Principais resultados do Google (documentação oficial, artigos)
  - Resumo gerado por IA (copiável)
  - Questões práticas para fixação
- Autenticação rápida e segura com Clerk
- Cache no servidor para respostas rápidas da API
- Interface limpa em modo claro otimizada para aprendizado

---

## Como Funciona

### 1. Autenticação

- Usuários fazem login via Clerk.
- Apenas usuários autenticados podem acessar `/search` e `/topic/[topic]`.

### 2. Fluxo de Busca

- Usuários acessam `/search`.
- Após enviar uma busca, são redirecionados para `/topic/[topic]`.
- O parâmetro do tópico é usado para buscar conteúdo nas APIs externas.

### 3. Integração de API e Fetch no Lado do Servidor

- APIs usadas: YouTube, Google Custom Search, OpenAI.
- Todas as requisições passam por `/api/topic?query=...`.
- Utilitários principais no servidor:
  - `fetchGoogleResults.ts`
  - `fetchYoutubeVideo.ts`
  - `generateAiContent.ts`

### 4. Cache

- Cabeçalhos de resposta do servidor:  
  `Cache-Control: public, s-maxage=300, stale-while-revalidate=59`
- Fetch no cliente:  
  `fetch(..., { next: { revalidate: 300 } });`
- Tempo de vida do cache (TTL): 5 minutos.

### 5. Rotas Protegidas

- Middleware do Clerk protege as seguintes rotas:
  - `/search`
  - `/topic/[topic]`

---

## Experiência do Usuário & Design Pedagógico

- **Vídeo**: reforço visual
- **Links de texto**: acesso a recursos mais aprofundados
- **Notas**: usuários podem copiar resumos da IA ou escrever suas próprias anotações
- **Prática**: melhore a fixação com quizzes

Usuários são incentivados a copiar ou exportar os resumos usando o botão de copiar.

---

## Demo

Assista ao vídeo demo [aqui](https://youtu.be/Thc-Ek7RRWc)

---

## Estrutura do Projeto

```plaintext
/app
  /search
  /topic/[topic]
  /api/topic
/components
  /ContentLoader           # AiContent, GoogleResults, YoutubeVideo
  /LayoutComponents        # Header, Footer, etc.
  /MainPageSections        # Hero, Concept, CTA
/lib
  fetchGoogleResults.ts
  fetchYoutubeVideo.ts
  generateAiContent.ts
/styles
/types
middleware.ts

````

---

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk.dev](https://clerk.dev/)
- [OpenAI API](https://platform.openai.com/)
- [YouTube Data API](https://developers.google.com/youtube/)
- [Google Custom Search API](https://programmablesearchengine.google.com/)

---

## Como começar

```bash
# Clone o repositório
git clone https://github.com/robertofrz/solo-dev.git  

# Acesse o diretório
cd solo-dev

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
````
---

## Possíveis Melhorias

- Adicionar histórico de usuários e buscas salvas
- Suporte para notas pessoais editáveis
- Adicionar suporte para modo escuro
- Internacionalização (i18n)

---

## Licença

Este projeto está licenciado sob a Licença MIT.

---

## Contribuição

Pull requests são bem-vindos. Para mudanças maiores, abra uma issue primeiro para discutirmos o que você deseja alterar.

---

Esse documento também está disponível em [Inglês](./README.md)
