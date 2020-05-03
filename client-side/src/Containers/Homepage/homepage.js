import React from 'react';
import UserForm from '../../Components/Form/Form'
import Toast from '../../Components/Toast/Toast'
import UseTable from '../../Components/List/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Homepage extends React.Component {
  state = {
    usersInfo: [],
  }

  handleSubmit = userInfo => {
    this.setState({ usersInfo: [...this.state.usersInfo, userInfo] })
  }

  render() {    
    return (
      <div className="container">
         <Row>
            <Col>
                <UserForm handleSubmit={this.handleSubmit} />
            </Col>
            <Col>
                <UseTable usersData={this.state.usersInfo} />
            </Col>
        </Row>
        <Toast />
      </div>
    )
  }
}

export default Homepage;