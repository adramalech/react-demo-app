export const isDevelopmentEnvironment = (): boolean => process.env.NODE_ENV === 'development'

export const isProductionEnvironment = (): boolean => process.env.NODE_ENV === 'production'

export const isTestEnvironment = (): boolean => process.env.NODE_ENV === 'test'