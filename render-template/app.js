const Maritime = require("maritime");
const app = new Maritime();
const router = new Maritime.router();

// there are currently multiple rendering engines with wrappers for
// Maritime including: EJS, Pug and Handlebars. Each of these
// can be used with Maritime, however the relevant engine must be installed.
// For example if you want to use EJS, you must install EJS from NPM.

// You can provide a different engine as an argument such as Pug.
const engine = Maritime.renderingEngine("ejs", {
  views: __dirname
});
app.set("rendering-engine", engine);

router.get("*", data => {
  let name = data.req.query.name || "world";
  data.res.render("./index.ejs", { name });
});

app.mount(router);
app.listen(3000);
