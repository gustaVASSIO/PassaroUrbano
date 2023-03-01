export class Offer{
    constructor(
        public id:number,
        public category:string,
        public title:string,
        public description:string,
        public advertiser: string,
        public value:number,
        public constrast: boolean,
        public images:Array<Object>

    ){}
        
}