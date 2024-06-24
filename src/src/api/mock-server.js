import { createServer, Response } from "miragejs"

const INITIAL_COUNTER = 10;

createServer({
  routes() {
    this.namespace = "api"

    this.get("/counter", () => {
      // return new Response(500);

      return {
        counter: INITIAL_COUNTER
      }
    })
    //запрос на обновление данных
//https://miragejs.com/docs/main-concepts/route-handlers/
    this.post("counter/save", (schema, request) => {
      const counter = JSON.parse(request.requestBody).counter
    
      console.log(counter);

      //  return new Response(500);

      return {
        ststus: 'ok'
      }
    })
  },
})