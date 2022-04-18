const router = require('express').Router();
const { User, List, Task, Category, Recipe, Wine, Playlist } = require('../models');

// get weekly view page
router.get('/', async (req, res) => {

    try {
<<<<<<< HEAD
      const userData = await User.findByPk(4, { // change number to req.session.user_id when login functionality is ready
=======
      const userData = await User.findByPk(15, {
>>>>>>> main
        attributes: { exclude: ['password'] },
        include: [
          { model: List,
            where: {
              list_date: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            include: [ {model: Task} ]
          }
        ],
      });
    
      const user = userData.get({ plain: true });
      console.log(user);

      // const newCulExp = await Category.findByPk(req.params.id, {
      //   include: [ { model: Recipe, Wine, Playlist } ],
      // });
      // const culExp = newCulExp.get({ plain: true });

      res.render('homepage', {
        ...user, 
        // ...culExp,
        loggedIn: req.session.loggedIn,
      });
      
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }

});

// get login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router; 