import { Dialect } from 'sequelize/types'

export const config = {
  database: {
    dialect: 'sqlite' as Dialect,
    logging: false,
    autoLoadModels: true,
    synchronize: true,
  },
  jwtPrivateKey: 'jwtPrivateKey',
}
