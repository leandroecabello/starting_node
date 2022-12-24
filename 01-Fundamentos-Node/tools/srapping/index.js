/* **************
**********************************************************************
                        Web scraping 
**********************************************************************

    - Técnica utilizada mediante programas de software para extraer 
    información de sitios web.

    - simula la navegación de un humano

**********************************************************************
                        Puppeteer
**********************************************************************

    - Herramienta de Node.js para hacer scraping con Javascript

**********************************************************************
************** */

// traemo puppeteer
const puppeteer = require("puppeteer");

// función autoejecutada
(async () => {
  // nuestro codigo
  console.log("Levantando navegador!");
  //Iniciar, lanzar o abrir el navegador
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });

  // Iniciamos una página en el navegador
  const page = await browser.newPage();

  // Le indicamos la url a la cual queremos acceder
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  // Obtener un atributo de la web
  let titelOne = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);

    // retornamos el elemento solicitado
    return h1.innerHTML;
  });

  console.log(titelOne);
  console.log("Cerramos navegador...");
  // Cerramos navegador
  browser.close();
  console.log("Navegador cerrado");
})();
