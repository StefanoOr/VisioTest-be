const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/", controller.getItem);
router.get("/:id", controller.getItemById);
router.delete("/delete/:id", controller.deleteItem);
router.post("/", controller.addItem);
router.put("/update/:id", controller.updateItem);

module.exports = router;
