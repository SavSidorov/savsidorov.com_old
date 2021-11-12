import React from "react";
import "./App.css";
//Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons"
//Views
import Home from "./views/Home";
import Blog from "./views/Blog";
import Podcasts from "./views/Podcasts";
import Projects from "./views/Projects";
	import ATA from "./views/projects/2015-02/post";
	import Project0 from "./views/projects/2016-02/post";
	import Project1 from "./views/projects/2017-02/post";
	import Project2 from "./views/projects/2018-07/post";
	import Project3 from "./views/projects/2018-11/post";
	import Project4 from "./views/projects/2018-12/post";
	import Project5 from "./views/projects/2020-05/post";
	import Project6 from "./views/projects/2020-06/post";
	import Project7 from "./views/projects/2020-11/post";
	import Project8 from "./views/projects/2020-12/post";
	import Project9 from "./views/projects/2021-03/post";
import Quotes from "./views/library/Quotes"
import Writings from "./views/library/Writings"
import Talks from "./views/library/Talks"
import People from "./views/library/People"
import About from "./views/About";
import Contact from "./views/Contact";
import AppliedComplexity from "./views/AppliedComplexity"
import Login from "./views/Login"
import NotFound from "./views/NotFound";
//Components
import ScrollToTop from "./components/ScrollToTop";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";


library.add(fab, fas, far);

function Routes() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/podcast" component={Podcasts} />

				<Route exact path="/projects" component={Projects} />
				<Route exact path="/projects/elevation" component={ATA} />
				<Route exact path="/projects/impulse" component={Project0} />
				<Route exact path="/projects/toggle" component={Project1} />
				<Route exact path="/projects/flamebot" component={Project2} />
				<Route exact path="/projects/sensemaking" component={Project3} />
				<Route exact path="/projects/bytecycler" component={Project4} />
				<Route exact path="/projects/atomicevents" component={Project5} />
				<Route exact path="/projects/peoplelist" component={Project6} />
				<Route exact path="/projects/interhackt" component={Project7} />
				<Route exact path="/projects/musicvideos" component={Project8} />
				<Route exact path="/projects/twitter" component={Project9} />

				<Route exact path="/library/quotes" component={Quotes} />
				<Route exact path="/library/writings" component={Writings} />
				<Route exact path="/library/talks" component={Talks} />
				<Route exact path="/library/people" component={People} />

				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />

				<PrivateRoute exact path="/acs101" component={AppliedComplexity}/>
				<Route exact path="/login" component={Login} />

				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

function App() {
	return (
		<div className="App">
			<Header />
			<NavBar />
			<Layout>
				<Routes />
			</Layout>
			{window.location.pathname !== "/" && <Footer />}
		</div>
	);
}

export default App;
