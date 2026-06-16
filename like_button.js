'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            // return <div>This is a static text content.</div>;
            // return (
            //     <h1>I am the child!{window.WebApp.initData}</h1>
            // );
            return `You liked this.${window.WebApp.platform}`;
        }

        return e(
            'button',
            {onClick: () => this.setState({liked: true})},
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);