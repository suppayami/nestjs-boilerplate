import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity('user')
export class User {
    @PrimaryColumn('bigint')
    id: string

    @Column('varchar', { unique: true })
    email: string

    @Column('varchar')
    password: string

    @CreateDateColumn()
    insertedAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
