module.exports = {
  importOrder: [
    '^@/apis/(.*)$',
    '^@/common/(.*)$',
    '^@/pages/(.*)$',
    '^@/constants/(.*)$',
    '^@/middlewares/(.*)$',
    '^@/models/(.*)$',
    '^@/store/(.*)$',
    '^@/styles/(.*)$',
    '^@/types/(.*)$',
    '^@/utils/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  singleQuote: true,
  semi: false,
}
