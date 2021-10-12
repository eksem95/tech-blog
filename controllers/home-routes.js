const router = require('express').Router();
const Entry = require('../models/entry');

// route to get all entries
router.get('/', async (req, res) => {
  const entryData = await Entry.findAll().catch((err) => { 
      res.json(err);
    });
      const entries = entryData.map((entry) => entry.get({ plain: true }));
      res.render('all', { entries });
    });

// // route to get one dish
// router.get('/dish/:id', async (req, res) => {
//   try{ 
//       const dishData = await Dish.findByPk(req.params.id);
//       if(!dishData) {
//           res.status(404).json({message: 'No dish with this id!'});
//           return;
//       }
//       const dish = dishData.get({ plain: true });
//       res.render('dish', dish);
//     } catch (err) {
//         res.status(500).json(err);
//     };     
// });

module.exports = router;
