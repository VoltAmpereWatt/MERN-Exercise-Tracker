// need express router since this is a router we're creating.
const router = require('express').Router();
// going to require the mongoose model 
let User = require('../models/user.model');

// first route
// first endpoint that handles http GET requests on the /users url path.
// i.e localhost:5000/users/ only, nothing after slash, and get request
// then the code in braces happens. 
router.route('/').get((req,res) =>{
    // User.find() is a mongoose method that is going to get a list of 
    // all the users from the mongo db atlas database
    User.find() // find method returns a promise
        .then(users => res.json(users)) // the results returned in json format (all users from db)
        // if there is an error, return status message number.
        .catch(err => res.status(400).json('Error: '+err));
});

// this route handles http post requests. for urls in the form localhost:500/users/add
router.route('/add').post((req,res) => {
    // new constant with value equal to username from request body
    const username = req.body.username;
    // create new instance of user using the username. like django model_name(params)
    const newUser = new User({username});

    // add to database
    newUser.save()
    // once added, return this string
        .then(() => res.json('User addede!'))
        // if not then return error.
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
