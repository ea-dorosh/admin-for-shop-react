import React from "react";
import "./index.scss"


class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.options[0],
            isOpen: false,
        };

        this.handleSelectClick = this.handleSelectClick.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    handleSelectClick() {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleOptionClick(value) {
        this.setState( {
            value,
            isOpen: false
        } );
    }

    render() {
        const {options, label} = this.props;
        const {value, isOpen} = this.state;

        return (
            <div className={'select'}>
                <span className={'select__label'}>{label}</span>
                <div className={'select__item'} onClick={this.handleSelectClick}>{value}</div>
                <ul className={`select__list ${isOpen ? `open` : null}`}>
                    {options.map((element, index) => (
                        <li className={'select__list-item'}
                            key={index}
                            onClick={()=>{this.handleOptionClick(element)}}>
                            {element}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Select;
