import React from 'react';

const Contact = () => {
    return (
            <div className="contact-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 offset-xl-1">
                        <div className="skill-left-thumb wow pulse" data-wow-duration="0.5s">
                            <img src="assets/images/contact/contact-left-thumb.jpg" alt="image"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-details">
                            <h2 className="skill-title wow fadeInUp" data-wow-delay="0.1s">Contact Information</h2>
                            <div className="contact-info">
                                <div className="s-contact-info wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon"><i className="fa fa-envelope"></i></div>
                                    <div className="sc-text">
                                        <p>Info@bapty.com</p>
                                        <p>contact@bapty.com</p>
                                    </div>
                                </div>
                                <div className="s-contact-info wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="icon"><i className="fa fa-phone"></i></div>
                                    <div className="sc-text">
                                        <p>+88 0123 43456 67</p>
                                        <p>+88 0123 43456 67</p>
                                    </div>
                                </div>
                                <div className="s-contact-info wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="icon"><i className="fa fa-futbol-o"></i></div>
                                    <div className="sc-text">
                                        <p>Info@bapty.com</p>
                                        <p>contact@bapty.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="leave-message">
                                <h2 className="skill-title wow fadeInUp" data-wow-delay="1s">Massage Me</h2>
                                <div className="contact-form wow fadeIn" data-wow-delay="1.5s">
                                    <form action="http://tf.itech-theme.com/brittanto-preview/brittanto/mail.php" id="cf">
                                        <div className="screen-reader-response"></div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" id="fname" name="fname" placeholder="Your First Name"/>
                                                <input type="text" id="lname" name="lname" placeholder="Your Last Name"/>
                                                <input type="email" id="email" name="email" placeholder="Your Email "/>
                                            </div>
                                            <div className="col-md-6">
                                                <textarea name="msg" id="msg" placeholder="Discription"></textarea>
                                                <input type="submit" id="submit" value="Submit Now"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Contact;