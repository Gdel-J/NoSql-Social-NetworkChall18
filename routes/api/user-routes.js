const router = require("express");

const {

    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers/userController");

// api/users
router.route("/").get(getAllUser).post(createUser);


// api/user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//api/users/:userId/friends/:friendId

router.route("/userId/friends/:friendId").post(addFriend).delete(removeFriend);


module.exports = router;