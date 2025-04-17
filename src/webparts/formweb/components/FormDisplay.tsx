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
        <h4>{this.props.firstname}</h4>
        <h4>{this.props.lastName}</h4>
        <h4>{this.props.mobile}</h4>
        <h4>{this.props.email}</h4>
      </>
    );
  }
}
