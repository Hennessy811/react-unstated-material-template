
export const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "https://strapi.cskeleto.dev";
