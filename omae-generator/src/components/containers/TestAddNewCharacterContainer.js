import { connect } from "react-redux";
import TestAddNewCharacter from "../TestAddNewCharacter.js";
import { addNewCharacter } from "../../actions/actions.js";

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => { dispatch(addNewCharacter()); }
    };
};


export default connect(
    null,
    mapDispatchToProps
)(TestAddNewCharacter);
