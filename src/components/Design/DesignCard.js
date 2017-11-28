import React from "react";
import ImageCarousel from "./Card/ImageCarousel";
import Tag from "./Card/Tag";
import CommentsContainer from "./Card/CommentsContainer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LikeButton from "../FormComponents/LikeButton";
import { bindActionCreators } from "redux";
import { addLike, minusLike, fetchDesign } from "../../actions/designs";
import { addLikeAPI, minusLikeAPI } from "../../services/index";

class DesignCard extends React.Component {
  componentDidMount() {
    this.props.fetchDesign(this.props.designId);
    console.log("hit componentDidMount THIS ONE");
  }

  handleLikeButtonClick = clicked => {
    const userId = this.props.userId;
    const designId = this.props.designId;
    if (!clicked) {
      this.props.addLike(userId, designId);
      addLikeAPI(userId, designId);
    } else {
      this.props.minusLike(userId, designId);
      minusLikeAPI(userId, designId, 1);
    }
  };
  render() {
    const designId = this.props.designId;
    const designCheck = this.props.design;
    console.log(designCheck, "design check");
    const showDesign = this.props.design ? (
      <ul>
        <li>
          <img
            src={this.props.design.creator.avatar}
            width="100px"
            height="100px"
            alt=""
          />
          {this.props.design.title}
        </li>
        <li>
          <ImageCarousel
            images={this.props.design.images}
            number={this.props.design.images.length}
          />
        </li>
        <li>Description: {this.props.design.description}</li>
        <li>Link: {this.props.design.url}</li>
        <li>Code: {this.props.design.code}</li>
        <LikeButton
          likes={this.props.likes.length}
          onLikeButtonClick={this.handleLikeButtonClick}
          clicked={this.props.design.likes.some(
            like => like.liker_id === parseInt(this.props.userId)
          )}
        />
        <li>
          Tags:{" "}
          {this.props.design.tags.map(tag => (
            <Tag text={tag.text} key={tag.id} />
          ))}
        </li>
        <CommentsContainer
          designId={designId}
          userId={this.props.userId}
          commentsLength={this.props.design.comments.length}
        />
      </ul>
    ) : null;
    return (
      <div className="card-modal">
        <div className="modal-content design">
          <Link to="/designs">&times;</Link>
          {showDesign}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const design = state.designs.designs[ownProps.designId];
  console.log("in mstp");
  if (design && design["likes"]) {
    return { design, likes: design.likes };
  } else {
    return { design: null, likes: null };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addLike, minusLike, fetchDesign }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignCard);
