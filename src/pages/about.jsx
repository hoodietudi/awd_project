import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<section className="education-section">
									<h2>Education</h2>
									<p>Colegiul National "Emil Racovita", Cluj-Napoca</p>
									<p>September 2015 — June 2019</p>
									<p>Entered high school with an average of 10. Finished with 9.5</p>

									<p>Babes Bolyai University-Faculty of Computer Science, Cluj-Napoca</p>
									<p>October 2019 — July 2022</p>

									<p>Babes Bolyai University-Faculty of Computer Science, Cluj-Napoca</p>
									<p>October 2022 — Present</p>
									<p>Enrolled in Databases Master's Program</p>
								</section>

								<section className="employment-section">
									<h2>Employment History</h2>
									<p>Data Engineer at Betfair Romania Development</p>
									<p>October 2021 — Present</p>
									<p>
										Worked with SQL Server and PowerBi to create reports, import scripts,
										and export scripts.
									</p>
									<p>Used PostgreSQL and SQL Server.</p>
								</section>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
