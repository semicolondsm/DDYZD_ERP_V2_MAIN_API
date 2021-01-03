import { Router } from 'express';
import { BusinessLogic } from '../@types/BusinessLogic';
import { supplyClubItems } from '../controllers/clubRelatedApi';
import { errorHandler } from '../middlewares/errorHandler';
import { verifyToken } from '../middlewares/verifyToken';

const router: Router = Router();

const supplyClubItemsHandler: BusinessLogic = errorHandler(supplyClubItems);

router.post("/club/:club_id/supply", verifyToken, supplyClubItemsHandler);

export default router;