import React from "react";

export default function SelectDropdown(props){
    const content = props.content;
    const action = props.action;
    const name = props.name;
    const default_option = props.defaultOption;
    const value = props.def_value;
    const key = props.key;

    if (content.length > 0) {
        return (
            <select name={name} key={key} className="form-control" onChange={action} value={value}>
                {default_option && <option value="">{default_option}</option>}
                {content.map((content, index) =>
                    <option key={index} value={content.id}>{content.name}</option>
                )}
            </select>
        );
    } else {
        return (
            <span>Loading.....</span>
        );
    }
}