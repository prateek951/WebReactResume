import React from 'react';

const MobileMenu = (props) => {
    var jsx;
    if(props.isopen === true){
        jsx = `
    <div class="offset-wrapper">
    <div class="offset-closer">
        <div class="close-btn">
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="offset-inner">
        <div class="offset-menu fadein deley-0">
            <ul>
                <li class="active">
                    <a href="index-2.html">Home</a>
                </li>
                <li>
                    <a href="skills.html">Skills</a>
                </li>
                <li>
                    <a href="education.html">Education</a>
                </li>
                <li>
                    <a href="experience.html">Experience</a>
                </li>
                <li>
                    <a href="project.html">Project</a>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
        <div class="offset-contact fadein deley-2">
            <ul>
                <li>
                    <div class="offset-s-info">
                        <i class="fa fa-envelope"></i>
                        <div class="c_info">
                            <p>Info@bapty.com</p>
                            <p>contact@bapty.com</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="offset-s-info">
                        <i class="fa fa-phone"></i>
                        <div class="c_info">
                            <p>+88 0123 43456 67</p>
                            <p>+88 0123 43456 67</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="offset-s-info">
                        <i class="fa fa-envelope"></i>
                        <div class="c_info">
                            <p>Info@bapty.com</p>
                            <p>contact@bapty.com</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="offset-social fadein deley-3">
            <ul class="hr-social">
                <li>
                    <a href="#">Behance</a>
                </li>
                <li>
                    <a href="#">Dribbble</a>
                </li>
                <li>
                    <a href="#">Linkedin</a>
                </li>
                <li>
                    <a href="#">Youtube</a>
                </li>
            </ul>
        </div>
    </div>
</div>`;
    }else{
        jsx = '';
    }
    console.log('inside the mobile menu component',props);
    return ( 
        <div>
           {jsx} 
        </div>
    );
};

export default MobileMenu;