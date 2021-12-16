import React from 'react';
import classNames from "classnames";

function Input({ title, id, name, placeholder, req, showOption, handleInput, stack }) {

    return (
        <div className={classNames("form__item", req, showOption)}>
            <label
                htmlFor={id}
                className="form__label">
                {title}
            </label>
            <textarea
                id={id}
                name={name}
                className={classNames("form__input", req, showOption)}
                placeholder={placeholder}
                value={stack}
                onChange={handleInput}
            />
        </div>
    );
}

export default Input;
