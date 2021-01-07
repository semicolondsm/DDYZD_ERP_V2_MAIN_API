import { Router } from 'express';
import { BusinessLogic } from '../@types/BusinessLogic';
import * as mainController from '../controllers/clubRelatedApi';
import * as authController from "../controllers/authenticationUserApi";
import { errorHandler } from '../middlewares/errorHandler';
import { verifyToken } from '../middlewares/verifyToken';
import { verifyRefreshToken } from '../middlewares/verifyRefreshToken';

const router: Router = Router();

const provideTokenHandler: BusinessLogic = errorHandler(authController.provideToken);
const refreshTokenHandler: BusinessLogic = errorHandler(authController.refreshToken);

const supplyClubItemsHandler: BusinessLogic = errorHandler(mainController.supplyClubItems);
const putClubItemsHandler: BusinessLogic = errorHandler(mainController.putClubItems);
const deleteClubItemsHandler: BusinessLogic = errorHandler(mainController.deleteClubItems);
const showClubStatusHandler: BusinessLogic = errorHandler(mainController.showClubStatus);

router.get("/user/token", provideTokenHandler);
router.get("/user/refresh", verifyRefreshToken, refreshTokenHandler);

router.post("/club/:club_id/supply", verifyToken, supplyClubItemsHandler);
router.put("/club/:club_id/supply/:supply_id", verifyToken, putClubItemsHandler);
router.delete("/club/:club_id/supply/:supply_id", verifyToken, deleteClubItemsHandler);
router.get("/club/:club_id/status", showClubStatusHandler);

export default router;