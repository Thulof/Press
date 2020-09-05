import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    componentDidMount(): void {
        console.log('Debug Mode + 1');
    }
    render() {
        return (
            <div>
                这里是首页
            </div>
        )
    }
}

export default Home;