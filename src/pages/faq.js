import React from 'react';
import data from '../data/faqData.json';
import { FAQBox } from '../components/faq-box';
import './faq.css';

class FAQ extends React.Component {
    render() {
        return (
            <div className="faq" id="faq">
                <h1>FAQ</h1>
                <div className="faq-container">
                    <div className="faq-side left">
                        <FAQBox color="#3ABFEF" question={data[0].question} answer={data[0].answer} />
                        <FAQBox color="#3ABFEF" question={data[1].question} answer={data[1].answer} />
                        <FAQBox color="#3ABFEF" question={data[2].question} answer={data[2].answer} />
                        <FAQBox color="#3ABFEF" question={data[3].question} answer={data[3].answer} />
                    </div>
                    <div className="faq-side right">
                        <FAQBox color="#6270F0" question={data[4].question} answer={data[4].answer} />
                        <FAQBox color="#6270F0" question={data[5].question} answer={data[5].answer} />
                        <FAQBox color="#6270F0" question={data[6].question} answer={data[6].answer} />
                        <FAQBox color="#6270F0" question={data[7].question} answer={data[7].answer} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;
