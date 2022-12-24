const db = require("mongoose");

//mongodb+srv://admin:admin@cluster0.xjqaxyw.mongodb.net/test
db.Promise = global.Promise;
async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
  });
  console.log("[db] Conectada con exito");
}

module.exports = connect;
