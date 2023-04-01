const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\nDatabase Synced\n");
  await seedCategories();
  console.log("\nCatedory Seeded\n");

  await seedProducts();
  console.log("\nProduct Seeded\n");

  await seedTags();
  console.log("\nTags seeded\n");

  await seedProductTags();
  console.log("\nProduct tags seeded\n");

  process.exit(0);
};

seedAll();
