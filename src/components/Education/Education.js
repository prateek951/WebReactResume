import React from 'react';

const Education = () => {
    return (
        <div className="skills-area">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-4 offset-xl-1">
                    <div className="skill-left-thumb wow pulse" data-wow-duration="0.5s">
                        <img src="assets/images/skill/education-left-thumb.jpg" alt="image"/>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="education-skill">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="edu-item wow fadeIn" data-wow-delay="0.2s">
                                    <span>2015 - 2019</span>
                                    <h2>B.Tech Student At Bhagwan Parshuram Institute Of Technology</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="edu-item wow fadeIn" data-wow-delay="0.3s">
                                    <span>2014-2015</span>
                                    <h2>Class 12th from Kulachi Hansraj Model School, Ashok Vihar, Delhi-110052</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                </div>
                                <div className="edu-item wow fadeIn" data-wow-delay="0.4s">
                                    <span>2012-2013</span>
                                    <h2>Class 10th from Mata Jai Kaur Public School, Ashok Vihar, Delhi-110052</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    );
};

export default Education;