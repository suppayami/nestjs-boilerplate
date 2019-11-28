import { Injectable } from '@nestjs/common'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql'
import { NamingStrategy } from 'src/namingStrategy'

@Injectable()
export class ConfigService implements TypeOrmOptionsFactory, GqlOptionsFactory {
    isProduction() {
        return process.env.NODE_ENV === 'production'
    }

    get(key: string, defaultValue = '') {
        return process.env[key] || defaultValue
    }

    getNumber(key: string, defaultValue = 0) {
        return parseInt(process.env[key] || '0', 10) || defaultValue
    }

    /**
     * TypeORM Options Factory
     */
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.get('DB_HOST', 'localhost'),
            port: this.getNumber('DB_PORT', 6543),
            username: this.get('DB_USERNAME', 'postgres'),
            password: this.get('DB_PASSWORD', 'postgres'),
            database: this.get('DB_NAME', 'agia_dev'),
            entities: ['dist/**/*.entity{.ts,.js}'],
            migrations: ['dist/migrations/**/*{.ts,.js}'],
            cli: {
                migrationsDir: 'dist/migrations',
            },
            synchronize: false,
            namingStrategy: new NamingStrategy(),
            logging: ['query', 'error', 'warn'],
            ssl: this.isProduction(),
        }
    }

    /**
     * GraphQL Options Factory
     */
    createGqlOptions(): GqlModuleOptions {
        return {
            typePaths: ['./src/**/*.graphql', './dist/**/*.graphql'],
            path: '/api/graphql',
            debug: !this.isProduction(),
        }
    }
}
