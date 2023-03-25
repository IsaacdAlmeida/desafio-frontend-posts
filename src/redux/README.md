# Redux

Utilizei o Redux para armazenar as informações da aplicação de forma global. A aplicação roda com o [Redux Toolkit](https://redux-toolkit.js.org/), uma solução mais simples e poderosa que o uso do Redux convencional.

Por menor que a aplicação seja, utilizei Redux pensando na escabilidade da aplicação e evitar prop drilling ao manusear o estado.

Utilizo dois reducers, o primeiro é referente ao array de posts e o segundo referente aos usuários, as informações vêm das requisições que fazemos aos respectivos endpoints.
