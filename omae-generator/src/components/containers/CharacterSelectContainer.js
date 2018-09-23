import React from "react";
import { connect, dispatch } from "react-redux";
import CharacterSelect from "../CharacterSelect.js";
import CharacterTab from "../characterTab.js";
import { selectCharacter } from "../../actions/actions.js";
import _ from 'lodash';

const getChildren = (chars, selectedId) => {
    _.map(chars, (x, index) => {
        <CharacterTab 
            name={x.name}
            onClick={() => dispatch(selectCharacter(x.id))}
            isSelected={x.id==selectedId}
        />
    });
};

const mapStateToProps = state => {
    return {
        children: getChildren(state.characters, state.selectedCharacter)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //onClick: (id) => dispatch(selectCharacter(id))
    };
};

const CharacterSelectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterSelect);

export default CharacterSelectContainer;