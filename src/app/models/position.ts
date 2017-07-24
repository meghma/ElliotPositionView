export class Position {
    securityId: number;
    securityName: string;
    tradeCount: number;
    avgPrice: number;
    quantity: number;


    constructor () {

    }

    public calcMarketValue(): number {
        return this.avgPrice * this.quantity;
    }

}
