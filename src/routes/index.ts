import { Router } from 'express';
import { BusinessLogic } from '../@types/BusinessLogic';
import * as mainController from '../controllers/clubRelatedApi';
import { errorHandler } from '../middlewares/errorHandler';
import { verifyToken } from '../middlewares/verifyToken';

const router: Router = Router();

const supplyClubItemsHandler: BusinessLogic = errorHandler(mainController.supplyClubItems);
const putClubItemsHandler: BusinessLogic = errorHandler(mainController.putClubItems);

router.post("/club/:club_id/supply", verifyToken, supplyClubItemsHandler);
router.put("/club/:club_id/supply/:supply_id", verifyToken, putClubItemsHandler);

export default router;