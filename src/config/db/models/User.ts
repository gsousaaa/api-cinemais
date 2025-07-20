import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Favorite } from './Favorite';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'name', type: 'varchar'})
  name: string;

  @Column({ name: 'email', unique: true, type: 'varchar' })
  email: string;

  @Column({name: 'password', type: 'varchar'})
  password: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];
}
