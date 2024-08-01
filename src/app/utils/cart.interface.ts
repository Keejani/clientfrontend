export interface cartItems {
    status : number;
    message : string;
    cartItems : Array<CartItem>
}

export interface CartItem {
    id: string;
    cartId: string;
    itemId: string;
    quantity: number;
    measure: Measurement;
  }

  export interface Item {
  id: string;
  name: string;
  pictureUrl: string;
  description: string;
  itemPurchaseCategory: ItemPurchaseCategory;
  category: MaterialCategory;
  measure: Measurement;
  price: number;
  paid: boolean;
}


export enum ItemPurchaseCategory {
    BID,
    BUY
  }
  
  export enum MaterialCategory {
    METAL,
    PLASTIC,
    WOOD,
    GLASS
  }
  
  export enum Measurement {
    KILOGRAM,
    LITER,
    PIECE,
    TONS,
    BAGS,
    KILO,
    CONTAINER,
    GRAMS,
  }