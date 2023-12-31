const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat")




const ReactionSchema = new Schema(

    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            maxlengh: 280,
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
    return this.reactions.length;
});



const  Thought = model("Thought", ThoughtSchema);   //  This const is moved here because I needed to create the model first  then declare that model...

module.exports = Thought;






    

    
