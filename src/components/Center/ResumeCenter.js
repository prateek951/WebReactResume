import React, { Component } from 'react'

export default class ResumeCenter extends Component {
  render() {
    return (
      <div>
            <div className="hero-area">
                <div id="particles-js"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 offset-xl-1">
                            <div className="hero-content h1-content">
                                <h3 className="wow fadeInUp" data-wow-delay="0.6s">Hello,</h3>
                                <h2 className="wow fadeInUp" data-wow-delay="0.8s">I am Prateek
                                    <span>Madaan</span>
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="1s">Full stack Web Developer | Machine Learning Enthusiast | MathematicsGeek.</p>
                                <ul className="hr-social wow fadeIn" data-wow-delay="1.3s">
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Dribbble</a>
                                    </li>
                                    <li>
                                        <a href="#">Behance</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hr-about-content hr-abt-content-h1 wow fadeIn" data-wow-delay="1.5s">
                            <h2 className="wow fadeIn" data-wow-delay="1.55s">Professioanal Profile</h2>
                            <p className="wow fadeIn" data-wow-delay="1.6s">Aliquam efficitur purus leo, quis molestie augue feugiat at. Maecenas dolor dolor, venenatis sit amet
                                magna vitae, luctus vulputate nisi. Sed scelerisque dictum velit.</p>
                            <p className="wow fadeIn" data-wow-delay="1.65s">Vestibulum eu eros tortor. Aliquam cursus nunc mauris, nec congue tortor pretium et.</p>
                            <div className="signature wow fadeIn" data-wow-delay="1.7s">
                                <img src="assets/images/icon/signature.png" alt="signature"/>
                            </div>
                            <a href="#"  className="wow fadeIn" data-wow-delay="1.75s">Downlaod CV</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
