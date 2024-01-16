import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";

import "./styles/teaching.css";

const Teaching = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`Teaching | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="teaching" />
				<div className="content-wrapper">

					<div className="teaching-container">
						<div className="teaching-main">
							<div className="teaching-right-side">
								<div className="title teaching-title">
									{INFO.teaching.title}
								</div>
								<h2>Statics and Probability</h2>
								<p>"Statics and Probability" is a foundational course providing a concise exploration of statistical methods and probability theory. Students will grasp key concepts, enabling them to analyze and interpret data, make informed decisions, and understand the fundamental principles of probability.</p>
								<p>Level: bachelor</p>
								<p>Year: 2; Semester: 1;</p>
								<p>Language: Roumanian</p>
								<p>Lecture: 2h/week; Seminar: 1h/week; Laboratory: 1h/week;</p>
								<h2>Web Programming Fundamentals</h2>
								<p>"Web Programming Fundamentals" is a meticulously crafted course aimed at empowering students with vital skills in the dynamic field of web development. Offering a thorough exploration, this course delivers an extensive introduction to the fundamental principles and technologies essential for modern web programming. Students will immerse themselves in HTML, CSS, and JavaScript, cultivating a robust proficiency in client-side technologies to craft interactive and visually captivating web pages.</p>
								<p>Level: bachelor</p>
								<p>Year: 2; Semester: 2;</p>
								<p>Language: English</p>
								<p>Lecture: 2h/week; Seminar: 2h/week; Laboratory: 2h/week;</p>

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

export default Teaching;
