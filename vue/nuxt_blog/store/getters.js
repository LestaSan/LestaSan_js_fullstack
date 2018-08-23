import globalConfig from '../server/index';

export default {
    baseUrl() {
        let host = `http://${globalConfig.app.host}:${globalConfig.app.port}/${globalConfig.app.routerBaseApi}`;
        return host;
    }
}