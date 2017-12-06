import React from "react";
import ImageCarousel from "./Card/ImageCarousel";
import Tag from "./Card/Tag";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileImage from "../FormComponents/ProfileImage";
import { bindActionCreators } from "redux";
import { addLike, minusLike, fetchDesign } from "../../actions/designs";
import {
  addLikeAPI,
  minusLikeAPI,
  saveDesigntoProject
} from "../../services/index";
import ProjectFormPlusSubmit from "../Project/ProjectFormPlusSubmit";
import DesignActions from "./Card/DesignActions";

class DesignCard extends React.Component {
  state = {
    projectAddButtonClicked: false
  };

  componentDidMount() {
    this.props.fetchDesign(this.props.designId);
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

  handleProjectAddClick = () => {
    this.setState({ projectAddButtonClicked: true });
  };

  handleProjectSubmit = project => {
    const postData = {
      project: project,
      designId: this.props.designId,
      creatorId: this.props.userId
    };
    saveDesigntoProject(this.props.userId, postData).then(json =>
      this.props.history.push(`/projects/${json.project_id}`)
    );
  };

  componentDidCatch(error, info) {
    this.props.history.push("/designs");
    // logErrorToMyService(error, info);
  }

  render() {
    const showDesign = this.props.design ? (
      <div className="design-card-main">
        <div className="design-title-area">
          <div className="user-image">
            <Link to={`/users/${this.props.design.creator.id}`}>
              <ProfileImage image={this.props.design.creator.avatar} />
            </Link>
          </div>
          <div className="design-title">
            <p>{this.props.design.title}</p>
            <p>By {this.props.design.creator.name}</p>
          </div>
        </div>
        <div className="design-card-second">
          <div className="last-design-section">
            <div className="details">
              <ImageCarousel
                images={this.props.design.images}
                number={this.props.design.images.length}
              />
              <div className="details-description">
                {this.props.design.description}
              </div>
              <div className="details-tags">
                {this.props.design.tags.map(tag => (
                  <Tag text={tag.text} key={tag.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="design-images-actions">
            {this.state.projectAddButtonClicked ? (
              <ProjectFormPlusSubmit
                onProjectSubmit={this.handleProjectSubmit}
              />
            ) : (
              <DesignActions
                likes={this.props.likes.length}
                handleLikeButtonClick={this.handleLikeButtonClick}
                design={this.props.design}
                designId={this.props.designId}
                userId={this.props.userId}
                onProjectAddClick={this.handleProjectAddClick}
              />
            )}
          </div>
        </div>
      </div>
    ) : null;
    return (
      <div className="card-modal">
        <Link
          to="/designs"
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          &times;
        </Link>
        <div className="modal-content design">{showDesign}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const design = state.designs.designs[ownProps.designId];
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
