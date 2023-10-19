import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'todos'
})
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column({
    length: 32
  })
  title: string;

  @Column({
    length: 128
  })
  description: string;

  @Column()
  isComplete: boolean;

  @Column()
  isPrivate: boolean;
}
