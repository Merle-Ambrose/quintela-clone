import React from 'react';

function Article({heading, desc, img, alt, author, date, category, url}) {
    return (
        <div className="col">
            <div className="articleBox">
                <a href={url}><img src={img} alt={alt}/></a>
                <div className="articleBoxText">
                    <a href={url}><h5>{heading}</h5></a>
                    <p className="articleBoxCredit">By {author} | {date} | {category}</p>
                    <p>{desc}</p>
                    <p><a href={url}>Read More</a></p>
                </div>
            </div>
        </div>
    );
}

function PsychobabbleZone() {
  return (
    <>
        {/* Page Introduction */}
        <div className="digitalInterviewQuote">
            <div className="midnightBackground" id="psychModelHeader">
                <h1 className="introHeaderHeading text-center">Psychobabble-Free Zone</h1>
                <div className="container">
                    <div className="text-center">
                        <p> 
                            The word “science” has been so overused in Talent Management that it’s lost its meaning. When you hear it, you probably tune out just like we do.  It is a shame, because there is a lot of value once you get past the BS.  That’s why we decided to offer a psychobabble-free zone where we discuss the “science” without the better-than-you attitude. We hope you enjoy!
                        </p>
                        <a href="/contact-us"><button type="button" className="introHeaderBtn">Contact Us<div className="introHeaderBtnArrow"><i className="bi bi-caret-right"></i></div></button></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="row justify-content-center">
                <Article heading="Part 1: How Diverse Are HR Vendor Executive Teams?"
                    desc="There are 1000s of blogs/articles/white papers on diversity, equity, and inclusion (DEI), and the takeaway is always the same.  DEI is the right thing to do and even impacts the bottom line.  As a person of color (POC), I suppose I should be grateful that DEI is at..."
                    img="./img/articles/cookie.png"
                    alt=""
                    author="Joel Quintela"
                    date="Jun 21, 2022"
                    category="Diversity, Equity, and Inclusion"
                    url="/articles/how-diverse-are-hr-vendor-executive-teams" />
                <div className="col-1 paddingArticles"></div>
                <Article heading="Reducing Discrimination with Digital Interview Guides"
                    desc="Despite changing times, hiring discrimination is still as prevalent today as it was 20 years ago. Over the years, more and more organizations have tried to mandate hiring practices that reduce bias and discrimination based on race, ethnicity, gender, sexual..."
                    img="./img/articles/handshake.jpg"
                    alt=""
                    author="Joel Quintela"
                    date="Mar 23, 2022"
                    category="Diversity, Equity, and Inclusion"
                    url="/articles/reducing-discrimination-with-digital-interview-guides" />
                <div className="col-1 paddingArticles"></div>
                <Article heading="The Two Ways Digital Interview Guides Keep You Legally Compliant"
                    desc="Studies show that about 30 percent of interviewers know whether or not they want to hire you within the first 90 seconds of an interview. Despite the ease of making such quick judgments of candidates, it’s not necessarily legal to “go with your gut.” While your..."
                    img="./img/articles/videoInterview.jpg"
                    alt=""
                    author="Joel Quintela"
                    date="Mar 20, 2022"
                    category="Legal Compliance"
                    url="/articles/the-two-ways-digital-interview-guides-keep-you-legally-compliant" />
                <Article heading="Interview like a Pro: How to Interview Candidates with Confidence"
                    desc="In today’s standardized, digitized world, the interview is not what it used to be. Once upon a time, an interviewer had the confidence to walk into a room and spit out question after question, rating the candidate in their mind and walking away with an opinion already..."
                    img="./img/articles/personInterview.jpg"
                    alt=""
                    author="Joel Quintela"
                    date="Mar 2, 2022"
                    category="Legal Compliance"
                    url="/articles/interview-like-a-pro-how-to-interview-candidates-with-confidence" />
            </div>
            <div className="row justify-content-center">
                <div className="col-1 paddingArticles"></div>
                <div className="col-3"></div>
                <div className="col-1 paddingArticles"></div>
                <div className="col-3"></div>
            </div>
        </div>
    </>
  );
}

export default PsychobabbleZone;