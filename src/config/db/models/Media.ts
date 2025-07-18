import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Favorite } from './Favorite';
import { MediaType } from '@/types/media';

@Entity('medias')
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: ['movie', 'series'] })
  type: MediaType;

  @Column({ name: 'release_year' })
  releaseYear: number;

  @Column()
  genre: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => Favorite, (favorite) => favorite.media)
  favorites: Favorite[];
}
