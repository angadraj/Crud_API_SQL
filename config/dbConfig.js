module.exports = {
    HOST: 'localhost',
    USER: 'Angad',
    PASSWORD: 'root',
    DB: 'demo1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
