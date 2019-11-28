import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { PlaygroundModule } from '../src/playground/playground.module'
import { INestApplication } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

describe('Playground (e2e)', () => {
    let app: INestApplication

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                GraphQLModule.forRoot({
                    typePaths: ['./src/**/*.graphql'],
                }),
                PlaygroundModule,
            ],
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    it('QUERY: hello', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .send({ query: '{ hello }' })
            .expect(200)
            .expect({ data: { hello: 'Hello World' } })
    })
})
