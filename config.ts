import { config as configTest } from './config/config.test'
import { config as configDev } from './config/config.development'
import { config as configProd } from './config/config.production'

export default process.env.NODE_ENV === 'test'
  ? configTest
  : process.env.NODE_ENV === 'production'
  ? configProd
  : configDev
