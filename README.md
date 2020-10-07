# LeanWork Challenge

Algumas informações pertinentes:
O Projeto foi construido em React, sem a necessidade de um backend, também nao foi integrado com banco de dados, utilizado o Local Storage para armazenamento de informações. O projeto tambem utiliza algumas bibliotecas como React Router DOM, Style Module, React Icons, React Input Mask.

Para rodar o projeto em seu pc, siga as instruções abaixo:
* Faça o Download do Projeto, digite ```git clone https://github.com/thejohnpg/leanwork-challenge.git``` ou copiando diretamente no botão Code, logo acima.
* entre na pasta raiz, digitando ```cd leanwork-challenge```
* digite ```yarn``` ou ```npm install``` para instalar as dependências
* Depois disso pode startar o servidor digitando ```yarn start``` ou ```npm start```


*O Projeto é simples e usa o LocalStorage para persistir as informações solicitadas na tela Inicial, como podemos ver na imagem a seguir*

![Tela Inicial](https://i.ibb.co/sCtKFsk/image.png)

*No Form há alguns tratamentos de erros, há outros tratamentos aos quais podem ser realizados ainda*

![Form de inserção de Dados](https://i.ibb.co/t37kWMT/image.png)

Se vc clicar no botao Login, sem ainda ter preenchido todas as informações, uma tela de erro é apresentada, exemplificado na imagem abaixo
![Página 404](https://i.ibb.co/SxC4sjp/image.png)

> Yeah, I love cats !

*E por ultimo, mas nao menos importante temos a nossa tela da Home, contendo o Nome recuperado da LocalStorage e os dados plotados no placeholder de cada input, é possivel alterar cada valor, colocando um novo valor no input e clicando em 'Atualizar Informações' e o Botao 'Sair' que por sua vez, limpa o localStorage e envia você novamente a tela Inicial*

![Tela Home com os dados](https://i.ibb.co/KVdbh1L/image.png)

*Ah e um detalhe importante, a aplicação toda é responsiva, foi usado o conceito de mobile first para construção do mesmo, veja abaixo a versão mobile*

![Versão Mobile](https://i.ibb.co/fMfGwpR/image.png)

Há ainda alguns erros que podem ser tratados de outras formas, também há o que poderiamos chamar de gambiarra e você provavelmente vai encontrar isso se procurar por "gambiarra" dando um ````ctrl f``` no seu VS Code, não me julgue, ok?