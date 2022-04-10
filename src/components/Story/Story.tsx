import * as React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import GeneralModal from "../Shared/GeneralModal";
import { openUrl } from "../../utils/helpers";
import { StoryType } from "../../types/types";

const StyledScore = styled(Button)`
  padding: 2px 4px;
  margin-bottom: 5px;
  span {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const Story = ({ story }: { story: StoryType }) => {
  const [show, setShow] = React.useState(false);

  const getTime = (time: number) => {
    const date = new Date(0);
    date.setUTCSeconds(time);

    return date.toDateString();
  };

  const onClickStory = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (!story.url) {
      setShow(!show);
    } else {
      openUrl(story.url);
    }
  };

  const onClickViewOnHN = (id: string) =>
    openUrl(`https://news.ycombinator.com/item?id=${id}`);

  if (story === null) {
    return null;
  }

  return (
    <>
      <div className="story" data-title={story.title}>
        <a onClick={onClickStory}>
          <li className="list-group-item">
            <div className="row">
              <div className="col-9 title justify-content-center align-self-center">
                <h5>{story.title}</h5>
              </div>
              <div className="col-3 information">
                <StyledScore>
                  <span>{story.score}</span>
                  <FaThumbsUp />
                </StyledScore>
                <p>{getTime(story.time)}</p>
              </div>
            </div>
          </li>
        </a>
      </div>
      {show && (
        <GeneralModal
          // @ts-ignore
          body={story.text}
          title={story.title}
          show={show}
          onClose={() => setShow(false)}
          // @ts-ignore
          successAction={() => onClickViewOnHN(story.id)}
          successActionText="View on HN"
        />
      )}
    </>
  );
};

export default Story;
