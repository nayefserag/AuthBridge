export const getAppDBConfig = (appName: string) => {
    const configs = {
        TaskTresk: {
        uri: process.env.TASK_TRESK_APP_MONGO_URI,
        dbName: 'TaskTreskDB',
      },
      CircleSync: {
        uri: process.env.CIRCLE_SYNC_APP_MONGO_URI,
        dbName: 'CircleSyncDB',
      },
      NestWave: {
        uri: process.env.NEST_WAVE_APP_MONGO_URI,
        dbName: 'NestWaveDB',
      },
      BelugaPay: {
        uri: process.env.BELUGA_PAY_APP_MONGO_URI,
        dbName: 'BelugaPayDB',
      }
      
    };
    if (!configs[appName]) {
      throw new Error(`Invalid app name: ${appName}`);
    }
    return configs[appName];
  };
  