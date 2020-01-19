const Maritime = require("maritime");
const app = new Maritime();
const router = new Maritime.router();

router.get("*", data => {
  data.res.send("Secure Hello World!");
});

app.mount(router);

// either the file's path or the read file data can be passed
// in the key and cert options
const serverOptions = {
  https: true,
  key: "./key.pem",
  cert: "./cert.pem"
};
app.listen(3000, serverOptions, function() {
  console.log("Secure server started on port 3000");
});
