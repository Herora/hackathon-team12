import { User } from "../user/user";

export interface IBootcamp {
    title?: string;
    description?: string;
    empresa?: User;
    _id?: string;
    edit?: boolean;
    empresaid?: string;
    email?: string;
    users?: string[] | User[];
}

export class Bootcamp implements IBootcamp {
    _id?: string;
    title?: string;
    description?: string;
    empresa?: User;
    edit?: boolean;
    empresaid?: string;
    email?: string;
    users?: string[] | User[];
    constructor(bootcamp: IBootcamp) {
        this._id = bootcamp._id;
        this.title = bootcamp.title;
        this.description = bootcamp.description;
        this.empresa = bootcamp.empresa;
        this.edit = bootcamp.edit;
        this.users = bootcamp.users;
    }
}