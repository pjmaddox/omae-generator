import { connect } from "react-redux";
import test_addNewCharacter from "../test_addNewCharacter.js";
import { addNewCharacter } from "../../actions/actions.js";

const getOnClick = (dispat) => {

};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => { dispatch(addNewCharacter()); }
    };
};


export default connect(
    null,
    test_addNewCharacter
)(test_addNewCharacter);
