  
import React from 'react';
import faqs from '../components/faq.json';
import FAQBox from '../components/faq-box';

const FAQ = (props) => (
    <section>
        <div className="wrap">
            {
                faqs.map(v => (
                    <FAQBox question={v.question} answer={v.answer} />
                ))
            }
        </div>
    </section>
)

export default FAQ;