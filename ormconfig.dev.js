// tslint:disable-next-line:no-var-requires
const NamingStrategy = require('./dist/namingStrategy').NamingStrategy

module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 6543,
    username: 'postgres',
    password: 'postgres',
    database: 'dev',
    synchronize: false,
    logging: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/**/*.ts'],
    cache: false,
    namingStrategy: new NamingStrategy(),
    cli: {
        migrationsDir: 'src/migrations',
    },
    ssl: false,
}
