import React from 'react';

function SmallQuote({desc, title, company}) {
  return (
    <>
        <div className="container">
            <div className="text-center" id="digitalInterviewQuote">
                <p id="digitalInterviewQuoteDesc">{desc}</p>
                <p id="digitalInterviewQuoteTitle">{title}</p>
                <p id="digitalInterviewQuoteCompany">{company}</p>
            </div>
        </div>
    </>
  );
}

export default SmallQuote;
