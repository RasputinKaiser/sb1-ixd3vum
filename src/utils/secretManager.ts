export function getSecret(key: string): string | undefined {
  return process.env[key]
}

export function setSecret(key: string, value: string): void {
  if (typeof process !== 'undefined' && process.env) {
    process.env[key] = value
  } else {
    console.warn('Unable to set environment variable. Ensure this is run in a Node.js environment.')
  }
}