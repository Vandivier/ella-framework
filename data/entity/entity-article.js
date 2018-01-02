// TODO: autosynced create and last updated time stamps

import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sTitle: string;

    @Column()
    sContent: string;

}