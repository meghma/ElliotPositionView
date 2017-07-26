export class Position {
    securityId: number;
    securityName: string;
    tradeCount: number;
    avgPrice: number;
    quantity: number;


    constructor () {
    }

    public get marketValue(): number {
        return this.avgPrice * this.quantity;
    }

}
