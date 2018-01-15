import { Controller } from 'egg';

export default class HomeController extends Controller {
    /**
     * @author zengwe
     * @
     */
    public async index() {
        //let result = await this.app.model.User.create({id:1,username: 'sss',age: 12});
        //console.log(result.age);
        let result = await this.app.model.User.findAll();
        console.log(result);
        this.ctx.body = 'hellow world';
    }
}