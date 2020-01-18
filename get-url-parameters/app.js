const Maritime = require("maritime");
const app = new Maritime();
const router = new Maritime.router();

router.get("/", data => {
  data.res.redirect("/example name");
});

// visit /{ YOUR NAME } to display your name
router.get("/:name", data => {
  let routeParams = data.req.params;
  let name = routeParams.name;

  data.res.send(`Hello ${name}!`);
});

app.mount(router);
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
