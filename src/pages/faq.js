import React from 'react';
import faqs from '../data/faqData.json';
import FAQBox from '../components/faq-box';

class FAQ extends React.Component {
    render = () => (
        <section>
            <div className="wrap">
                {faqs.map((v) => (
                    <FAQBox question={v.question} answer={v.answer} />
                ))}
            </div>
        </section>
    );
}

export default FAQ;
