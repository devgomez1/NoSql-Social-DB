const router = require("express").Router();

const {
  findUsers,
  findOneUser,
  newUser,
  changeUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

router.route("/").get(findUsers).post(newUser);

router
  .route("/:id")
  .get(findOneUser)
  .put(changeUser)
  .delete(deleteUser);

router.route("/:thoughtId/reactions").post(addFriend);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteFriend);

module.exports = router;
