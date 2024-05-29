// eslint-disable-next-line no-undef
const {env} = process;
export const CONFIG = {
    PORT:env.PORT,
    DATABASE_USER:env.DATABASE_USER,
    DATABASE_PASSWORD:env.DATABASE_PASSWORD,
    DATABASE_NAME:env.DATABASE_NAME
}