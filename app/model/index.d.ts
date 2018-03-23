
import { define, Model, SequelizeStatic } from '../../declear/sequelize';
import { User, UserAttributes } from './user';
import { Actor, ActorAttributes } from './actor';
import { ActorsRelation, ActorsRelationAttributes } from './actors-relation';
import { ActorImage, ActorImageAttributes } from './actor-image';
import { ActorImageComment, ActorImageCommentAttributes } from './actor-image-comment';
interface ModelInstanceBase<T> {
  isNewRecord: boolean;
  dataValues: T
}
interface UserInstance extends ModelInstanceBase<UserAttributes>, UserAttributes {};
interface ActorInstance extends ModelInstanceBase<ActorAttributes>, ActorAttributes {};
interface ActorsRelationInstance extends ModelInstanceBase<ActorsRelationAttributes>, ActorsRelationAttributes {};
interface ActorImageInstance extends ModelInstanceBase<ActorImageAttributes>, ActorImageAttributes {};
interface ActorImageCommentInstance extends ModelInstanceBase<ActorImageCommentAttributes>, ActorImageCommentAttributes {};
declare module 'egg' {
  export interface Application {
    model:{
        define: define,
        User: Model<UserInstance | null, UserAttributes>
        Actor: Model<ActorInstance | null, ActorAttributes>;
        ActorsRelation: Model<ActorsRelationInstance | null, ActorsRelationAttributes>;
        ActorImage: Modle<ActorImageInstance | null, ActorImageAttributes>;
        ActorImageComment: Model<ActorImageCommentInstance | null, ActorImageCommentAttributes>;
    },
    Sequelize: SequelizeStatic
  }
}