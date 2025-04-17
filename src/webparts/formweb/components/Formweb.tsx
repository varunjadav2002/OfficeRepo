import * as React from 'react';
// import styles from './Formweb.module.scss';
import type { IFormwebProps } from './IFormwebProps';
import * as $ from "jquery";
import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import FormDisplay from './FormDisplay';

interface varunState {
  itemList: any;
  formDigest: string;
  FirstName: any;
  LastName: any;
  Mobile:any; 
  Email:any; 
  SubmitButton: any;
  CancelButton: any;
  submitdata: boolean;
  // User: any;
}

export default class Formweb extends React.Component<IFormwebProps, varunState> {

  constructor(props: IFormwebProps) {
    super(props);
    this.state = {
      itemList: [],
      formDigest: "",
      FirstName: "",
      LastName: "",
      Mobile:"",
      Email:"", 
      SubmitButton: "",
      CancelButton: "",
      submitdata: false,
      // User: ""
    }
    this.fetchcontext();
  }
  fetchcontext = () => {

    var obj = this;
    $.ajax({
      url: "https://spcloudbox.sharepoint.com/sites/Sahil_Learning/_api/contextinfo",
      type: "POST",
      headers: {
        accept: "application/json;odata=verbose",
        contentType: "text/xml",
      },
      success: function (data) {
        console.log(data);

        obj.setState({
          formDigest: data.d.GetContextWebInformation.FormDigestValue
        });
      },
      error: function (err: any) {
        console.log(JSON.stringify(err));
      },
    });
    //this.LoadData();
  }
  LoadData = () => {
    const obj = this;
    $.ajax({
      url: "https://spcloudbox.sharepoint.com/sites/Sahil_Learning/_api/contextinfo",
      type: "GET",
      headers: {
        accept: "application/json;odata=verbose",
      },
      success: function (data) {
        obj.setState({
          itemList: data.d.results,
        });
        console.log(data.d.results);
      },
      error: function (error) {
        alert(JSON.stringify(error));
      },
    });
  }

  FirstName = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    this.setState({
      FirstName: newValue,
    });
  };

  LastName = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    this.setState({
      LastName: newValue,
    });

  };

  Mobile = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: any) => {
    this.setState({
      Mobile: newValue,
    })
  };

  Email= (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: any) => {
    this.setState({
      Email: newValue,
    })
  }

  submitButton = () => {
    this.setState({
      submitdata: true
    })

  }


  CancelButton = () => {
    this.setState({
      FirstName: "",
      LastName: "",
      Mobile: "",
      Email: "",
      submitdata: false
    })
  }

  // UserData = () => {
  //   type User = {
  //     FirstName: string;
  //     LastName:  string;
  //   }
  // }


  public render(): React.ReactElement<IFormwebProps> {

    return (
      <>
        <h2>Crud in Form</h2>
        <TextField label="FristName" onChange={this.FirstName} value={this.state.FirstName} />
        <TextField label="LastName" onChange={this.LastName} value={this.state.LastName} />
        <TextField label="Mobile" onChange={this.Mobile} value={this.state.Mobile} />
        <TextField label="Email" onChange={this.Email} value={this.state.Email} />
        {/* <TextField label="LastName" onChange={this.LastName} value={this.state.LastName} /> */}
        <DefaultButton text="SubmitButton" onClick={this.submitButton} />
        <PrimaryButton text="CancelButton" onClick={this.CancelButton} />
        {this.state.submitdata ? <FormDisplay context={this.props.context} submitData={this.state.submitdata} firstname={this.state.FirstName} lastName={this.state.LastName} mobile={this.state.Mobile} email={this.state.Email} /> : <></>}
        {/* <FormDisplay context={this.props.context} submitData={false}  */}
        {/* <div>
          {this.state.submitdata ?
            <p>{this.state.FirstName}</p> : <></>}
        </div> */}
      </>
    );
  }
}
