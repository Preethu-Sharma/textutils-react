import React from 'react'

function Alert(props) {
    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        </div>
    )
}

export default Alert
