const { db, User } = require("../db");
const data = ["moe", "larry", "curly"];

const sync = async () => {
  await db.sync({ force: true });
  await Promise.all(
    data.map(user => {
      User.create({ name: user });
    })
  );
};

try {
  sync().then(() => {
    console.log(`
    Seeding successful!
  `);
  });
} catch {
  console.log("SEEDING FAILED");
}
