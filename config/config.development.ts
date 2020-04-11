import { Dialect } from 'sequelize/types';

export const config = {
    database: {
        dialect: 'postgres' as Dialect,
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '',
        database: 'test_nestjs',
        logging: false,
        autoLoadModels: true,
        synchronize: true,
    },
    jwtPrivateKey: 'jwtPrivateKey',
};
