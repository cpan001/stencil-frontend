import React from "react";
import ImageCarousel from "./Card/ImageCarousel";
import Tag from "./Card/Tag";
import CommentsContainer from "./Card/CommentsContainer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LikeButton from "../FormComponents/LikeButton";
import ProfileImage from "../FormComponents/ProfileImage";
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
    const showDesign = this.props.design ? (
      <div className="design-card-main">
        <div className="design-title-area">
          <div className="user-image">
            <ProfileImage image={this.props.design.creator.avatar} />
          </div>
          <div className="design-title">
            <p>{this.props.design.title}</p>
            <p>By {this.props.design.creator.name}</p>
          </div>
        </div>
        <div className="design-images-actions">
          <ImageCarousel
            images={this.props.design.images}
            number={this.props.design.images.length}
          />

          <div className="design-actions">
            <LikeButton
              likes={this.props.likes.length}
              onLikeButtonClick={this.handleLikeButtonClick}
              clicked={this.props.design.likes.some(
                like => like.liker_id === parseInt(this.props.userId, 10)
              )}
            />
            <a href={this.props.design.url} target="_blank">
              Site Link
            </a>
            <a href={this.props.design.code} target="_blank">
              Code Link
            </a>
          </div>
        </div>
        <div className="last-design-section">
          <p>Description: {this.props.design.description}</p>
          <p>
            Tags:{" "}
            {this.props.design.tags.map(tag => (
              <Tag text={tag.text} key={tag.id} />
            ))}
          </p>
          <CommentsContainer
            designId={designId}
            userId={this.props.userId}
            commentsLength={this.props.design.comments.length}
          />
        </div>
      </div>
    ) : null;
    return (
      <div className="card-modal">
        <Link to="/designs">&times;</Link>
        <div className="modal-content design">{showDesign}</div>
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
