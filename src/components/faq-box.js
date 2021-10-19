/*
import React from "react";

export class FAQBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    toggleAnswer = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        const showAnswer = this.state.show ? "show" : "";
        return (
            <div className={`question ${this.props.className}`}>
                <div className="question-wrapper" onClick={this.toggleAnswer}>
                    <div
                        className="question-color"
                        style={{ backgroundColor: this.props.color }}
                    ></div>
                    <p className="question-text">{this.props.question}</p>
                </div>
                <p className={`answer-wrapper ${showAnswer}`}>
                    {this.props.answer}
                </p>
            </div>
        );
    }
}
*/

import React, { Component } from 'react';
import './faq-box.css';

class FAQBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    render = () => (
        <div
            className={'faqbox' + (this.state.open ? ' open' : '')}
            onClick={() => this.setState({ open: !this.state.open })}
        >
            <div className="question-container">
                <div className="coloredBox" ></div>
                <p className="question" style={{ margin: 0, }}>
                {this.props.question}
                </p>
            </div>
            {this.state.open ? (
                <p
                    className="answer"
                    dangerouslySetInnerHTML={{ __html: this.props.answer }}
                    style={{ lineHeight: '1.4em', fontSize: '1.2em' }}
                ></p>
            ) : null}
        </div>
    );
}

export default FAQBox;