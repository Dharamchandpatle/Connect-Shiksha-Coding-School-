const { success, badRequest, serverError } = require('../lib/response');
const Course = require('../models/Course');


// get all course
const getAllPublicCourse = async (req, res) => {
    try {
        const courses = await Course.find();
        success(res, 'All Courses', courses);
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
}

const getPublicCourseById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return badRequest(res, 'Course ID is required');
    }
    try {
        const course = await Course.findById(id);
        if (!course) {
            return badRequest(res, 'Course not found');
        }
        success(res, 'Course', course);
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
}

module.exports = { getAllPublicCourse, getPublicCourseById };