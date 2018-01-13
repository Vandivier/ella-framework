import { ItemType } from '../domain/ItemType';

/**
 * Item domain Class for USA4.
 * 
 */
export class Item {

    private _id: number;
    private _creatorId: number;
    private _title: string;
    private _content: string;
    private _type: ItemType;

    static genId: number = 0;
    isContentVisible = false;

    constructor(title: string, content: string, type: ItemType) {
        this._title = title;
        this._content = content;
        this._type = type;
        this._creatorId = 1;
        this._id = Item.genId++;
    }

    toString() {
        return this._id + ' ' + this._title + ' ' + this._content;
    }


    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get creatorId(): number {
        return this._creatorId;
    }

    public set creatorId(value: number) {
        this._creatorId = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get content(): string {
        return this._content;
    }

    public set content(value: string) {
        this._content = value;
    }

    public get type(): ItemType {
        return this._type;
    }

    public set type(value: ItemType) {
        this._type = value;
    }

}