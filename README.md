# NestJS not-so-awesome Boilerplate

## Development
- Run `docker-compose up` for databases
- Run `yarn start:debug` to run with debugger
- Run `yarn generate-types` to generate types for GraphQL schema
- Run `./scripts/typeorm.sh [options]` to run typeorm cli for development

API Entrypoint: `/api/graphql`

## Compatibility
- node:12.13
- postgres:11.6

## Environment Variables
- NODE_ENV: `production` | `development`
- Database:
    * DB_HOST
    * DB_PORT
    * DB_USERNAME
    * DB_PASSWORD
    * DB_NAME
    * SSL always uses in `production`

## What included
- GraphQL
- TypeOrm (PostgreSQL)
- JWT
- Lodash
- Docker