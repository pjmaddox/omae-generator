import React from "react";
import { connect } from "react-redux";
import CharacterSelect from "../CharacterSelect.js";
import CharacterTab from "../characterTab.js";
import { selectCharacter } from "../../actions/actions.js";
import _ from 'lodash';

const getChildren = (chars, selectedId) => {
    return _.map(chars, (x) => {
        return {
            id:x.id,
            name:(x.name == "")? "New Character" : x.name,
            isSelected:x.id==selectedId
        };
    });
};

const mapStateToProps = state => {
    return {
        chars: getChildren(state.characters, state.selectedCharacter)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTabClick: (id) => dispatch(selectCharacter(id))
    };
};

const CharacterSelectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterSelect);

export default CharacterSelectContainer;