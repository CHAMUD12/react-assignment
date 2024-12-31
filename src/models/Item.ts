export class Item{
    item_code:string;
    category : string;
    unit_price : string;
    qty : string;


    constructor(item_code:string, category : string,unit_price : string,qty : string,) {
        this.item_code = item_code;
        this.category = category;
        this.unit_price = unit_price;
        this.qty = qty;
    }
}