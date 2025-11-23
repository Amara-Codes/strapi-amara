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
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        getTimeout: 500,
        options: {
          // The time to live in milliseconds. This is the maximum amount of time that an item can be in the cache before it is removed.
          ttl: 3600 * 1000,
          // The maximum number of items before evicting the least recently used items.
          maxSize: 32767,
          // ...
        },
      },
      strategy: /* @type {CachePluginStrategy} */ {
        keysPrefix: "ablv2",
        maxAge: 86400000, // The maximum age of a cached item in milliseconds. Here, it's set to 24 hours.
        debug: false,
        contentTypes: [
          "api::article.article",
          "api::category.category",
          "api::drop.drop",
          "api::beer.beer",
          "api::article.article",
          "api::tag.tag",
        ],
      },
    },
  },
});
