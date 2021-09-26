export interface IUser {
    name: string;
    email: string;
    description: string;
    linkedin: string;
    password: string;
    country: string;
    repository?: string;
    site?: string;
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

    constructor(user: IUser) {
        this.name = user.name;;
        this.email = user.email;
        this.description = user.description;
        this.password = user.password;
        this.linkedin = user.linkedin;
        this.country = user.country;
        this.repository = user.repository;
        this.site = user.site;
    }
}