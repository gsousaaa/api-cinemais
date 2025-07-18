import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { User } from './User';
import { Media } from './Media';

@Entity('favorites')
export class Favorite {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user_id' })
    userId: string

    @Column({ name: 'media_id' })
    mediaId: string

    @ManyToOne(() => User, (user) => user.favorites, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Media, (media) => media.favorites, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'media_id' })
    media: Media;
}
