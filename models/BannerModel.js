const mongoose = require("mongoose");

const BannerSchema = mongoose.Schema({
    image:{
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model("BannerModel", BannerSchema);


