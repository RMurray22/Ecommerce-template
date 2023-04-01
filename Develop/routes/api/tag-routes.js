const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  console.log("Read all tags");
  Tag.findAll({
    include: [Product],
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log("Read tag by id");
  Tag.findOne({
    where: { id: req.params.id },
    include: [Product],
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id." });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  console.log("Create tag");
  // create a new tag
  Tag.create(req.body)
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  console.log("Update tag by id");
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      res.json({ message: "Tag updated successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  console.log("Delete tag by id");
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id." });
        return;
      }
      res.json({ message: "Tag deleted successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
