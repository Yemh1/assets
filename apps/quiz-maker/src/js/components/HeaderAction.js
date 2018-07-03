import React from 'react';
import 'jquery';

export default class HeaderAction extends React.Component {
	constructor(props){
        super(props);
    }

    handlerDownloadJson(){
        this.props.downloadJson();
    }

    handlerSaveQuiz(){
        this.props.saveQuiz();
    }

    render () {
		return (
            <div className="download-btn">
				<button className="btn btn-primary mr-2" onClick={()=>this.handlerDownloadJson("quiz.json")}>
					<i className="fas fa-download"></i> download progress
				</button>
                <button className="btn btn-primary" onClick={()=>this.handlerSaveQuiz()}>
					<i className="fas fa-download"></i> save
				</button>
            </div>
		);
	}
}
