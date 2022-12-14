import { ConnectionOptions, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database') => {
  const defaultOptions = await getConnectionOptions()

  return createConnection({
    ...defaultOptions,
    host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
  } as ConnectionOptions)
}
