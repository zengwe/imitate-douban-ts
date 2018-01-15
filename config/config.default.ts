import { EggAppConfig } from 'egg';
import * as path from 'path';
import { configPrivate } from './sequelize'
export default (appInfo: EggAppConfig) => {
    let config = {
        keys: appInfo.name + '_1509346759916_154',
        middleware: [],
        security: {
            csrf: {
                enable: false,
                ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
            },
            domainWhiteList: ['http://127.0.0.1:7001'],
        },
        static: {
            prefix: '/public/',
            dir: path.join(appInfo.baseDir, 'static/public'),
            dynamic: true,
            preload: false,
            buffer: false,
            maxFiles: 1000,
        },
        // filePath: {
        //     staticPrefix: '/static',
        //     root: path.resolve('./'),
        //     companyLogo: '/static/public/logo/',
        //     projectImage: '/static/public/project/image/',
        //     userAvator: '/static/public/user/avator/',
        //     notPublicPath: '/static/notpublicpath/libraryfile/',
        //     activity: {
        //         attachment: 'static/activity/attachment/',
        //         report: 'static/activity/report/'
        //     },
        //     databank: {
        //         normal: 'static/databank/normal/'
        //     },
        //     inspectionAttachment: 'static/inspection/attachment'
        // },
        multipart: {
            autoFields: false,
            defaultCharset: 'utf8',
            fieldNameSize: 100,
            fieldSize: '100kb',
            fields: 10,
            fileSize: '10mb',
            files: 10,
            fileExtensions: [],
            whitelist: ['.pdf', '.png', '.xls', '.docx', 'xlsx', '.doc', '.ppt', '.pptx', '.jpeg', '.jpg', '.gif', '.zip'],
        },
        bodyParser: {
            enable: true,
            encoding: "utf8",
            formLimit: String(1024 * 64) + "kb",
            jsonLimit: String(1024 * 64) + "kb",
            strict: true,
            queryString: {
                arrayLimit: 100,
                depth: 5,
                parameterLimit: 1000
            },
            returnRawBody: true
        },
        sequelize: {
            dialect: 'mysql',
            database: 'sameali',
            host: '127.0.0.1',
            port: '3306',
            username: 'root',
            password: '826150s',
        },
        session: {
            maxAge: 48 * 3600 * 1000,
            key: 'EGG_SESS',
            httpOnly: true,
            encrypt: true,
        }
    }
    return Object.assign(config, configPrivate);
};