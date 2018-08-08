import React from 'react';

export Function FormTitle(props) {
    const {classname, text} = props;
    return (
        <h1 className={`${props.classname} form-title`}>{text}</h1>
    )
}
