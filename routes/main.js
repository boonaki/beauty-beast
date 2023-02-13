const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const productsController = require('../controllers/products');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/checkout", ensureAuth, productsController.getCheckout);
router.get("/feed", ensureAuth, productsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get('/admin', ensureAuth, productsController.getProfile);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/congratulations", homeController.getCongratulations)

module.exports = router;

// npm install
// npm run start