var express = require('express');
var router = express.Router();
var fs=require('fs');
var path=require('path');
var sha1=require('sha1');

var UserModel=require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signup 注册页
router.get('/', checkNotLogin, function(req, res, next) {
  res.render('signup');
});

// POST /signup 用户注册
router.post('/', checkNotLogin, function(req, res, next) {

  var name=req.fields.name;
  var gender=req.fields.gender;
  var bio=req.fields.bio;
  var avatar=req.files.avatar.path.split(path.sep).pop();
  var password=req.fields.password;
  var repassword=req.fields.repassword;

  password=sha1(password);

 // 待写入数据库的用户信息
  var user = {
    name: name,
    password: password,
    gender: gender,
    bio: bio,
    avatar: avatar
  };

  

  res.send(req.flash());
});

module.exports = router;
