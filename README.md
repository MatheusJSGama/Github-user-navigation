# 🚢 GitHub User Navigation

Uma aplicação web que consome a API pública do GitHub para exibir informações completas de um usuário: perfil, repositórios e issues. Interface moderna, validações robustas e estrutura escalável com boas práticas.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia             | Descrição                                                              |
|------------------------|------------------------------------------------------------------------|
| **React + TypeScript** | Biblioteca para construção de UIs com tipagem estática poderosa.       |
| **Vite**               | Bundler moderno para desenvolvimento rápido.                           |
| **Tailwind CSS**       | Framework utilitário para estilização rápida e responsiva.             |
|  **Axios**             | Cliente HTTP para consumo da API do GitHub.                            |
| **Zod**                | Biblioteca de validação de dados integrada com React Hook Form.        |
| **React Hook Form**    | Gerenciador de formulários simples e performático.                     |
| **Date-fns**           | Utilitário moderno para manipulação e formatação de datas.             |
| **Font Awesome**       | Biblioteca de ícones para melhorar a UI.                               |
| **React Router DOM**   | Biblioteca de roteamento para navegação entre páginas no React.        |
| **ESLint + Prettier**  | Ferramentas de lint e formatação para manter o código padronizado.     |

---

## ✨ Funcionalidades

- 🔍 **Busca de usuário GitHub** pelo nome.
- 👤 **Exibição de informações do perfil**: avatar, bio, localização, seguidores, etc.
- 📁 **Listagem de repositórios públicos** do usuário com links.
- 🐞 **Visualização de issues** públicas dos repositórios selecionados.
- 🛠️ **Validação de formulário com Zod e React Hook Form**.
- 📱 **Interface responsiva** com Tailwind CSS.
- 📅 **Datas formatadas** com `date-fns`.

---

## 📁 Estrutura de Pastas

```bash
src/
├── components/
│   └── Header/                 
│       └── index.tsx
├── context/
│   └── userContext.tsx        
├── lib/
│   └── axios.ts               
├── pages/
│   ├── Home/                  
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── CardRepo/      
│   │       │   └── index.tsx
│   │       ├── CardUserInfo/  
│   │       │   └── index.tsx
│   │       └── SearchUser/    
│   │           └── index.tsx
│   ├── IssuePage/             
│   │   └── index.tsx
│   └── IssuesPage/            
│       ├── index.tsx
│       └── components/
│           └── issueCard/
│               └── index.tsx
├── router/
│   └── routes.tsx             
├── utils/
│   └── index.ts               
├── App.tsx                    
├── index.css                  
└── main.tsx 

# 📌 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/MatheusJSGama/Github-user-navegation.git
```

2. Instale as dependências:
```bash
npm install
```
2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

📝 Licença
[MIT](https://choosealicense.com/licenses/mit/)