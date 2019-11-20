import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/twitter.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/melaniewoe/Twitter-Clone">Twitter Clone</a></h3>
											<span>Java, HTML, CSS, NetBeans</span>
											<p className="icon">
												<span><a href="https://github.com/melaniewoe/Twitter-Clone"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/saya.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/melaniewoe/Gas-Station-App">Saya - Gas Station App</a></h3>
											<span>Python/Django, HTML/CSS/JavaScript, MongoDB, Swagger, Apigee</span>
											<p className="icon">
												<span><a href="https://github.com/melaniewoe/Gas-Station-App"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/web-api.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/melaniewoe/Web-API">Web API projects</a></h3>
											<span>Node.js, Postman, Apigee, Swagger</span>
											<p className="icon">
												<span><a href="https://github.com/melaniewoe/Web-API"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/car.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/melaniewoe/Maze-Car">Autonomous Car</a></h3>
											<span>Arduino, C++</span>
											<p className="icon">
												<span><a href="https://github.com/melaniewoe/Maze-Car"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/multiplication.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/melaniewoe/multi-threading">Multithreading</a></h3>
											<span>C++</span>
											<p className="icon">
												<span><a href="https://github.com/melaniewoe/multi-threading"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/rtd.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/melaniewoe/RTD_IOT">RTD IOT</a></h3>
											<span>C#, ASP.NET</span>
											<p className="icon">
												<span><a href="https://github.com/melaniewoe/RTD_IOT"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/melaniewoe" className="btn btn-primary btn-learn"> <i className="icon-github" /> View More Projects </a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}