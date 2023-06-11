## Documentação do Projeto DNC Food

### Descrição
Este projeto é um aplicativo de compras online, onde os usuários podem visualizar uma lista de produtos, ver detalhes de um produto específico e adicionar produtos ao carrinho de compras. O aplicativo é desenvolvido em React.js e utiliza a biblioteca React Router para a navegação entre páginas.

### Esclarecimentos:

Gostaria de esclarecer que a estrutura base deste projeto não foi criada por mim, mas sim pelo professor Gabriel da DNC, durante a aula. Fui responsável apenas por adaptar essa estrutura para atender aos requisitos do projeto solicitado.
A adaptação envolveu a criação de componentes adicionais, a integração de dados simulados e a personalização do estilo visual por meio do uso de arquivos SCSS. Também foi implementado um modal utilizando o próprio React.


### Instalação
Para instalar e executar o projeto, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixar o Node.js em [nodejs.org](https://nodejs.org/).

2. Faça o download ou clone o repositório do projeto para o seu computador.

3. Abra o terminal e navegue até o diretório raiz do projeto.

4. Execute o seguinte comando para instalar as dependências do projeto:
   ```
   npm install
   ```

5. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o aplicativo:
   ```
   npm run dev
   ```

6. O aplicativo será executado localmente no seu navegador padrão, no endereço que aparecer. 

### Componentes Principais

#### 1. Header
O componente `Header` é responsável por exibir o cabeçalho do aplicativo. Ele inclui um logotipo, links de navegação e um ícone de carrinho de compras.

#### 2. Card
O componente `Card` representa um produto na página inicial. Ele exibe a imagem, o título e um botão para adicionar o produto ao carrinho de compras. Ao clicar na imagem do produto, um modal é aberto exibindo mais detalhes do produto.

#### 3. Home
O componente `Home` é a página inicial do aplicativo. Ele exibe uma lista de produtos utilizando o componente `Card`. Os produtos são fornecidos através do arquivo `products.mock.js`, que contém dados simulados.

#### 4. ProductDetail
O componente `ProductDetail` exibe os detalhes de um produto específico. Ele é acessado através de um link na página inicial ou ao clicar em um produto no modal. Além dos detalhes do produto, essa página também exibe um componente de carrinho de compras, onde o produto selecionado é adicionado.

### Funcionalidades Principais

1. Navegação: O aplicativo utiliza o React Router para permitir a navegação entre a página inicial e a página de detalhes do produto.

2. Modal: Ao clicar em uma imagem do produto na página inicial ou no modal de detalhes do produto, um modal é aberto exibindo mais informações sobre o produto.

3. Ao clicar em adicionar, você é redirecionado para a página onde são exibidas mais informações do produto que escolheu e
dois botões ilustrativos de Continuar comprando e o de Finalizar compra.

### Pasta de "api"

Dentro da pasta `api`, encontramos o arquivo `products.mock.js`. Nesse arquivo, é definida uma constante chamada `PRODUCTS_MOCK`, que contém um array de objetos representando produtos fictícios. Cada objeto no array possui as seguintes propriedades:

- `id`: O identificador único do produto.
- `imgPath`: O caminho da imagem do produto.
- `title`: O título ou nome do produto.
- `price`: O preço do produto.
- `info`: Uma descrição ou informações adicionais sobre o produto.

Esses dados simulados são usados para exibir os produtos na página inicial e na página de detalhes do produto.

A utilização desse arquivo de mock é comum em projetos em que não há uma integração direta com um backend ou banco de dados real. Ele serve como uma fonte de dados fictícia para simular o comportamento de uma aplicação completa.

Ao utilizar o arquivo `products.mock.js`, você pode expandir ou modificar os dados dos produtos conforme necessário para atender aos requisitos do projeto. Além disso, é possível adicionar mais objetos ao array para representar outros produtos.

Por exemplo, cada objeto no array representa um produto diferente, com um `id` exclusivo, um caminho de imagem (`imgPath`), um título (`title`), um preço (`price`) e informações adicionais (`info`). Esses dados podem ser acessados ​​nos componentes da aplicação para exibir os produtos, suas informações e manipular interações relacionadas a eles.

Certifique-se de importar corretamente a constante `PRODUCTS_MOCK` nos componentes que precisam acessar esses dados.

Essa estrutura de dados simulados é especialmente útil durante o desenvolvimento e teste de funcionalidades, permitindo que você trabalhe com dados reais ou fictícios antes de integrar a aplicação a um backend real.

### Funcionalidade implementada do modal

O Modal é um componente utilizado para exibir conteúdo em uma sobreposição na página, destacando-o do restante do conteúdo. Ele é frequentemente usado para exibir informações adicionais e detalhes de cada produto da DNC Food.

No projeto, foi utilizado o pacote `react-modal` para implementar o Modal. O `react-modal` é uma biblioteca popular que fornece uma solução simples e flexível para criar modais no React.js.


1. Importação: No arquivo onde o Modal é utilizado, é necessário importar o pacote `react-modal`:
   ```javascript
   import Modal from "react-modal";
   ```

2. Configuração: Antes de utilizar o Modal, é necessário configurar o elemento raiz do aplicativo para que o Modal seja anexado a ele. Isso pode ser feito utilizando o método `setAppElement` do `Modal`, passando o seletor do elemento raiz como argumento:
   ```javascript
   Modal.setAppElement("#root");
   ```

3. Estado do Modal: No componente em que o Modal será utilizado, é necessário definir um estado para controlar se o Modal está aberto ou fechado. Isso pode ser feito utilizando o `useState` do React:
   ```javascript
   const [isModalOpen, setIsModalOpen] = useState(false);
   ```

4. Abrir e fechar o Modal: É necessário criar funções para abrir e fechar o Modal. No exemplo fornecido no código do projeto, as funções `openModal` e `closeModal` são utilizadas para controlar o estado do Modal:
   ```javascript
   const openModal = () => {
     setIsModalOpen(true);
   };

   const closeModal = () => {
     setIsModalOpen(false);
   };
   ```

5. Utilização do Modal: O Modal é utilizado em torno do conteúdo que deve ser exibido dentro dele. Ele é renderizado condicionalmente com base no estado do Modal. No exemplo do projeto, o Modal é utilizado para exibir os detalhes de um produto:
   ```javascript
   <Modal
     isOpen={isModalOpen}
     onRequestClose={closeModal}
     contentLabel="Detalhes do Produto"
   >
     {/* Conteúdo do Modal */}
   </Modal>
   ```

Dentro do conteúdo do Modal, você pode adicionar os elementos e informações que deseja exibir aos usuários. No exemplo do projeto, foram adicionados o título do produto, uma imagem, o preço e um botão para fechar o Modal.

O Modal oferece flexibilidade para personalizar a aparência e o comportamento, permitindo a customização de estilos, a definição de classes CSS específicas e a utilização de métodos e propriedades adicionais, como o `onRequestClose`, que é acionado quando o usuário tenta fechar o Modal.

### Conclusão: 

Em resumo, o projeto DNC Food é um aplicativo de compras online desenvolvido em React.js, que permite aos usuários visualizar produtos, obter detalhes sobre cada item e adicioná-los ao carrinho de compras. O aplicativo utiliza o React Router para a navegação entre as páginas e apresenta um modal para exibir informações adicionais sobre os produtos.

Durante a adaptação da estrutura original do projeto, foram adicionados componentes extras, dados simulados e personalização do estilo visual, utilizando arquivos SCSS. Essas modificações garantem que o aplicativo atenda aos requisitos específicos do projeto solicitado.

A integração do arquivo `products.mock.js`, localizado na pasta `api`, fornece dados simulados para exibir os produtos nas páginas iniciais e de detalhes. Esses dados podem ser modificados ou expandidos para atender às necessidades do projeto.

O modal implementado por meio do pacote `react-modal` adiciona uma camada de interatividade ao permitir que os usuários visualizem informações detalhadas de cada produto em um formato destacado.

Ao seguir as etapas de instalação fornecidas na documentação, você poderá executar o projeto localmente e explorar suas funcionalidades.

Espero que gostem! Caso tenham alguma dúvida ou sugestão, pode entrar em contato comigo!
