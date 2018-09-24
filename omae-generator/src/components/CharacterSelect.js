import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterTab from "../components/characterTab.js";
import _ from "lodash";

export default class CharacterSelect extends Component {
    render() {
        let characterTabs = _.map(this.props.chars, (x, index) => {
            return <CharacterTab 
                key={x.id}
                id={x.id}
                name={x.name}
                onClick={() => (this.props.onTabClick(x.id))}
                isSelected={x.isSelected}
            />
        });
        return (
            <div className="characterSelectContainer">
                {characterTabs}
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
    onTabClick: PropTypes.func.isRequired
};