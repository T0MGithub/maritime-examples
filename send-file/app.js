const Maritime = require("maritime");
const app = new Maritime();
const router = new Maritime.router();

app.set("static-folder", __dirname);

router.get("*", data => {
  data.res.sendFile("./index.html");
});

app.mount(router);
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
