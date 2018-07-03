import React from 'react';
import GetQuiz from './GetQuiz';
import ShowQuiz from './ShowQuiz';
import logo from '../../img/logo.png';

import 'jquery';

export default class App extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            url: '',
            titleBanner: ''
        }
    }

    urlAPI(url){
        this.setState({ url });
    }

	render () {
		return (
            <div>
                {
                    (this.state.url) ? 
                        <ShowQuiz data={this.state.url}/>
                        : 
                        <GetQuiz onSelect={this.urlAPI.bind(this)}/>    
                }
            </div>
		);
	}
}
