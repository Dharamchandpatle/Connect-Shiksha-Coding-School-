const express = require('express');
const router = express.Router();

const { adminLogin,
    createAdmin,
    getAllUser,
    createCourse,
    getAllCourse,
    getCourseById,
    deleteCourse,
    createNews,
    getAllNews,
    deleteNews,
    updateNews,
    featureNews,
    getFeaturedNews
} = require('../controller/admin');
const { verifyAdminToken } = require('../middleware/tokenverification');
const { upload, deleteImage } = require('../middleware/mediaUpload');

// Middleware to handle errors from Multer
const handleMulterErrors = (err, req, res, next) => {
    if (err) {
        res.status(400).send({ error: err.message });
    } else {
        next();
    }
};

router.post('/login', adminLogin);
router.post('/create', createAdmin);
router.get('/getAllUser', verifyAdminToken, getAllUser);
router.post('/createCourse', verifyAdminToken, upload.single('file'), handleMulterErrors, createCourse);
router.get('/getAllCourse', verifyAdminToken, getAllCourse);
router.get('/getCourseById/:id', verifyAdminToken, getCourseById);
router.delete('/deleteCourse/:id', verifyAdminToken, deleteCourse);

// Get all news
router.get('/getallnews' , verifyAdminToken ,getAllNews)

// Create news
router.post('/createNews' , verifyAdminToken , createNews);

// Delete news
router.delete('/deletenews/:id' , verifyAdminToken ,deleteNews);

// Update News 
router.put('/updateNews/:id' , verifyAdminToken , updateNews)

// Feature news
router.patch('/updatenews/:id/feature', featureNews);

// getFeaturedNews
router.get('/updatenews/featured', getFeaturedNews);

module.exports = router;63

