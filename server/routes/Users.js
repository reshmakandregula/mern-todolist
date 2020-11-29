const router = require('express').Router();
let UsersData = require('../models/UserModal');

router.route('/').get((req, res) => {
UsersData.find()
     .then(data => res.json(data))
     .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newUser = new UsersData({
        username,
        lastname,
        age,
        gender,
    });

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//    router.route('/:id').get((req, res) => {
//        UsersData.findById(req.params.id)
//          .then(data => res.json(data))
//          .catch(err => res.status(400).json('Error:' + err));
//     });

    router.route('/:id').delete((req, res) => {
        UsersData.findByIdAndDelete(req.params.id)
             .then(()=> res.json('User was deleted...'))
             .catch(err => res.status(400).json('Error:' + err));
        });

    router.route('/update/:id').post((req, res) => {
       UsersData.findById(req.params.id)
         .then(data => {
            data.firstname = req.body.firstname;
            data.lastname = req.body.lastname;
            data.age = Number(req.body.age);
            data.gender = req.body.gender;
            
            data.save()
            .then(() => res.json('User has been Updated...!'))
            .catch(err => res.status(400).json('Error:' + err));
         })
         .catch(err => res.status(400).json('Error:' + err));
    });
module.exports = router;