const router = require('express').Router();
const Entry = require('../../models/Entry');

// route to create/add a entry using async/await
router.post('/', async (req, res) => {
  try { 
    const entryData = await Entry.create({
    entry_title: req.body.entry_title,
    entry_text: req.body.entry_text
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(entryData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
