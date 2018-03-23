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
        result[0]
        this.app.model.User.findAll({
            where: {
                username: {
                    [this.app.Sequelize.Op.ne]: 1
                }
            }
        });
        console.log(result);
        this.ctx.body = 'hellow world';
    }
}