const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    newsImage: {
        type: String,
        required: true
    },
    isFeatured:{
        type : Boolean,
        required:true,
    },
    newsDate:{
        type : Date,
        require : true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require : true,

    }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;