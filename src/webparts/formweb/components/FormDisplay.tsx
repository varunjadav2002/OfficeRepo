import * as React from 'react';
// import styles from './Formweb.module.scss';
import { IFormDisplayProps } from './IFormDisplayProps';



export default class FormDisplay extends React.Component<IFormDisplayProps> {



  constructor(props: IFormDisplayProps) {
    super(props);

  }

  public render(): React.ReactElement<IFormDisplayProps> {

    return (
      <>
        <h2>Display Form</h2>
        {this.props.userObj.map((val:any) => {
          return <><p>{val.fname}</p><p>{val.lname}</p><p>{val.mobile}</p><p>{val.email}</p></>
        })}
        
      </>
    );
  }
}
