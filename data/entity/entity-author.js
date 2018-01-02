import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import {Article} from './entity-article';

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sName: string;

    @OneToMany(type => Article, article => article.author) // ref: http://typeorm.io/#/undefined/creating-a-many-to-one--one-to-many-relation
    arrArticles: Article[];
}
