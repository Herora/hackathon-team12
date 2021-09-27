import { User } from "../user/user";

export interface IBootcamp {
    title: string;
    description?: string;
    empresa?: User;
    _id?: string;
    edit?: boolean;
    empresaid?: string;
}

export class Bootcamp implements IBootcamp {
    title: string;
    description?: string;
    empresa?: User;
    _id?: string;
    edit?: boolean;
    empresaid?: string;
    constructor(login: IBootcamp) {
        this._id = login._id;
        this.title = login.title;
        this.description = login.description;
        this.empresa = login.empresa;
        this.edit = login.edit;
    }
}