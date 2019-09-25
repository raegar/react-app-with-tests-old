import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        
        this.state = { text: "" };
    }

    handleClick() {
        this.setState(this.stateUpdater);
    }

    stateUpdater() {
        return { text: "CLiCKED!" };
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.text || this.props.text}
            </button>
        );
    }
}
