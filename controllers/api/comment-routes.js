const express = require('express').Router();
const { Comment } = require('../../models')
const withAuth = require('../../utils/auth');

//router.get('/', with(req, res) => {
    Comment.findAll({})
        .then(dbComment)
//})
