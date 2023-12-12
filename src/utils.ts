export const isDevelopmentEnvironment = (): boolean => {
  return process.env.NODE_ENV === "development";
};

export const isProductionEnvironment = (): boolean => {
  return process.env.NODE_ENV === "production";
};

export const isTestEnvironment = (): boolean => {
  return process.env.NODE_ENV === "test";
};
