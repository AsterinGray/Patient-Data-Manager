module.exports = {
  importOrder: [
    '^@/apis/(.*)$',
    '^@/constants/(.*)$',
    '^@/middlewares/(.*)$',
    '^@/models/(.*)$',
    '^@/types/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  singleQuote: true,
  semi: false,
}
