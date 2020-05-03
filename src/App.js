import React from "react";
import "./App.css";
//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
//Views
import Home from "./views/Home";
import Blog from "./views/Blog";
import Projects from "./views/Projects";
import Favorites from "./views/Favorites";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
//Components
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";

library.add(fab, faCoffee);

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/projects" component={Projects} />
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
