import React from 'react';
import { messageService } from '../../Services/messaging';
import { AnimateOnChange } from 'react-animation'
import './NotificationComponent.css';

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        this.subscription = messageService.getMessage().subscribe(message => {
            if (message) {
                this.setState({ message: message });
            }
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                {
                    message !== '' &&
                    <AnimateOnChange
                        animationIn="bounceIn"
                        animationOut="bounceOut"
                        durationOut={200}
                    >
                        <div className="alert alert-success Notification-information">{message.text}</div>
                    </AnimateOnChange>
                }
            </div>
        );
    }
}

export default Notification ;
