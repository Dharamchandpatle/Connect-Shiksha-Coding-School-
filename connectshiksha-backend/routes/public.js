const express = require('express');
const router = express.Router();

const { getAllPublicCourse, getPublicCourseById } = require('../controller/public');

router.get('/allCourses', getAllPublicCourse);
router.get('/course/:id', getPublicCourseById);

module.exports = router;
