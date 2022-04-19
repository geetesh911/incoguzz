class Config {
  private readonly configsData = {
    env: process.env.NODE_ENV,
    dbConfig: {
      host: "localhost",
      database: "mongoose",
      port: 27017,
      connectionString:
        "mongodb+srv://admin:admin@node-app.ta6ie.mongodb.net/node-app?retryWrites=true&w=majority",
    },
    secretKey: process.env.SECRET_KEY,
    mailConfig: {
      username: "geetesh.pillarplus@gmail.com",
      password: "gee/2000119",
      sendInBlueApiKey: process.env.SENDINBLUE_API_KEY,
    },
    cryptrSecretKey: process.env.CRYPTR_SECRET_KEY,
    googleConfig: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
    log: {
      format: "dev",
      dir: "../logs",
    },
    cors: {
      origin: true,
      credentials: true,
    },
    azure: {
      azureConnectionString: process.env.AZURE_CONNECTION_STRING,
      containerName: "incoguzz",
      storageAccountName: "incoguzz",
      storageSharedKey: process.env.AZURE_SHARED_KEY,
      imagesBaseUrl: "https://incoguzz.blob.core.windows.net",
    },
    cloudinary: {
      cloudName: "geeteshpp",
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      url: process.env.CLOUDINARY_URL,
    },
  };

  public get<T = any>(key: string): T {
    const keyArr = key.split(".");
    let currentConfigValue = this.configsData;

    keyArr.forEach(keyValue => {
      currentConfigValue = currentConfigValue[keyValue];
    });
    return currentConfigValue as any;
  }
}

const config = new Config();
export default config;
