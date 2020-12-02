const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/:id")
.delete(bookController.remove);

router.route("/")
    .get(bookController.findAll)
    .post(bookController.create)



module.exports = router;