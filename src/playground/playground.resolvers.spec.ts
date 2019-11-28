import { Test, TestingModule } from '@nestjs/testing'
import { PlaygroundResolvers } from './playground.resolvers'

describe('PlaygroundResolvers', () => {
    let playgroundResolvers: PlaygroundResolvers

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [PlaygroundResolvers],
        }).compile()

        playgroundResolvers = app.get<PlaygroundResolvers>(PlaygroundResolvers)
    })

    describe('QUERY: hello', () => {
        it('should return "Hello World"', () => {
            expect(playgroundResolvers.hello()).toBe('Hello World')
        })
    })
})
