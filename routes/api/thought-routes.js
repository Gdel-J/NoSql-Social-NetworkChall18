const router = require("express");
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thoughtController");

// api thoughts
router.route("/").get(getAllThought).post(createThought);

// api/thoughts/:id
router.route("/:id")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// api/thoughts/:thoughtId/reactions/reactions
router.route("/:toughtId/reactions").post(addReaction);

// api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/reactions").delete(removeReaction);


module.exports = router;