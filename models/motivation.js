import mongoose from "mongoose";

export default mongoose.model('motivation', {
    label: String,
    timeStamp: { type: Date, default: Date.now }
});

