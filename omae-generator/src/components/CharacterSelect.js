import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterSelect extends Component {
    render() {
        return (
            <div className="characterSelectContainer">
                { this.props.children }
            </div>
        );
    }
};

CharacterSelect.propTypes = {
    onTabclick: PropTypes.func.isRequired,
    characterName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired
};