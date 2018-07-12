import React from 'react';

const Projects = () => {
    return (
        <div className="project-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="project-menu">
                        <button className="active" data-filter="*">All</button>
                        <button data-filter=".design">Design</button>
                        <button data-filter=".ui">UI/UX</button>
                        <button data-filter=".illustration">Illustration</button>
                        <button data-filter=".print">print</button>
                        <button data-filter=".freeHand">freeHand</button>
                    </div>
                    <div className="project-masonary row" id="container">
                        <div className="prt-item col-lg-3 col-md-6">
                            <div className="project-items">
                                <img src="../../assets/images/project/1.jpg" alt="image"/>
                                <div className="p-info">
                                    <a className="expand-img" href="assets/images/project/1.jpg">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="prt-item ui col-md-6">
                            <div className="project-items">
                                <img src="../../assets/images/project/2.jpg" alt="image"/>
                                <div className="p-info">
                                    <a className="expand-img" href="assets/images/project/2.jpg">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="prt-item freeHand print illustration design col-lg-3 col-md-6">
                            <div className="project-items">
                                <img src="../../assets/images/project/3.jpg" alt="image"/>
                                <div className="p-info">
                                    <a className="expand-img" href="assets/images/project/3.jpg">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="prt-item ui col-lg-3 col-md-6">
                            <div className="project-items">
                                <img src="../../assets/images/project/4.jpg" alt="image"/>
                                <div className="p-info">
                                    <a className="expand-img" href="assets/images/project/4.jpg">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="prt-item illustration design col-lg-3 col-md-6">
                            <div className="project-items">
                                <img src="../../assets/images/project/5.jpg" alt="image"/>
                                <div className="p-info">
                                    <a className="expand-img" href="assets/images/project/5.jpg">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="prt-item print illustration design col-lg-3 col-md-6">
                            <div className="project-items">
                                <img src="../../assets/images/project/6.jpg" alt="image"/>
                                <div className="p-info">
                                    <a className="expand-img" href="assets/images/project/6.jpg">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="prt-item freeHand ui design col-lg-3 col-md-6">
                            <div className="project-items">
                                <img src="../../assets/images/project/7.jpg" alt="image"/>
                                <div className="p-info">
                                    <a className="expand-img" href="assets/images/project/7.jpg">
                                        <i className="fa fa-plus"></i>
                                    </a>
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

export default Projects;