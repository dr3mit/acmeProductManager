const PORT = 8000;
const server = require("./api");
const { db } = require("./db");

db.sync().then(() => {
  server.listen(PORT, () =>
    console.log(`

        Listening on port ${PORT}

        http://localhost:${PORT}/

    `)
  );
});
