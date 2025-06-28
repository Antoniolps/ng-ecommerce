# 🛒 NG-Ecommerce

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como estudo de caso para Trabalho de Conclusão de Curso (TCC), com o objetivo de analisar o framework Angular e suas principais funcionalidades em um contexto prático de aplicação e-commerce.

O **NG-Ecommerce** é uma aplicação web moderna que simula uma loja virtual, implementando funcionalidades essenciais como catálogo de produtos, detalhamento de produtos, carrinho de compras e sistema de avaliações.

## 🎯 Objetivos do Estudo

- Análise das funcionalidades principais do Angular 19
- Implementação de padrões de arquitetura modular
- Estudo de interceptors e gerenciamento de estado
- Aplicação de boas práticas de desenvolvimento frontend
- Implementação de interfaces responsivas e modernas

## 🚀 Tecnologias Utilizadas

### Framework Principal
- **Angular 19** - Framework principal
- **TypeScript 5.6** - Linguagem de programação
- **RxJS 7.8** - Programação reativa

### Bibliotecas e Dependências
- **Angular Router** - Gerenciamento de rotas
- **Angular Forms** - Formulários reativos
- **Angular HTTP Client** - Comunicação com APIs
- **Angular Animations** - Animações e transições
- **NGX-Toastr** - Notificações toast

### Ferramentas de Desenvolvimento
- **Angular CLI 19** - Interface de linha de comando
- **Karma + Jasmine** - Framework de testes
- **TypeScript** - Tipagem estática

## 🏗️ Arquitetura do Projeto

### Estrutura de Diretórios
```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── header/         # Cabeçalho da aplicação
│   │   ├── loader/         # Componente de carregamento
│   │   ├── product/        # Card de produto
│   │   └── star-rating/    # Sistema de avaliação
│   ├── pages/              # Páginas da aplicação
│   │   ├── products/       # Listagem de produtos
│   │   ├── product-page/   # Detalhes do produto
│   │   └── cart-page/      # Carrinho de compras
│   ├── services/           # Serviços e lógica de negócio
│   │   ├── api/           # Serviços de API
│   │   └── interceptors/   # Interceptors HTTP
│   ├── models/            # Interfaces e classes de modelo
│   └── environments/      # Configurações de ambiente
```

## 🔧 Funcionalidades Implementadas

### 📱 Interface do Usuário
- ✅ Layout responsivo e moderno
- ✅ Componente de header com navegação
- ✅ Sistema de loading com interceptors
- ✅ Notificações toast para feedback do usuário
- ✅ Sistema de avaliação com estrelas

### 🛍️ Funcionalidades de E-commerce
- ✅ Catálogo de produtos com listagem
- ✅ Página de detalhes do produto
- ✅ Carrinho de compras funcional
- ✅ Adição e remoção de produtos do carrinho
- ✅ Cálculo de totais e quantidades

### 🔄 Gerenciamento de Estado
- ✅ Serviços singleton para compartilhamento de dados
- ✅ Interceptors para loading automático
- ✅ Observables para reatividade

### 🌐 Integração com API
- ✅ Consumo da FakeStore API para dados de produtos
- ✅ Tratamento de requisições HTTP
- ✅ Gerenciamento de estados de loading

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 18+)
- **npm** ou **yarn**
- **Angular CLI** (versão 19+)

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Navegue até o diretório
cd ng-ecommerce

# Instale as dependências
npm install

# Execute a aplicação
npm start
```

### Scripts Disponíveis
```bash
# Executar em modo desenvolvimento
npm start

# Executar testes
npm test

# Build para produção
npm run build

# Build em modo watch
npm run watch
```

A aplicação estará disponível em `http://localhost:4200`

## 📊 Conceitos Angular Explorados

### 1. **Componentização**
- Criação de componentes reutilizáveis
- Comunicação entre componentes (Input/Output)
- Ciclo de vida dos componentes

### 2. **Roteamento**
- Configuração de rotas estáticas e dinâmicas
- Navegação programática
- Títulos dinâmicos de página

### 3. **Serviços e Injeção de Dependência**
- Serviços singleton
- Injeção de dependência
- Providers e configuração

### 4. **HTTP e Interceptors**
- Cliente HTTP para consumo de APIs
- Interceptors para funcionalidades transversais
- Tratamento de loading automático

### 5. **Programação Reativa**
- Uso de Observables
- Operadores RxJS
- Gerenciamento de subscrições

### 6. **Formulários e Validação**
- Formulários template-driven
- Validações customizadas

## 🎨 Interface e UX

O projeto implementa uma interface moderna e responsiva, focando em:

- **Design Clean**: Interface minimalista e intuitiva
- **Responsividade**: Adaptação para diferentes dispositivos
- **Feedback Visual**: Loading states e notificações
- **Navegação Fluida**: Transições suaves entre páginas

## 📚 Aprendizados e Análises

### Pontos Fortes do Angular Observados:
1. **Arquitetura Modular**: Facilita organização e manutenção
2. **TypeScript Nativo**: Maior segurança e produtividade
3. **CLI Poderosa**: Automatização de tarefas de desenvolvimento
4. **Ecossistema Robusto**: Ampla gama de bibliotecas compatíveis
5. **Documentação Oficial**: Extensa e bem estruturada

### Desafios Encontrados:
1. **Curva de Aprendizado**: Conceitos avançados para iniciantes
2. **Bundle Size**: Necessidade de otimização para produção
3. **Complexidade**: Over-engineering para projetos pequenos

## 🔮 Possíveis Melhorias

- [ ] Implementação de autenticação/autorização
- [ ] Sistema de busca e filtros avançados
- [ ] Integração com gateway de pagamento
- [ ] Implementação de PWA (Progressive Web App)
- [ ] Testes unitários e e2e completos
- [ ] Otimização de performance (OnPush, Lazy Loading)

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte de um Trabalho de Conclusão de Curso.

## 👨‍💻 Autor

**[Seu Nome]**
- 🎓 Graduando em [Seu Curso]
- 📧 [seu-email@exemplo.com]
- 🔗 [LinkedIn](https://linkedin.com/in/seu-perfil)

---

⭐ **Este projeto faz parte de um estudo acadêmico sobre o framework Angular e suas aplicações práticas no desenvolvimento de aplicações web modernas.**
