import { hashSync } from 'bcryptjs'

class Encrypter {
  encrypt(password: string) {
    const hashedPassword = hashSync(password, 8)

    return hashedPassword
  }
}

export { Encrypter }
