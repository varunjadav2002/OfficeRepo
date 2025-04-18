import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IFormDisplayProps {
  context:WebPartContext
  submitData:boolean,
  userObj: any
}
