import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (     
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/background-1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-9 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hello<br />I'm <span style={{textDecorationLine: "underline"}}>Melanie</span></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1TGkAgXZsPP_4GUJGo1-mdVNMzhW3NrpO/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/background-1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-9 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love building things! </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1TGkAgXZsPP_4GUJGo1-mdVNMzhW3NrpO/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src="/my_logo2.png" width="150" height="150" style={{top:0, right: 0, zIndex: 1, position: "absolute"}}/>
          </div>
        </section>
      </div>
    )
  }
}