import React from 'react';

import { Input } from "../index";

import './styles.scss'

class Option extends React.Component {

    constructor(props) {
        super(props);

        // this.state = { value: 'hide' }
        this.props = {
            title : this.title,
            name : this.name,
            inputTitle : this.inputTitle,
            inputId : this.inputId,
            inputName : this.inputName,
            inputPlaceholder : this.placeholder,
            value: this.value,
            handleInput: this.handleInput,
            showQuestion: this.showQuestion,
            handleSelect: this.handleSelect
        }
    }

    // handleOptionChange = (event) => {
    //     this.setState({
    //         value: event.target.value
    //     })
    // }



    render() {
        return (
            <div className="form__item">
                <div className="form__label">{this.props.title}
                    <select
                        name={this.props.name}
                        className="select _req"
                        onChange={this.props.handleSelect}
                        value={this.props.showQuestion}
                    >
                        <option value={false}>Нет</option>
                        <option value={true}>Да</option>
                    </select>
                </div>

                {
                   this.props.showQuestion === "true" &&
                    <Input
                        title={this.props.inputTitle}
                        id={this.props.inputId}
                        name={this.props.inputName}
                        placeholder={this.props.inputPlaceholder}
                        req="_req"
                        showQuestion={this.props.showQuestion}
                        value={this.props.value}
                        handleInput={this.props.handleInput}
                    />
                }
            </div>
        );
    }
}

export default Option;