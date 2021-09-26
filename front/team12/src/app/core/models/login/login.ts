export interface ILogin {
    email: string;
    password: string;
}

export class Login implements ILogin {
    public email: string;
    public password: string;
    constructor(private login: ILogin) {
        this.email = login.email;
        this.password = login.password;
    }
}