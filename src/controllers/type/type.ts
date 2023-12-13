interface IProducts { 
    id: number,
    name: string,
    price: number
}

export interface IExpenses { 
    id: number,
    name:string, 
    nominal: number,
    category: string,
    date: string
}


export interface Data { 
    products: IProducts[],
    expenses : IExpenses[]
}
