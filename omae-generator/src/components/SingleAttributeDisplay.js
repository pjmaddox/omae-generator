import React from 'react';

const SingleAttributeDisplay = (props) => {
    return (
        <div className="singleAttributeContainer row">
            <label className="col-sm-6 col-md-4">{props.attributeAbbreviation}</label>
            <input type="textbox" value={props.attributeValue} className=""/>
            <div className="attributeButtonContainer col-sm-2">
                <div className="row">
                    <button onClick={props.onDecrementClick} className="col-sm-12 decrementButton">-</button>
                </div>
                <div className="row">
                    <button onClick={props.onIncrementClick} className="col-sm-12 incrementButton">+</button>
                </div>
            </div>
        </div>
    );  
};

export default SingleAttributeDisplay;