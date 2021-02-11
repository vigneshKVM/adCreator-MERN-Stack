const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
// router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/templates', isAuth, adminController.getTemplates);

// /admin/add-product => POST
router.post('/add-template', isAuth, adminController.postAddTemplate);

// router.get('/edit-template/:templateId', isAuth, adminController.getEditTemplate);

router.post('/edit-template', isAuth, adminController.postEditTemplate);

router.post('/delete-template', isAuth, adminController.postDeleteTemplate);

module.exports = router;
