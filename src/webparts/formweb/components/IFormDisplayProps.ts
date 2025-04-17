import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IFormDisplayProps {
  context:WebPartContext
  submitData:boolean,
  firstname:string;
  lastName:string;
  mobile:any;
  email:any; 
}
