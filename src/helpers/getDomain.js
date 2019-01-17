export const getDomain = () => {
  if (isProduction()) {
    return "https://eurekaplatform.herokuapp.com/";
  }
  return "http://localhost:8080";
};

export const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
