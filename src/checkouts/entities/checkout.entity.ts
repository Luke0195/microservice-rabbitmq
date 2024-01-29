import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
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
