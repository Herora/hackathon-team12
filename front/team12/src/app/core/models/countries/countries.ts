export interface ICountry {
    name: string;
    alpha2Code: string;
}

export class Country implements ICountry {
    public name: string;
    public alpha2Code: string;
    constructor(private country: ICountry) {
        this.name = country.name;
        this.alpha2Code = country.alpha2Code;
    }
}