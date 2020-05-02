import React from 'react';
import UserForm from '../../Components/Form/Form'
import Toast from '../../Components/Toast/Toast'

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <UserForm />
        <Toast />
      </div>
    )
  }
}

export default Homepage;