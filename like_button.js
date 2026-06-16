'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        console.log(1)
        console.log(window.WebApp)
        console.log(2)
        console.log(window.WebApp.platform)
        console.log(3)
        console.log(window.WebApp.initData)
        console.log(4)
        console.log(window.WebApp.initDataUnsafe)
        console.log(5)
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
