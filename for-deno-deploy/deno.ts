async function fetchUrl(url) {
    const response = await fetch(url);
    return await response.text();
  }
  
  async function handleRequest(req: Request) {
      const url = new URL(req.url);
      const path = url.pathname;
      if (path === '/' || path === '') {
          let home = await fetchUrl("https://raw.githubusercontent.com/iyarivky/debash/main/index.html")
          return new Response(home, {headers: {"content-type": "text/html;charset=UTF-8"}, status:200});
          }
      if (path === '/js/script.js'){
          let jscript = await fetchUrl("https://raw.githubusercontent.com/iyarivky/debash/main/js/script.js")
          return new Response(jscript, {headers: {"content-type": "text/javascript;charset=UTF-8"}, status:200})
      }
      return new Response("Why are you here?");
  }
  
  Deno.serve(handleRequest);