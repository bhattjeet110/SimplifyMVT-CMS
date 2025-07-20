module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri: env('DATABASE_URI', 'mongodb://127.0.0.1:27017/simplifymvt-CMS'),
      },
      options: {
        authenticationDatabase: null,
        ssl: false,
      },
    },
  },
});
