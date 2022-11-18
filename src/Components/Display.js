import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DiplayTd from './DiplayTd'
import { v4 as uuid } from 'uuid';
import "./display.css"
export class Display extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studentList: [
        {
          name: "shashi",
          dept: "cs",
          email: "shashi@gmail.com",
          number: "9701941724",
          address: "57657"
        }
      ]
    }
  }
  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/stu")

    console.log(res.data)
    this.setState({ studentList: res.data })
  }
  render() {
    const { studentList } = this.state
    return (

      <div className='container'>
        <table className='table'>
          <thead>
            <tr><h1>Student List</h1></tr>

          </thead>

          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Department</th>
              <th>Address</th>
            </tr>
            {studentList.map((item) => {
              return <DiplayTd key={uuid()} student={item} />
            })}
          </tbody>
        </table>
        <div className='add'>
          <div>
            <h1 className='mt-1'>Add New Student: </h1>
            <Link to="/add" className='btn btn-outline-info stretched-link m-1'>
              +
            </Link>
          </div>
        </div>

      </div>


    )
  }
}

export default Display