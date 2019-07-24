var express = require('express');
var router = express.Router();

var projectArray = [{name:'jaiHo' , description:'This application describe the all project and specially made for assignment 7 as a special requirment',date:'29th march 2019',Reference: 'DC connect Post'},
{name:'String' , description:'This application describe the all project and specially made for assignment 7 as a special requirment',date:'04-04-2019',Reference: 'DC connect Post'},
{name:'Array' , description:'This application describe the all project and specially made for assignment 7 as a special requirment',date:'04-04-2019',Reference: 'DC connect Post'},
{name:'Buffer' , description:'This application describe the all project and specially made for assignment 7 as a special requirment',date:'04-04-2019',Reference: 'DC connect Post'},
{name:'ClassObject' , description:'This application describe the all project and specially made for assignment 7 as a special requirment',date:'04-04-2019',Reference: 'DC connect Post'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('project', { title: 'projects', projects: projectArray});
});

module.exports = router;