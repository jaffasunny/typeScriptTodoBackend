const express = require("express");
const {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const { validateToken } = require("../middleware/validateTokenHandler");

const router = express.Router();

router.use(validateToken);
router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;
