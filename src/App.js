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
import Projects from "./views/Projects";
import Project1 from "./views/projects/2017-02/post";
import Project2 from "./views/projects/2018-07/post";
import Favorites from "./views/Favorites";
import Contact from "./views/Contact";
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

				<Route exact path="/projects" component={Projects} />
				<Route exact path="/projects/toggle" component={Project1} />
				<Route exact path="/projects/flamebot" component={Project2} />

				<Route exact path="/favorites" component={Favorites} />
				<Route exact path="/contact" component={Contact} />
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
