import React, { Component } from 'react'

export default class Connect extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-connect" data-section="connect">
          <div className="colorlib-narrow-content">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Connect</span>

                    <h2 className="colorlib-heading">Connect with me</h2>
                    
                    <a href={`mailto:melaniewoe@gmail.com`}>melaniewoe@gmail.com</a>
                    <a href="https://www.linkedin.com/in/melaniewoe/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
                    <a href="https://github.com/Melaniewoe" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                    <a href="https://www.instagram.com/melaniewoe/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
                    <a href="https://www.facebook.com/melanie.woe" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>
                    <a href="https://twitter.com/melanie_woe" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a>
                    
                    <div class="social-container">
                        <ul class="social-icons">
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-codepen"></i></a></li>
                        </ul>
                        <ul class="social-icons">
                          <li><a href="#" class="social-square"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#" class="social-square"><i class="fa fa-dribbble"></i></a></li>
                          <li><a href="#" class="social-square"><i class="fa fa-github"></i></a></li>
                          <li><a href="#" class="social-square"><i class="fa fa-stack-overflow"></i></a></li>
                        </ul>
                    </div>

                    </div>
                </div>
                </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}