import React from "react";
import LikeButton from "../../FormComponents/LikeButton";
import CommentsContainer from "./CommentsContainer";
import AddToProjectButton from "./AddToProjectButton";

function DesignActions(props) {
  return (
    <div className="design-actions">
      <LikeButton
        likes={props.likes}
        onLikeButtonClick={props.handleLikeButtonClick}
        clicked={props.design.likes.some(
          like => like.liker_id === parseInt(props.userId, 10)
        )}
      />
      <div className="design-action">
        <a href={props.design.url} target="_blank">
          <i className="material-icons design-card-icons">cloud</i>
          <span>Site Link</span>
        </a>
      </div>

      <div className="design-action">
        <a
          href={props.design.code}
          target="_blank"
          onError={() => alert("Link not valid")}
        >
          <i className="material-icons design-card-icons">settings</i>
          <span>Code Link</span>
        </a>
      </div>
      <AddToProjectButton onProjectAddClick={props.onProjectAddClick} />
      <CommentsContainer
        designId={props.designId}
        userId={props.userId}
        commentsLength={props.design.comments.length}
      />
    </div>
  );
}

export default DesignActions;
