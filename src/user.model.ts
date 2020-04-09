import { Model, Table, Column } from 'sequelize-typescript'

@Table
export class User extends Model<User> {
  @Column
  firstName: string

  @Column
  lastName: string

  @Column({ defaultValue: true })
  isActive: boolean
}
