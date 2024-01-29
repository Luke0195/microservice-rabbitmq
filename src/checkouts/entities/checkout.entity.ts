import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'
import { CheckoutStatus } from '../enums'
@Entity()
export class Checkout {
  @PrimaryGeneratedColumn()
  private id: number
  @Column()
  private total: number
  @Column()
  private status: CheckoutStatus = CheckoutStatus.PENDING
  @CreateDateColumn()
  private created_at: Date
}

@Entity()
export class CheckoutProduct {
  // model responsável por armazenar as informações que serão recebidas de outro microserviço.
  @PrimaryGeneratedColumn()
  private id: number
  @Column()
  private name: string
  @Column()
  private description: string
  @Column()
  private image_url: string
  @Column()
  private product_id: number
}

@Entity()
export class CheckoutItem {
  @PrimaryGeneratedColumn()
  private id: number
  @Column()
  private quantity: number
  @Column()
  private price: number
  @ManyToOne(() => Checkout)
  private checkout: Checkout
  @ManyToOne(() => CheckoutProduct)
  private product: CheckoutProduct
}
