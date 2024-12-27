const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { success, badRequest, serverError } = require('../lib/response');
const { checkMandatoryFields } = require('../lib/validations');
const { generateAdminToken } = require("../lib/generateToken");
const {deleteImage} = require('../middleware/mediaUpload');

const User = require('../models/User');
const Course = require('../models/Course');
const News = require('../models/News')

const adminLogin = async (req, res) => {
    const mandatoryFields = ['username', 'password'];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { username, password } = req.body;
        try {
            let admin = await Admin.findOne({ username });
            if (!admin) {
                return badRequest(res, 'Invalid Credentials')
            }
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return badRequest(res, 'Invalid Credentials')
            }

            const token = generateAdminToken(admin._id);
            success(res, 'Admin Logged In Successfully', { token });


        }
        catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }

}

const createAdmin = async (req, res) => {
    const mandatoryFields = ['username', 'password'];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { username, password } = req.body;
        try {
            let admin = await Admin.findOne({ username });
            if (admin) {
                return badRequest(res, 'Admin already exists');
            }
            admin = new Admin({
                username,
                password
            });
            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(password, salt);
            await admin.save();
            success(res, 'Admin Created Successfully');
        }
        catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }
}

// get all user details
const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        success(res, 'All Users', users);
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
}

// create course

const createCourse = async (req, res) => {
    const mandatoryFields = [ 'description', 'price', 'duration',"introVideo","title"];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const {  description, price, duration, category, file, title, introVideo } = req.body;
        try {
            let course = await Course.findOne({ title });
            if (course) {
                return badRequest(res, 'Course already exists');
            }
            // uploaded image url 
            const fileUrl = req.file.location;
            course = new Course({
                title,
                description,
                price,
                duration,
                courseImage: fileUrl,
                introVideo,

            });
            await course.save();
            success(res, 'Course Created Successfully');
        }
        catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }
}
// get all course
const getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find();
        success(res, 'All Courses', courses);
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
}
// get course by id
const getCourseById = async (req, res) => {
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

// delete course by id and course image

const deleteCourse = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return badRequest(res, 'Course ID is required');
    }
    try {
        const course = await Course.findById(id);
        if (!course) {
            return badRequest(res, 'Course not found');
        }
        await deleteImage(course.courseImage).then((data) => {
            console.log("image deleted successfully",data);
        }).catch((error) => {
            console.log("error while deleting image",error.message);
        });
        await Course.findByIdAndDelete(id);
        success(res, 'Course Deleted Successfully');
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
}
// news section

// Get all news
const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Create news
const createNews = async (req, res) => {

    try {
        const news = await News.create(req.body);
        res.status(201).json({
            success: true,
            news
        })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({
            status: false,
            message: " Internal server Error "
        })
    }
};



// Delete news
const deleteNews = async (req, res) => {
    try {
        const id = await News.findById(req.params.id);

        if (!id) {
            return badRequest(res, " course id is required ")
        }

        await News.findByIdAndDelete(id);
        res.json({ message: 'Deleted News' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update news 
const updateNews = async (req, res , next )=>{
    try {
        let news = await News.findById(req.params.id);
        if (!news) {
            return badRequest(res, "news not Found ")
        }

        news = await News.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            success: true,
            news
        })

        
    } catch (e) {
        console.log(e.message);
        res.status(500).json({
            status:false,
            message:"Internal server Error "
        })
        
    }
}
// isFeatured/UnisFeatured News function
const featureNews = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { isFeatured } = req.body;

        let news = await News.findById(id);
        if (!news) {
            return res.status(400).json({
                success: false,

                message: "News not found"
            });
        }

        news.isFeatured = isFeatured;
        await news.save();

        res.status(200).json({
            success: true,
            news
        });

    } catch (e) {
        console.error(e.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


// Get Featured News function
const getFeaturedNews = async (req, res, next) => {
    try {
        let featuredNews = await News.find({ featured: true });

        res.status(200).json({
            success: true,
            featuredNews
        });
        
    } catch (e) {
        console.error(e.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { adminLogin, createAdmin, getAllUser, createCourse, getAllCourse ,getCourseById ,deleteCourse ,createNews,
    getAllNews,
    deleteNews,
    updateNews,
    featureNews,
    getFeaturedNews };