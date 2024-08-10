// export interface IRegisterInput {
//   name: "email" | "username" | "password";
//   placeholder: string;
//   type: string;
//   validation: {
//     required?: boolean;
//     minLength?: number;
//     pattern?: RegExp;
//   };
// }
export interface IDataType {
  id: number;
  name: string;
  isNew: boolean;
  discount: (string | number) ;
  evaluation: number;
  price: number;
  picture: string;
  category: string;
  details: string;
}

export interface IFilter {
  filter:string;
  num:string | null;
  data:{
    id:number,
    name?:string,
    color?:string,
    num:number
  }[] | null;
}
export interface ICategories {
  id:number;
  name:string;
  img:string;
  num:string;
}