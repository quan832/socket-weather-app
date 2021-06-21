const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const weatherController = require("../controllers/weatherController");

const auth = require("../middlewares/auth");

// router.get("/", auth, catchErrors(weatherController.getAllWeather));
// router.post("/",auth, catchErrors(weatherController.createCityWeather));

router.get("/", catchErrors(weatherController.getAllWeather));
router.get("/:id", catchErrors(weatherController.getYourCityWeather));

router.post("/", catchErrors(weatherController.createCityWeather));

module.exports = router;
