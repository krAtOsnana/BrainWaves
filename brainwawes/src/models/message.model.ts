import mongoose, {Schema, Document, mongo} from "mongoose";

export interface IMessage extends Document {
  content: string;
  createdAt: Date; 
}
export const MessageSchema: Schema<IMessage> = new Schema({
    content:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now,
    }
})

const MesageModel = ( mongoose.models.Message as mongoose.Model<IMessage> ) ||
                            ( mongoose.model<IMessage>("message", MessageSchema))

export default MesageModel;