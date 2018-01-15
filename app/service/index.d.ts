import Actor from './actor';
declare module 'egg' {
  export interface IService {
    actor: Actor;
  }
}
