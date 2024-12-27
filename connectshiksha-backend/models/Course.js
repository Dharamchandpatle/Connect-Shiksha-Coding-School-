const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    includes: [
        {
            type: String
        }
    ],
    courseImage: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    introVideo: {
        type: String,
        required: true
    },
    syllaBus: {
        ref: 'Syllabus',
        type: Schema.Types.ObjectId
    },
    instructor: [
        {
            ref: 'Instructor',
            type: Schema.Types.ObjectId
        }
    ],
    category: {
        ref: 'Category',
        type: Schema.Types.ObjectId
    },
    Batch: {
        ref: 'Batch',
        type: Schema.Types.ObjectId
    },
    Faq: [
        {
            type: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;