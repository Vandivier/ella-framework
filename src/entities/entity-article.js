// TODO: autosynced create and last updated time stamps

import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import {Author} from './entity-author';

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sTitle: string;

    @Column()
    sContent: string;

    @ManyToOne(type => Author, author => author.photos)
    author: Author;

}