'use strict';

const e = React.createElement;

class MinionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mins: 0 };
    }

    render() {
        return e(
            'button',
            { onClick: () => this.setState(prevState => {
                return {mins: prevState.mins + 1}
            }) },
            '(React Button) Number of minions: ' + this.state.mins
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(MinionButton), domContainer);