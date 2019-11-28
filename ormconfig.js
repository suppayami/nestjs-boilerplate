// tslint:disable-next-line:no-var-requires
const ConfigService = require('./dist/config/config.service').ConfigService
const configService = new ConfigService()

module.exports = configService.createTypeOrmOptions()