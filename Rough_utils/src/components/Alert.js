import React from 'react'

function Alert(props) {
    const capitalize = (word) => {     //Function to capitalize the first letter of word
        let newword = word.toLowerCase();
        return newword.charAt(0).toUpperCase() + newword.slice(1);
    }
    return (
        <div style={{ height: '12px' }}>
            {/*  A simple convention method to select between these two terms in javascript  using  && */}
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}:</strong> {props.alert.mssg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}

export default Alert