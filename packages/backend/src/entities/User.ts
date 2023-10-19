import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, Relation } from 'typeorm';
import type { Token } from './Token';

@Entity({
  name: 'users'
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany('Token', 'user')
  tokens: Relation<Token[]>;
}
