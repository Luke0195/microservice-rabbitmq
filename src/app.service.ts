import { Injectable } from '@nestjs/common'

export type Account = {
  name: string
  email: string
  password: string
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  createAccount(): Account {
    return {
      name: 'any_name',
      email: 'any_mail@mail.com',
      password: crypto.randomUUID(),
    }
  }
}
