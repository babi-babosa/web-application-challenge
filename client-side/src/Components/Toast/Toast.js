import React from 'react';
import { messageService } from '../../Services/messaging';

class Toast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        // subscribe to home component messages
        this.subscription = messageService.getMessage().subscribe(message => {
            if (message) {
                // add message to local state if not empty
                this.setState({ messages: [...this.state.messages, message] });
            } else {
                // clear messages when empty message received
                this.setState({ messages: [] });
            }
        });
    }

    componentWillUnmount() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                {messages.map((message, index) =>
                    <div key={index} className="alert alert-success">{message.text}</div>
                )}
            </div>
        );
    }
}

export default Toast ;
