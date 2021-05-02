import React, { Component } from 'react';
import './faq-box.css';

<<<<<<< HEAD
class FAQBox extends Component { 
   constructor (props) {
      super(props);

      this.state = {
         open: false
      }
   }

   render = () => (
      <div className={'faqbox' + (this.state.open ? ' open' : '')} onClick={() => this.setState({ open: !this.state.open })}>
         <p className='question' style={{ margin: 0, fontFamily: "'Arial'" }}><b>{ this.props.question }</b></p>
         { this.state.open
            ? <p className='answer' dangerouslySetInnerHTML={{__html: this.props.answer}} style={{ lineHeight: '1.4em', fontSize: '1.2em', fontFamily: "'Arial'"}}></p>
            : null
         }
      </div>
   )
}

export default FAQBox;
=======
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
            <p className="question" style={{ margin: 0, fontFamily: "'Arial'" }}>
                <b>{this.props.question}</b>
            </p>
            {this.state.open ? (
                <p
                    className="answer"
                    dangerouslySetInnerHTML={{ __html: this.props.answer }}
                    style={{ lineHeight: '1.4em', fontSize: '1.2em', fontFamily: "'Arial'" }}
                ></p>
            ) : null}
        </div>
    );
}

export default FAQBox;
>>>>>>> 0e676751c4b5c0a20e32a24c9c7fbc35adfc0756
