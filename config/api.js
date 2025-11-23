module.exports = ({ env }) => ({
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
    maxAge: 86400000, // 1 day in milliseconds
  },
});