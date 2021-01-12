import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (

      <div>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Melanie Woe</a></h1>
              <span className="email"><i className="icon-mail"></i> <a href={`mailto:melaniewoe@gmail.com`}>melaniewoe@gmail.com</a>
              </span>
              
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="experience">Experience</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="connect">Connect with me</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://www.linkedin.com/in/melaniewoe/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Melaniewoe" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.instagram.com/melaniewoe/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.facebook.com/melanie.woe" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/melanie_woe" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>© 2019 <i className="icon-heart" aria-hidden="true" /> </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}