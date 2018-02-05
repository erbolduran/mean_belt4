export class Bid {
    bet: number;
    product: string;
    users: any [];
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.bet = 0;
        this.product = '';
        this.users = [];
    }
}
