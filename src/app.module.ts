import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PlaygroundModule } from './playground/playground.module'
import { ConfigModule } from './config/config.module'
import { ConfigService } from './config/config.service'
import { AccountsModule } from './accounts/accounts.module'

@Module({
    imports: [
        // GraphQL Module
        GraphQLModule.forRootAsync({
            imports: [ConfigModule],
            useExisting: ConfigService,
        }),

        // TypeOrm Module
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useExisting: ConfigService,
        }),

        // Application Modules
        PlaygroundModule,
        ConfigModule,
        AccountsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
