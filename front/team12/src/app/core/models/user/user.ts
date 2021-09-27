export interface IUser {
    name: string;
    email: string;
    description: string;
    linkedin: string;
    password: string;
    country: string;
    repository?: string;
    site?: string;
    _id?: string;
}

export class User implements IUser {
    name: string;
    email: string;
    description: string;
    linkedin: string;
    password: string;
    country: string;
    repository?: string;
    site?: string;
    _id?: string;

    constructor(user: IUser) {
        this.name = user.name;;
        this.email = user.email;
        this.description = user.description;
        this.password = user.password;
        this.linkedin = user.linkedin;
        this.country = user.country;
        this.repository = user.repository;
        this.site = user.site;
        this._id = user._id;
    }
}