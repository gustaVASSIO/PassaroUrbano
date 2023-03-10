import { ItemCarshop } from "./carshop.model";

export class Order{
    constructor(
        public adress: string,
        public number: string,
        public complement: string,
        public payment_type: string,
        public itens: ItemCarshop[]
    ){}
}