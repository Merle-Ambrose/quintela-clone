import React, {useState} from 'react';

function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

function Contact() {
  let [fullNameMsg, setFullNameMsg] = new useState('');
  let [emailMsg, setEmailMsg] = new useState('');

  function checkName(e) {
    let formFullName = e.target.value;
    if(!formFullName || !formFullName.trim()) {
        setFullNameMsg('This field is required.');
    }
    else {
        setFullNameMsg('');
    }
  }

  function checkEmail(e) {
    let formEmail = e.target.value;
    if(!formEmail || !formEmail.trim()) {
        setEmailMsg('This field is required.');
    }
    else if(!validateEmail(formEmail.trim())) {
        setEmailMsg('Please enter a valid email address.');
    }
    else {
        setEmailMsg('');
    }
  }

  function sumbitForm(e) {
    e.preventDefault();
    // Check if the submitted information is correct
    let formFullName = e.target.fullName.value;
    let formEmail = e.target.email.value;
    let valid = true;
    if(!formFullName || !formFullName.trim()) {
        setFullNameMsg('This field is required.');
        valid = false;
    }
    else {
        setFullNameMsg('');
    }
    if(!formEmail || !formEmail.trim()) {
        setEmailMsg('This field is required.');
        valid = false;
    }
    else if(!validateEmail(formEmail.trim())) {
        setEmailMsg('Please enter a valid email address.');
        valid = false;
    }
    else {
        setEmailMsg('');
    }

    if(valid) {
        alert(`Your full name: ${formFullName.trim()} \nYour email: ${formEmail.trim()} \nSince this is a demo website, your information will not be stored/sent anywhere. \nYou will now be redirected to the homepage...`);
        window.location.assign('/');
    }
  }

  return (
    <>
        <div className="digitalInterviewQuote">
            <div className="midnightBackground" id="contactUsBkg"></div>
            <div className="text-center" id="contactUsHeader">
                <h1>
                    Schedule a 30-minute demo
                </h1>
                <p className="digitalInterviewOverlayParagraph">
                    Our mission is to make managing all of your interview guides and administering talent management assessments as simple as possible. 
                </p>
                <div id="contactUsBox">
                    <form onSubmit={sumbitForm}>
                        <label htmlFor="fullName">Full Name <p style={{color: 'red', fontWeight: 'normal', display: 'inline'}}>*</p></label><br/>
                        <input type="text" id="fullName" name="fullName" onKeyDown={checkName}></input><br/>
                        <label className="errorMsg">{fullNameMsg}</label><br/>
                        <label htmlFor="email">Company Email <p style={{color: 'red', fontWeight: 'normal', display: 'inline'}}>*</p></label><br/>
                        <input type="text" id="email" name="email" onKeyDown={checkEmail}></input><br/>
                        <label className="errorMsg">{emailMsg}</label><br/>
                        <button type="Submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="quoteFromCustomer" id="contactUsQuote">
                <div className="container">
                    <div className="row align-items-start">
                    <div className="col-sm-3 quoteLogo">
                        <img src="./img/companies/SRHM.png" alt="SHRM Logo" id="srhmLogo"/>
                    </div>
                    <div className="col-sm-8 quoteText">
                        <p className="quote">
                            Quintela is unique because they are selection science experts who build simple, easy-to-use HR technology. Using the Interview Guide Platform is highly intuitive—which is a must for HR professionals and hiring managers with decreased bandwidth and increased responsibilities. One of the best parts of the platform is it helps equip interviewers with practical tips on how to structure the interview, how to ask probing questions, what to look for and how to evaluate. It reduces much of the leg work typically required by recruiters to prepare interviewers, while providing candidates a more consistent and polished interview experience.
                        </p>
                        <p className="quoteName">
                            Ashley Miller
                        </p>
                        <p className="quoteCredential">
                            Director, Digital Products & Services, SHRM
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="exerpt">
                <div className="container">
                    <h1 className="text-center">Digital Interview Builder</h1>
                    <p>Are you a human resources professional looking for the right digital interview builder? In today’s talent management marketplace, it can be difficult to find the right fit — both for your interview management system, and for candidates themselves. At Quintela, we pride ourselves on taking the guesswork out of your hiring and performance management appraisal systems. Our goal is to help you save time and energy, all while improving the accuracy of your hiring and performance management efforts. From assessment systems through the full lifetime of an employee’s career at your firm, Quintela’s custom solutions can help you overcome your talent management challenges. Use our products to develop a more strategic approach that will carry your human resources and hiring efforts into a solid future.</p>
                    <p><b>How a digital interview builder supports all organizational roles</b></p>
                    <p>Your hiring managers are probably experts in their technical fields — they are not always savvy when it comes to proper hiring practices, or even the legal elements behind finding the right candidate. Instead of struggling to educate every individual manager about the subtleties of hiring, why not trust a performance management appraisal systems expert instead? Quintela offers interviewing guides that are designed to make consistent, measurable interviewing not only possible, but, in fact, the norm for your company. Our human resources platforms allow for:</p>
                    <ul>
                        <li>More consistent evaluations and interviews, thanks to predetermined questions and guidelines</li>
                        <li>Better measurement with quantitative ranking systems</li>
                        <li>Less waste and duplication of effort, leading to a faster interviewing process that nets higher-quality candidates</li>
                        <li>Faster reviews, with the ability to rank multiple candidates at once</li>
                        <li>Fewer burdensome, procedural tasks and more meaningful interactions with your team</li>
                        <li>Lower legal risk, thanks to a compliance-focused interviewing system</li>
                        <li>And more</li>
                    </ul>
                    <p>Human resources professionals are notoriously overburdened and managing the hiring process from start to finish can seem like an overwhelming task. Instead of trying to “boil the ocean” with your hiring teams, why not trust Quintela’s smart solutions for your business? Our digital interview builder is just one element of our comprehensive product and service offerings. We can help you craft a custom competency library, interview scheme and talent management support program to propel your company to success. Give your employees and hiring teams the advantage of consistent, reliable support — give them access to Quintela. Contact us today to learn more about our diverse array of options for your company, no matter your industry.</p>
                </div>
            </div>
        </div>
        <div>

        </div>
    </>
  );
}

export default Contact;
