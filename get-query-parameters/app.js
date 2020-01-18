const Maritime = require("maritime");
const app = new Maritime();
const router = new Maritime.router();

// visit ?name={ YOUR NAME } to display a name
router.get("*", data => {
  let queryParams = data.req.query;
  let message =
    queryParams.name === undefined
      ? "No name provided, visit /?name={ YOUR NAME } to display the name"
      : `Hello ${queryParams.name}!`;

  data.res.send(message);
});

app.mount(router);
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
