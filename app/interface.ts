export interface simplifiedProduct {
    _id: string;
    price : number;
    name : string;
    imageUrl : string;
    slug : string;
    categoryName : string;
}

export interface fullProduct {
    _id: string;
    price : number;
    name : string;
    images : any;
    slug : string;
    categoryName : string;
    description : string;
}