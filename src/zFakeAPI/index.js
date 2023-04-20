import { Model, createServer } from "miragejs";

export const setupServer = () => {
  let server = createServer({
    models: {
      todos: Model,
    },
    routes() {
      this.get("/api/todos", (scheme) => {
        return scheme.todos.all();
      });
      this.post("/api/todos", (scheme, request) => {
        const payload = JSON.parse(request.requestBody);
        return scheme.todos.create(payload);
      });
      this.post("/api/updateTodo", (scheme, request) => {
        const id = JSON.parse(request.requestBody);
        const currentTodo = scheme.todos.find(id);
        currentTodo.update({ completed: !currentTodo.completed });
        return currentTodo
      });
    },
  });
};
