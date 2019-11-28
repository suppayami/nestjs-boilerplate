import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUser1574960079930 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'inserted_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                ],
                indices: [
                    {
                        isUnique: true,
                        columnNames: ['email'],
                    },
                ],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('user')
    }
}
