const Maritime = require("maritime");
const app = new Maritime();
const router = new Maritime.router();

router.get("/", function(data) {
  data.res.sendFile(__dirname + "/index.html");
});

router.get("/download", function(data) {
  data.res.download("./download.txt");
});

app.mount(router);
app.listen(3000);
