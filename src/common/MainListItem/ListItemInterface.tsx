export interface ProductListItemObj {
  item: ProductObj;
  index: number;
}
export interface ProductObj {
  id: string;
  brand: string;
  thumbnail: string;
  title: string;
  price: string;
  description: string;
}
