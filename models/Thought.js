const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../../Chall18-Social-Network/utils/dateFormat")

const  Thought = model("Thought", ThoughtSchema);


const ReactionSchema = new Schema(

    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            maxlenght: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createAt: {
            type: Date,
            default: Date.now,
            get:(timestamp)  => dateFormat(timestamp),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id:false,
    }

);


const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Thought is Required",
            minlength:1,
            maxlength:280,
        },

        createAt:{
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },


        reactions: [ReactionSchema],
    },

    {
        toJSON: {
            virtuals: true,
            getters: true,
        },

        id: false,
        }
);

ThoughtSchema.virtual("reactionCount").get(function () {
    return this.rections.length;
});



module.exports = Thought;






    

    