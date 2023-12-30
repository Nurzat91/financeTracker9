export interface AddSelect{
  date: string;
  type: string;
  category: string;
  amount: string;
}

export interface SelectTypes {
  type:string;
  name:string;
}

export interface GetCategories {
  id: string;
  name: string;
  type: string;
}

export interface GetList {
  [id: string]: GetCategories;
}

export interface GetAddSelect {
  [id: string]: AddSelect;
}

export interface TransactionsTypes{
  id: string;
  date: string;
  category: string;
  amount: string;
}

export interface ApiTransactions {
  [id: string]: TransactionsTypes;
}

