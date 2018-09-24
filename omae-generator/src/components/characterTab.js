import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CharacterTab extends Component {
    render() {
        return (
            <a onClick={this.props.onClick} className={"characterTab" + this.props.isSelected? " selectedTab" : ""}>
              {this.props.name}  
            </a>
        );
    }
};

CharacterTab.propTypes = {
    name: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};