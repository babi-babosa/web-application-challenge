import React from 'react';
import UserForm from '../../Components/Form/Form';
import Notification from '../../Components/Notification/Notification';
import UseTable from '../../Components/List/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homepage.css';

class Homepage extends React.Component {
  state = {
    usersInfo: []
  }

  handleSubmit = userInfo => {
    this.setState({ 
      usersInfo: [...this.state.usersInfo, userInfo]
    })
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

        <Notification />
      </div>
    )
  }
}

export default Homepage;