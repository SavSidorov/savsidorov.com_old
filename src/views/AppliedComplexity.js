//https://javascript.plainenglish.io/how-to-set-up-protected-routes-in-your-react-application-a3254deda380

import React from "react";
import ACSModule from "../components/ACSModule"
import BlogStyle from "../components/BlogStyle";

import module0_image from "../assets/ACS101/thumbnails/module0.png"
import module1_image from "../assets/ACS101/thumbnails/module1.png"
import module2_image from "../assets/ACS101/thumbnails/module2.png"
import module3_image from "../assets/ACS101/thumbnails/module3.png"
import module4_image from "../assets/ACS101/thumbnails/module4.png"
import module5_image from "../assets/ACS101/thumbnails/module5.png"
import module6_image from "../assets/ACS101/thumbnails/module6.png"
import module7_image from "../assets/ACS101/thumbnails/module7.png"
import module8_image from "../assets/ACS101/thumbnails/module8.png"
import module9_image from "../assets/ACS101/thumbnails/module9.png"
import module10_image from "../assets/ACS101/thumbnails/module10.png"
import module11_image from "../assets/ACS101/thumbnails/module11.png"
import module12_image from "../assets/ACS101/thumbnails/module12.png"
import module13_14_image from "../assets/ACS101/thumbnails/module13_14.png"
import module15_image from "../assets/ACS101/thumbnails/module15.png"
import module16_17_image from "../assets/ACS101/thumbnails/module16_17.png"
import module18_image from "../assets/ACS101/thumbnails/module18.png"
import module19_image from "../assets/ACS101/thumbnails/module19.png"
import module20_image from "../assets/ACS101/thumbnails/module20.png"
import module21_image from "../assets/ACS101/thumbnails/module21.png"

import module0_pdf from "../assets/ACS101/notes/Module_0_Introduction.pdf"
import module1_pdf from "../assets/ACS101/notes/Module_1_Reductionism_and_Emergence.pdf"
import module2_pdf from "../assets/ACS101/notes/Module_2_Introduction_to_Dynamics.pdf"
import module3_pdf from "../assets/ACS101/notes/Module_3_Difference_Equations_Nonlinear_Dynamics_and_Chaos.pdf"
import module4_pdf from "../assets/ACS101/notes/Module_4_Cellular_Automata_Self_Organization_and_Pattern_Formation.pdf"
import module11_pdf from "../assets/ACS101/notes/Module_11_Perception_Action_and_Mind.pdf"
import module18_pdf from "../assets/ACS101/notes/Module_18_The_Timeless_Way.pdf"
import module20_pdf from "../assets/ACS101/notes/Module_20_Localism.pdf"
import module21_pdf from "../assets/ACS101/notes/Module_21_Applied_Complexity.pdf"


export default function AppliedComplexity() {  
	return (
		<BlogStyle>
			<h2>ACS101: Introduction to Complexity & Applied Complexity</h2>
			<h3 className="metadata">Course Notes, Spring 2021</h3>
			<div className="post">
				<p>A collection of my notes from <a href="https://jwnorman.com/">Joe Norman</a>'s course, <a href="https://appliedcomplexity.io/education">Introduction to Complexity & Applied Complexity</a>. Basically, the goal here is to create a detailed text version of the lectures, for studying and review.</p>
				<br/>
				<br/>
				<div className="modules">
					<ACSModule image={module0_image} pdf={module0_pdf} />
					<ACSModule image={module1_image} pdf={module1_pdf} />
					<ACSModule image={module2_image} pdf={module2_pdf} />
					<ACSModule image={module3_image} pdf={module3_pdf} />
					<ACSModule image={module4_image} pdf={module4_pdf} />
					<ACSModule image={module5_image} />
					<ACSModule image={module6_image} />
					<ACSModule image={module7_image} />
					<ACSModule image={module8_image} />
					<ACSModule image={module9_image} />
					<ACSModule image={module10_image} />
					<ACSModule image={module11_image} pdf={module11_pdf} />
					<ACSModule image={module12_image} />
					<ACSModule image={module13_14_image} />
					<ACSModule image={module15_image} />
					<ACSModule image={module16_17_image} />
					<ACSModule image={module18_image} pdf={module18_pdf} />
					<ACSModule image={module19_image} />
					<ACSModule image={module20_image} pdf={module20_pdf} />
					<ACSModule image={module21_image} pdf={module21_pdf} />
				</div>
			</div>
		</BlogStyle>
	);
}