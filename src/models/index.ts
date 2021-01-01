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

  // club - tag relation n:m
  db.Club.belongsToMany(db.Tag, { foreignKey: "club_id", through: "club_tag" });
  db.Tag.belongsToMany(db.Club, { foreignKey: "tag_id", through: "club_tag" });

  // user - club relation 1:n
  db.Club.hasMany(db.User, { sourceKey: "id", foreignKey: "club_id" });
  db.User.belongsTo(db.Club, { targetKey: "id", foreignKey: "club_id" });

  // user - supply relation 1:n
  db.User.hasMany(db.Supply, { sourceKey: "id", foreignKey: "user_id" });
  db.Supply.belongsTo(db.User, { targetKey: "id", foreignKey: "user_id" });

  // supply - option relation 1:n
  db.Supply.hasMany(db.Option, { sourceKey: "id", foreignKey: "supply_id" });
  db.Option.belongsTo(db.Supply, { targetKey: "id", foreignKey: "supply_id" });

  return db;
}

export const db = createModels();