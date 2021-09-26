export interface IAlertsCustom {
    title: string;
    menssage: string;
}

export class AlertsCustom implements IAlertsCustom {
    title: string;
    menssage: string;
    constructor(alert: IAlertsCustom) {
        this.title = alert.title;
        this.menssage = alert.menssage;
    }
}