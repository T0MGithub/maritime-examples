const Maritime = require("maritime");
const app = new Maritime();
const router = new Maritime.router();

// visit /setcookie to set a cookie with
// ?name= as the name and ?value as the value
router.get("/setcookie", data => {
  let cookieName = data.req.query.name || "test-name";
  let cookieValue = data.req.query.value || "test-value";

  data.cookies.set(cookieName, cookieValue);

  data.res.send("Successfully set cookie.");
});

// visit /?name= to get that cookie's value
router.get("/", data => {
  let requestedCookie = data.req.query.name || "undefined";

  let cookieValue = data.cookies.get(requestedCookie);

  let response = `
  Cookie Name: ${requestedCookie} <br>
  Cookie Value: ${cookieValue}
  `;
  data.res.send(response);
});

app.mount(router);
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
