import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CheckoutsModule } from './checkouts/checkouts.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Checkout } from './checkouts/entities/checkout.entity'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: [Checkout],
    }),
    CheckoutsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
