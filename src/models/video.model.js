import mongoose , {Schema} from "mongoose";
import mongooseAggergatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        category: {
            type: String,
            required: true,
           // unique: true,
            trim: true,
          //index: true
        },
        views: {
            type: Number,
            default: 0
        },
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        }, 
        duration: {
            type: Number,
            default: 0
        },
       /*  thumbnail: {
            type: String,
            required: true,
            trim: true,
            index: true
        },*/
        uploadDate: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            required: true,
            trim: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment"
            }
        ],
    },
    {
        timestamps: true,
    }
);

videoSchema.plugin(mongooseAggergatePaginate);
export const Video = mongoose.model("Video", videoSchema);  


    