
import { define, Model, SequelizeStatic } from '../../declear/sequelize';
import { User, UserAttributes } from './user';
import { Actor, ActorAttributes } from './actor';
import { ActorsRelation, ActorsRelationAttributes } from './actors-relation';
import { ActorImage, ActorImageAttributes } from './actor-image';
import { ActorImageComment, ActorImageCommentAttributes } from './actor-image-comment';
interface ModelInstanceBase {
  isNewRecord: boolean;  
}
interface UserInstance extends ModelInstanceBase, UserAttributes {
  dataValues: UserAttributes
}
interface ActorInstance extends ModelInstanceBase, ActorAttributes {
  dataValues: ActorAttributes
}
interface ActorsRelationInstance extends ModelInstanceBase, ActorsRelationAttributes {
  dataValues: ActorsRelationAttributes
}
interface ActorImageInstance extends ModelInstanceBase, ActorImageAttributes {
  dataValues: ActorImageAttributes;
}
interface ActorImageCommentInstance extends ModelInstanceBase, ActorImageCommentAttributes {
  dataValues: ActorImageCommentAttributes
}
declare module 'egg' {
  export interface Application {
    model:{
        define: define,
        User: Model<UserInstance | null, UserAttributes>;
        Actor: Model<ActorInstance | null, ActorAttributes>;
        ActorsRelation: Model<ActorsRelationInstance | null, ActorsRelationAttributes>;
        ActorImage: Modle<ActorImageInstance | null, ActorImageAttributes>;
        ActorImageComment: Model<ActorImageCommentInstance | null, ActorImageCommentAttributes>;
    },
    Sequelize: SequelizeStatic
  }
}