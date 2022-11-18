import React, { Component } from 'react'
import axios from 'axios';
import "./form.css"
import Display from './Display';
import { Link } from "react-router-dom"
class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      dept: "",
      email: "",
      number: "",
      address: "",
      isSuccess: false,
      message: "",
      messageColor: ""
    }
  }
  onSubmit = async (event) => {
    event.preventDefault();

    const newStudentData = {
      // id: uuid(),
      name: this.state.name,
      email: this.state.email,
      dept: this.state.dept,
      number: this.state.number,
      address: this.state.address,

    };
    console.log(newStudentData);
    const responce = await axios.post("http://localhost:5000/list", newStudentData)

    this.setState({ isSuccess: responce.data.isSuccessful })
    if (responce.data.isSuccessful) {
      this.setState({ message: `Thanks You! ${this.state.name} for Showing Intrest` })
      this.setState({ messageColor: "btn btn-success" })
    }
    else {
      this.setState({ message: "Opps! Something went Wrong" })
      this.setState({ messageColor: "btn btn-danger" })
    }

  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  componentDidMount() {
    if (this.state.isSuccess) {
      this.setState({ isSuccess: false })
      document.getElementById("link").click();

    }
  }
  render() {
    return (
      <div className='container con'>
        <form onSubmit={this.onSubmit}>
          <div>
            Name: <input placeholder='eg:Shashi' type="text" name="name" onChange={(e) => this.onChange(e)} required />
          </div>
          <div>
            Department: <input placeholder='Computer science' type="text" name="dept" onChange={(e) => this.onChange(e)} required />
          </div>
          <div>
            Email: <input placeholder='shashiabc@gmail.com' type="email" name="email" onChange={(e) => this.onChange(e)} required />
          </div>
          <div>
            Mobile: <input placeholder='970XXXXX' type="text" name="number" onChange={(e) => this.setState({ number: e.target.value })} required />
          </div>
          <div>
            Address: <textarea placeholder='ex:-near ramraj' type="text" name="address" onChange={(e) => this.setState({ address: e.target.value })} required />
          </div>
          <div>
            <button type="submit" className="btn btn-success mt-2" style={{ backgroundColor: "green" }}>
              submit
            </button>
          </div>

        </form>
        <div className="py-5 mx-2 text-center">

          <h5 className={this.state.messageColor}>{this.state.message}</h5>
          <Link to="/" className='btn btn-success'>Student Data</Link>
        </div>

      </div>
    )
  }
}

export default Form