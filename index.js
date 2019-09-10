const express = require("express");
const app = express();

require("./models/db");

app.set("PORT", process.env.PORT || 3000);

app.use(express.json());

app.use(require("./routes/index.route"));
app.use(require("./routes/usuario.routes"));
app.use(require("./routes/Motos.routes"));

app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
