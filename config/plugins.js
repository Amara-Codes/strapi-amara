module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // Configurazione Redis: Legge TUTTI i dati dalla variabili d'ambiente
  redis: {
    config: {
      connections: {
        default: {
          // 💡 PUNTO CHIAVE: Uso della proprietà 'url' invece di 'connection'
          // per accettare l'URI completo di Redis.
         

          // Se per qualche motivo il provider non supporta 'url' direttamente:
          
          connection: {
            host: env("REDIS_HOST"), 
            password: env("REDIS_PASSWORD"), 
            user: 'default',
            database: 0,
            port: env("REDIS_PORT", 6379),
          },
          
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  // Configurazione del plugin di caching REST
  "rest-cache": {
    config: {
      provider: {
        name: "redis",
        options: {
          max: 32767,
          connection: "default",
        },
      },
      strategy: {
        enableEtagSupport: true,
        logs: true,
        clearRelatedCache: true,
        maxAge: 864000000, // 24 hours
        contentTypes: [
          // Aggiungi tutti i tuoi Content Types
          "api::category.category",
          "api::article.article",
          "api::beer.beer",
          "api::drop.drop",
          "api::gallery.gallery",
        ],
      },
    },
  },
});