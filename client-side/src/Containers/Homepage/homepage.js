import React from 'react';
import UserForm from '../../Components/Form/Form'
import Toast from '../../Components/Toast/Toast'
import UseTable from '../../Components/List/Table'

class Homepage extends React.Component {
  state = {
    usersInfo: [],
  }

  handleSubmit = userInfo => {
    this.setState({ usersInfo: [...this.state.usersInfo, userInfo] })
  }

  render() {
    const usersInfo = [
      {
        firstName: 'Charlie',
        lastName: 'Janitor',
        country: 'Portugal',
        birthdayDate: 'ola'
      },
      {
        firstName: 'Bárbara',
        lastName: 'Inês',
        country: 'Portugal',
        birthdayDate: 'miau'
      },
      {
        firstName: 'Manuel',
        lastName: 'Alves',
        country: 'France',
        birthdayDate: 'miau'
      },
    ]
    
    return (
      <div className="container">
        <UserForm handleSubmit={this.handleSubmit} />
        <Toast />
        <UseTable usersData={this.state.usersInfo} />
      </div>
    )
  }
}

export default Homepage;