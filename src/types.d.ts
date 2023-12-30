export interface ModalTypes{
  select: string;
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