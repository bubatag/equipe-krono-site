# ⏳ EQUIPE KRONO — Site Institucional

### Site institucional para apresentação da Equipe Krono e divulgação de seus projetos.

O **Krono** é um site institucional desenvolvido para apresentar a equipe, sua identidade e seus projetos acadêmicos e tecnológicos. A página destaca os integrantes, apresenta a proposta do grupo e divulga o **BUBATAG**, uma solução tecnológica voltada ao monitoramento e ao bem-estar de bubalinos.

🌐 **Acesse o site:** [bubatag-site.vercel.app](https://equipe-krono.vercel.app/)

## 📌 Sobre o Projeto

O site foi desenvolvido por estudantes da **Faculdade de Tecnologia de Registro (Fatec Registro)** como uma página de apresentação da Equipe Krono.

A proposta é reunir, em um único ambiente, informações sobre o grupo, seus integrantes e o projeto desenvolvido, utilizando uma interface visual moderna, responsiva e com elementos interativos.

## 🎯 Objetivos

- Apresentar a identidade e a proposta da Equipe Krono.
- Divulgar os integrantes e suas respectivas áreas de atuação.
- Apresentar o projeto BUBATAG e sua finalidade.
- Disponibilizar uma página institucional acessível e responsiva.
- Facilitar o acesso às informações sobre a equipe e seus projetos.

## ✨ Funcionalidades

- **Página inicial:** apresentação visual da Equipe Krono com vídeo de fundo e animações.
- **Quem somos:** seção institucional com informações sobre o grupo.
- **Nossa equipe:** apresentação dos integrantes, funções, fotografias e links para redes profissionais.
- **Projeto:** divulgação do BUBATAG e acesso ao site oficial do projeto.
- **Navegação fixa:** menu com acesso rápido às principais seções.
- **Animações:** efeitos de entrada e transições durante a navegação.
- **Design responsivo:** adaptação da interface para diferentes tamanhos de tela.
- **Identidade visual:** tipografia personalizada, cores e elementos gráficos próprios da equipe.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| Next.js 16 | Framework para desenvolvimento da aplicação web |
| React 19 | Construção da interface por componentes |
| TypeScript | Tipagem estática e organização do código |
| Tailwind CSS 4 | Estilização e criação do layout responsivo |
| AOS | Animações durante a rolagem da página |
| Next/Image | Otimização e carregamento de imagens |
| Next/Font | Carregamento e otimização das fontes locais |

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, verifique se você possui:

- [Node.js](https://nodejs.org/) 20.9 ou superior.
- npm, instalado junto com o Node.js.
- Git instalado na máquina.

### 1. Clone o repositório

```bash
git clone https://github.com/bubatag/equipe-krono-site.git
```

### 2. Entre na pasta do repositório

```bash
cd equipe-krono-site
```

### 3. Acesse a pasta da aplicação

**Importante:** o projeto Next.js está dentro da pasta `equipe-krono/`. É nela que se encontra o arquivo `package.json`.

```bash
cd equipe-krono
```

### 4. Instale as dependências

```bash
npm ci
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 6. Acesse no navegador

Abra o endereço:

```text
http://localhost:3000
```

## 📦 Scripts Disponíveis

Execute os comandos dentro da pasta `equipe-krono/`.

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção da aplicação. |
| `npm start` | Inicia a aplicação em modo de produção após o build. |
| `npm run lint` | Executa a verificação de código com ESLint. |

## 📁 Estrutura do Projeto

```text
equipe-krono-site/
│
├── LICENSE
├── README.md
│
└── equipe-krono/
    ├── public/
    │   └── assets/
    │       ├── krono-logo.svg
    │       ├── header-krono.mp4
    │       ├── quem-somos.png
    │       ├── bubatag.png
    │       ├── titulo-bubatag.svg
    │       └── imagens dos integrantes
    │
    ├── src/
    │   ├── app/
    │   │   ├── fonts/
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   │
    │   └── components/
    │       ├── AosProvider.tsx
    │       ├── Navbar.tsx
    │       ├── HeroSection.tsx
    │       ├── QuemSomos.tsx
    │       ├── Equipe.tsx
    │       ├── Projeto.tsx
    │       └── Footer.tsx
    │
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── next.config.ts
    ├── tailwind.config.ts
    └── postcss.config.mjs
```

## 👥 Equipe Krono

Atualmente, o site apresenta os seguintes integrantes:

| Integrante | Área de atuação |
|---|---|
| Arthur Fukunaga | UX/UI Designer |
| Leonardo de Lima | Front-End Developer |
| Matheus Ferrari | Front-End e Back-End Developer |
| Vinicius de Souza | Database Administrator |

## 🐃 Projeto em Destaque: BUBATAG

O **BUBATAG** é uma solução tecnológica voltada ao monitoramento inteligente de bubalinos, utilizando Internet das Coisas (IoT), sensores e software para acompanhar informações relacionadas à localização e às condições fisiológicas dos animais.

O projeto busca contribuir para um manejo mais seguro e eficiente, promovendo o bem-estar animal e auxiliando os produtores na tomada de decisões.

Acesse o site do projeto:

**[BUBATAG — Site Oficial](https://bubatag-site.vercel.app/)**

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais informações.

---

**Desenvolvido pela Equipe Krono — Fatec Registro.**
