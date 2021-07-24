//https://javascript.plainenglish.io/how-to-set-up-protected-routes-in-your-react-application-a3254deda380

import React from "react";
import ACSModule from "../components/ACSModule"
import BlogStyle from "../components/BlogStyle";

import module0_image from "../assets/ACS101/thumbnails/module0.png"
import module1_image from "../assets/ACS101/thumbnails/module1.png"
import module2_image from "../assets/ACS101/thumbnails/module2.png"
import module3_image from "../assets/ACS101/thumbnails/module3.png"
import module4_image from "../assets/ACS101/thumbnails/module4.png"
import module11_image from "../assets/ACS101/thumbnails/module11.png"

import module0_pdf from "../assets/ACS101/notes/Module_0_Introduction.pdf"
import module1_pdf from "../assets/ACS101/notes/Module_1_Reductionism_and_Emergence.pdf"
import module2_pdf from "../assets/ACS101/notes/Module_2_Introduction_to_Dynamics.pdf"
import module3_pdf from "../assets/ACS101/notes/Module_3_Difference_Equations_Nonlinear_Dynamics_and_Chaos.pdf"
import module4_pdf from "../assets/ACS101/notes/Module_4_Cellular_Automata_Self_Organization_and_Pattern_Formation.pdf"
import module11_pdf from "../assets/ACS101/notes/Module_11_Perception_Action_and_Mind.pdf"


export default function AppliedComplexity() {  
	return (
		<BlogStyle>
			<h2>ACS101: Introduction to Complexity & Applied Complexity</h2>
			<h3 className="metadata">Course Notes, Spring 2021</h3>
			<div className="post">
				<p>This is a collection of my notes from <a href="https://jwnorman.com/">Joe Norman</a>'s course, <a href="https://appliedcomplexity.io/education">Introduction to Complexity & Applied Complexity</a>. Basically, the goal here is to create a detailed text version of the lectures, for study and review purposes.</p>
				<br/>
				<br/>
				<div className="modules">
					<ACSModule image={module0_image} pdf={module0_pdf} />
					<ACSModule image={module1_image} pdf={module1_pdf} />
					<ACSModule image={module2_image} pdf={module2_pdf} />
					<ACSModule image={module3_image} pdf={module3_pdf} />
					<ACSModule image={module4_image} pdf={module4_pdf} />
					<ACSModule image={module11_image} pdf={module11_pdf} />
				</div>
			</div>
		</BlogStyle>
	);
}