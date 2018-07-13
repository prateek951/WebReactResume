!import React, { Component } from 'react';

export class Skills extends Component {
    constructor(){
        super();
        this.state = {
            skills : [
                {
                    name: 'Vue.js',
                    prop: '75%',
                    wowDelay: 1
                },
                {
                    name: 'Angular6',
                    prop: '70%',
                    wowDelay: 2
                },
                {
                    name: 'Nodejs and Expressjs',
                    prop: '90%',
                    wowDelay: 3
                },
                {
                    name: 'JavaScript',
                    prop: '85%',
                    wowDelay: 4
                }
            ]        
        }
    }
    
    render() {
        var jsx = '';
        if(!jsx){
            for (let i = 0; i < this.state.skills.length; i++) {
                const element = this.state.skills[i];
                // console.log(element);
             //    console.log('inside the renderItems method');
                 jsx += (<div className="col-md-6">
                 <div className="s_skill-item wow fadeIn" data-wow-delay={element.wowDelay+'s'}>
                 <div className="s-text">{element.name}
                 <span>{element.prop}</span>
                  </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: element.prop}}>
                        </div>
                    </div>
                 </div>
            </div>);
        }
        }      
        return (
            <div className="skills-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-4 offset-xl-1">
                        <div className="skill-left-thumb wow pulse" data-wow-duration="0.5s">
                            <img src="../../assets/images/skill/skill-left-thumb.jpg" alt="image"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="skill-details">
                            <h2 className="skill-title wow fadeInUp" data-wow-delay="0.1s">Intra Professional Skills</h2>
                            <div className="professional-skill">
                                <div className="progress-item wow fadeIn" data-wow-delay="0.2s">
                                    <div className="pie_progress" role="progressbar" data-goal="84">
                                        <div className="pie_progress__number">0%</div>
                                    </div>
                                    <div className="pie_progress__name">Managment Skill</div>
                                    <span className="pie-dot"></span>
                                </div>
                                <div className="progress-item wow fadeIn" data-wow-delay="0.4s">
                                    <div className="pie_progress" role="progressbar" data-goal="70">
                                        <div className="pie_progress__number">0%</div>
                                    </div>
                                    <div className="pie_progress__name">Production Skill</div>
                                    <span className="pie-dot"></span>
                                </div>
                                <div className="progress-item wow fadeIn" data-wow-delay="0.6s">
                                    <div className="pie_progress" role="progressbar" data-goal="50">
                                        <div className="pie_progress__number">0%</div>
                                    </div>
                                    <div className="pie_progress__name">Communication Skill</div>
                                    <span className="pie-dot"></span>
                                </div>
                            </div>
                            <div className="software-skill">
                                <h2 className="skill-title wow fadeInUp" data-wow-delay="0.8s">Github Contributions</h2>
                                <div className="software-skills">
                                    <div className="row">
                                        {jsx}
                                        <img src="http://ghchart.rshah.org/409ba5/prateek951" alt="prateek951's Blue Github Chart"/>                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
};

export default Skills;
