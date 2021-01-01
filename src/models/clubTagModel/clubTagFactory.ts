import Sequelize, { INTEGER } from 'sequelize';
import { ClubTagInterface } from '../objectRelationalMapping/model.interfaces';
import { SequelizeAttributes } from '../objectRelationalMapping/sequelize.attributes';
import { ClubTagAttributes } from './attributes';

const ClubTagFactory = (sequelize: Sequelize.Sequelize): Sequelize.ModelCtor<ClubTagInterface> => {
  const attributes: SequelizeAttributes<ClubTagAttributes> = {
    tag_id: {
      type: INTEGER,
    }, 
    club_id: {
      type: INTEGER,
    },
  };
  const ClubTag = sequelize.define<ClubTagInterface, ClubTagAttributes>("club_tag", attributes, {
    timestamps: false,
    freezeTableName: true,
  });
  return ClubTag;
}

export { ClubTagFactory }