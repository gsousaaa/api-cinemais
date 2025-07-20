import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Favorite } from './Favorite';
import { MediaType } from '@/types/media';

@Entity('medias')
export class Media {
    @Column({name: 'id', type: 'uuid'})
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'title', type: 'varchar' })
    title: string;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @Column({ name: 'type', type: 'enum', enum: ['movie', 'series'] })
    type: MediaType;

    @Column({ name: 'release_year', type: 'int' })
    releaseYear: number;

    @Column({ name: 'genre', type: 'varchar' })
    genre: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @OneToMany(() => Favorite, (favorite) => favorite.media)
    favorites: Favorite[];
}
