import React from "react";
import "./App.css";
//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
//Views
import Home from "./views/Home";
import Blog from "./views/Blog";
import Post1 from "./views/blogposts/2019-01-07/post";
import Post2 from "./views/blogposts/2019-01-17/post";
import Post3 from "./views/blogposts/2019-02-26/post";
import Post4 from "./views/blogposts/2019-04-02/post";
import Post5 from "./views/blogposts/2019-04-03/post";
import Post6 from "./views/blogposts/2020-01-20/post";
import Projects from "./views/Projects";
import ATA from "./views/projects/2015-02/post";
import Project0 from "./views/projects/2016-02/post";
import Project1 from "./views/projects/2017-02/post";
import Project2 from "./views/projects/2018-07/post";
import Project3 from "./views/projects/2018-11/post";
import Project4 from "./views/projects/2018-12/post";
import Project5 from "./views/projects/2020-05/post";
import Project6 from "./views/projects/2020-06/post";
import Favorites from "./views/Favorites";
import Contact from "./views/Contact";
import About from "./views/About";
import NotFound from "./views/NotFound";
//Components
import ScrollToTop from "./components/ScrollToTop";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";

library.add(fab, fas);

function Routes() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/blog" component={Blog} />
				<Route exact path="/blog/attachment" component={Post1} />
				<Route exact path="/blog/victimhood" component={Post2} />
				<Route exact path="/blog/control" component={Post3} />
				<Route exact path="/blog/theism" component={Post4} />
				<Route exact path="/blog/freewill" component={Post5} />
				<Route exact path="/blog/jcurves" component={Post6} />

				<Route exact path="/projects" component={Projects} />
				<Route exact path="/projects/elevation" component={ATA} />
				<Route exact path="/projects/impulse" component={Project0} />
				<Route exact path="/projects/toggle" component={Project1} />
				<Route exact path="/projects/flamebot" component={Project2} />
				<Route exact path="/projects/sensemaking" component={Project3} />
				<Route exact path="/projects/bytecycler" component={Project4} />
				<Route exact path="/projects/atomicevents" component={Project5} />
				<Route exact path="/projects/peoplelist" component={Project6} />

				<Route exact path="/favorites" component={Favorites} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
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
