import React from 'react'

class MusicContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            music: []
        };
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({music: data}))
    }

    render(){
        return(
            <div>
               <h1>Hello world</h1>
            </div>
        );
    }
}

export default MusicContainer;