import { Module } from '@nestjs/common'
import { PlaygroundResolvers } from './playground.resolvers'

@Module({
    providers: [PlaygroundResolvers],
})
export class PlaygroundModule {}
