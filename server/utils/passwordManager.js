import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'
import crypto from 'crypto'

const scryptAsync = promisify(scrypt)

export class PasswordManager {
  static async toHash(password) {
    const salt = randomBytes(16).toString('hex')
    const buf = await scryptAsync(password, salt, 64)

    return `${buf.toString('hex')}.${salt}`
  }

  static async compare(storedPassword, suppliedPassword) {
    const [hashedPassword, salt] = storedPassword.split('.')
    const buf = await scryptAsync(suppliedPassword, salt, 64)

    return buf.toString('hex') === hashedPassword
  }
}
