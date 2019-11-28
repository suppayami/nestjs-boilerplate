import { Resolver, Query } from '@nestjs/graphql'

@Resolver('Playground')
export class PlaygroundResolvers {
    @Query()
    hello() {
        return 'Hello World'
    }
}
