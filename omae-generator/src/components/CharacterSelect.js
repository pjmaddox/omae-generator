import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterSelect extends Component {
    render() {
        let thing = _.map(chars, (x, index) => {
            <CharacterTab 
                key={x.id}
                name={x.name}
                onClick={() => (onTabClick(x.id))}
                isSelected={x.id==selectedId}
            />
        });
        return (
            <div className="characterSelectContainer">
                { this.props.children }
            </div>
        );
    }
};

CharacterSelect.propTypes = {
    chars: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired
    })),
    onTabClick: PropTypes.func.isRequired,
    characterName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired
};