export class Position {
    constructor (
        public securityId: number,
        public securityName: string,
        public tradeCount: number,
        public avgPrice: number,
        public quantity: number
    ){}

    public get marketValue(): number {
        return this.avgPrice * this.quantity;
    }
}
