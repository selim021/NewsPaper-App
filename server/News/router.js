const router = require('express').Router();
const NewsController = require('../News/NewsController.js')


router.get("/news", NewsController.getAll);
router.post("/news", NewsController.createOne);
router.put("/news/:id", NewsController.updateOne);
router.delete("/news/:id", NewsController.deleteOne);





router.post("/user", NewsController.signUp);

router.get("/user",NewsController.getAllUssers)

router.post("/login", NewsController.login);



module.exports = router;