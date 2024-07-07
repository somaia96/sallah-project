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