import { Offer } from "../shared/offer.model"
export class OfferService{
    public offers: Array<Offer> = [
        {
            id: 1,
            category: "restaurante",
            title: "Super Burger",
            description: "Rodízio de Mini-hambúrger com opção de entrada.",
            advertiser: "Original Burger",
            value: 29.90,
            constrast: true,
            images: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            category: "restaurante",
            title: "Cozinha Mexicana",
            description: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            advertiser: "Mexicana",
            value: 32.90,
            constrast: true,
            images: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            category: "diversao",
            title: "Estância das águas",
            description: "Diversão garantida com piscinas, trilhas e muito mais.",
            advertiser: "Estância das águas",
            value: 31.90,
            constrast: true,
            images: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]
    public getOffers():Array<Offer>{
        return this.offers
    }
    // Utilizando metodo getOffers de forma assíncrona
    public getOffers2():Promise<Array<Offer>>{
        return new Promise((resolve,reject)=>{
            resolve(this.offers)
        })
    }
}