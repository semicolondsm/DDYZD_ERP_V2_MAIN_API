import { sequelize } from './../configs/connection';
import { ClubFactory } from './clubModel/clubFactory';
import { ClubTagFactory } from './clubTagModel/clubTagFactory';
import { DbInterface } from './objectRelationalMapping/db.interface';
import { OptionFactory } from './optionModel/optionFactory';
import { SupplyFactory } from './supplyModel/supplyFactory';
import { TagFactory } from './tagModel/tagFactory';
import { UserFactory } from './userModel/userFactory';

const createModels = (): DbInterface => {
  const db: DbInterface = {
    sequelize,
    Club: ClubFactory(sequelize),
    Tag: TagFactory(sequelize),
    ClubTag: ClubTagFactory(sequelize),
    User: UserFactory(sequelize),
    Supply: SupplyFactory(sequelize),
    Option: OptionFactory(sequelize)
  };
  return db;
}

export const db = createModels();