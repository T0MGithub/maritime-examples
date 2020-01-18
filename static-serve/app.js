const Maritime = require("maritime");
const app = new Maritime();
const router = new Maritime.router();

// all non-route URL paths will lookup in this directory
// for example, if /css.css is looked requested, the file
// will be served from the __dirname+/assets folder, so
// the looked up path would be __dirname+/assets/css.css
app.use(Maritime.static(__dirname + "/assets"));

router.get("/", data => {
  data.res.send("./index.html");
});

app.mount(router);
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
