import React from 'react';
import { 
  FaHandPointRight,
  FaHandPointLeft,
} from 'react-icons/fa';

class Story extends React.Component {
	state = {
	  error: null,
	  loading: true,
	};

	getTime(time) {
	  const date = new Date(0);

	  date.setUTCSeconds(time);
	  
	  return date.toDateString();
	}

	render() {
	  if (this.props.story === null) {
	    return null;
	  }
		
	  return (
	    <div className="story" data-title={this.props.story.title}>
	      <a href={this.props.story.url} target="_blank" rel="noopener noreferrer">
	        <li className="list-group-item">
	          <div className="row">
	            <div className="col-8 title justify-content-center align-self-center">
	              <h5>
	                {this.props.story.title}
	              </h5>
	            </div>
	            <div className="col-4 information">
	              <p>                  
	                <FaHandPointRight
	                  style={{
	                    marginRight: '5px',
	                  }}
	                />
	                {this.props.story.score}
	                <FaHandPointLeft
	                  style={{
	                    marginLeft: '5px',
	                  }}
	                />
	              </p>
	              <p>{this.getTime(this.props.story.time)}</p>
	            </div>
	          </div>
	        </li>
	      </a>
	    </div>
	  );
	}
}

export default Story;
