# Uppgiften
Vi ska enligt TDD bygga ett JSON över http api där man kan beställa en pdf av en webbsida och kunna hämta hem pdf:en vid senare tillfällen. Till vår hjälp har vi en bunt färdiga tester som behöver uppfyllas. APIet innehåller följande endpoints
*   `POST /pdf`

    Request body
    ```
    {
        "url": "https://www.google.com""
    }
    ```
    Response body
    ```
    {
        "key": "uuid"
    }
    ```
*   `GET /pdf/:uuid`

    Response `Content-Type: application/pdf`

    Response triggar nedladdning av pdf

Vi ska även bygga en egen in-memory databas med endast två enkla funktioner, `get` och `store`.

Tyngdpunkten kommer att ligga på att få något som fungerar och byggt på ett javascriptigt sätt. 

Lästips:
*   [Express api documentation][express-api-doc]
*   [MDN javascript docs][mdn-javascript]
*   [NodeJS api][nodejs-api]
*   [Closures i javascript MDN][closures]

## Sätta upp projektet
1.  Klona gitprojektet från [Github][gitrepo]
2.  Öppna Visual Studio Code och öppna den katalog du laddat ner projektet till.
3.  Öppna terminalen
4.  Kör `npm install` för att installera alla beroenden
5.  Splitta terminalen i två terminalfönster
6.  Kör `npm run dev` i det ena terminalfönstret och `npm run test-watch` i det andra. `npm run dev` startar webservern och startar om den varje gång en fil ändras. `npm run test-watch` kör testen varje gång en fil sparas.


# Bilaga: Sätt upp ett eget NodeJS + express.js projekt
Denna sektion beskriver hur vi satte upp projektet till.

1.  Skapa en katalog för projektet `mkdir node-hackathon-pdf`
2.  Gå in i katalogen: `cd node-hackathon-pdf`
3.  Initiera npm `npm init`. Du kommer få en bunt frågor som det går bra att bara klicka enter för default svar.

    ```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
    ```
    ```
See `npm help json` for definitive documentation on these fields
and exactly what they do.
    ```
    ```
Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.
    ```
    ```
Press ^C at any time to quit.
package name: (hackathon-pdf)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/davidtrang/slask/node-hackathon-pdf/package.json:
    ```
    ```
    {
      "name": "hackathon-pdf",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }
    ```
    ```
Is this OK? (yes)
    ```
4.  Lägg till git `git init`
5.  Skapa .gitignore för att git ska ignorera node_modules och .vscode katalogerna. Dvs spara följande innehåll i .gitignore

    ```
node_modules/
.vscode/
    ```
6.  Nu är det dags att installera dom paket vi behöver:
    * `express` - webserver framework
    * `body-parser` - extraherar json från http requesten och exponerar den i `body` fältet.
    * `jest` - test framework
    * `supertest` - test util för att testa express endpoints
    * `uuid` - verktyg för att generera uuids
    * `puppeteer` - headless chrome för att bland annat generera pdf:er
    * `nodemon` - tittar på filändringar och startar i vårt fall om webservern när någon fil ändras
    * `eslint` - Upprätthåller kodstandarden
    * `eslint-config-standard` - anpassar eslint för [standardjs][standardjs]
    * `eslint-plugin-import`
    * `eslint-plugin-node`
    * `eslint-plugin-promise`
    * `eslint-plugin-standard`

    För att installera alla dessa kör följande
    ```
npm install \
        express \ 
        body-parser \ 
        jest \
        supertest \
        uuid \
        puppeteer \
        nodemon \
        eslint \
        eslint-config-standard \
        eslint-plugin-import \
        eslint-plugin-node \
        eslint-plugin-promise \
        eslint-plugin-standard
    ```

7.  Skapa npm scripts för att köra applikationen i prod och dev modes, tester.

    ```
    ...
    "scripts": {
      "start": "node src/server.js",
      "dev": "nodemon src/server.js",
      "test": "jest",
      "test-watch": "jest --watch"
    }
    ...
    ```

[standardjs]: https://standardjs.com
[gitrepo]: https://www.github.com
[express-api-doc]: https://expressjs.com/en/4x/api.html
[mdn-javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
[nodejs-api]: https://nodejs.org/dist/latest-v11.x/docs/api/
[closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Closure
