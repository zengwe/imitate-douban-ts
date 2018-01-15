import HomeController from './home';
import BackActorController from './back-actor'
declare module 'egg' {
  export interface IController {
    home: HomeController;
    backActor: BackActorController;
  }
}
