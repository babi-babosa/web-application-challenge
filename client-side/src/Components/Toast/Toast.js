import React from 'react';
import { messageService } from '../../Services/messaging';

class Toast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        // subscribe to home component messages
        this.subscription = messageService.getMessage().subscribe(message => {
            if (message) {
                // add message to local state if not empty
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
                    message != '' &&
                    <div className="alert alert-success">{message.text}</div>
                }
            </div>
        );
    }
}

export default Toast ;
