import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Relation
} from 'typeorm';
import type { User } from './User';

@Entity({
  name: 'tokens'
})
export class Token extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'refresh_token' })
  refreshToken: string;

  @ManyToOne('User', 'tokens')
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id'
  })
  user: Relation<User>;
}
