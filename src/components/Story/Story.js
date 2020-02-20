import React, { useState } from 'react';
import { 
  FaHandPointRight,
  FaHandPointLeft,
} from 'react-icons/fa';
import GeneralModal from '../Shared/GeneralModal';

const Story = ({
  story
}) => {
  const [show, setShow] = useState(false);

  const getTime = (time) => {
	  const date = new Date(0);

	  date.setUTCSeconds(time);
	  
	  return date.toDateString();
  }

  const onClickStory = (event) => {
    event.preventDefault();

    if (!story.url) {
      setShow(!show);
    } else {
      window.open(
        story.url,
        '_blank',
      ).focus();
    }
  };

  if (story === null) {
    return null;
  }
		
  return (
    <>
      <div className="story" data-title={story.title}>
        <a onClick={onClickStory}>
          <li className="list-group-item">
            <div className="row">
              <div className="col-8 title justify-content-center align-self-center">
                <h5>
                  {story.title}
                </h5>
              </div>
              <div className="col-4 information">
                <p>                  
                  <FaHandPointRight
                    style={{
                      marginRight: '5px',
                    }}
                  />
                  {story.score}
                  <FaHandPointLeft
                    style={{
                      marginLeft: '5px',
                    }}
                  />
                </p>
                <p>{getTime(story.time)}</p>
              </div>
            </div>
          </li>
        </a>
      </div>
      {show &&
        <GeneralModal
          body={story.text}
          title={story.title}
          show={show}
          onClose={() => setShow(false)}
        />
      }
    </>
  );
};

export default Story;
