const router = require("express").Router();

const {
  findThoughts,
  findOneThought,
  newThought,
  changeThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(findThoughts).post(newThought);

router
  .route("/:id")
  .get(findOneThought)
  .put(changeThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
