interface IProducts {
  id: number;
  name: string;
  price: number;
}

export interface IExpenses {
  id: number;
  name: string;
  nominal: number;
  category: string;
  createdAt: string;
  userId: number;
}

export interface Data {
  products: IProducts[];
  expenses: IExpenses[];
}
