import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import NotFound from "./views/NotFound/NotFound";

import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";

function App() {
	return (
		<React.Fragment>
			<Jumbotron />
			<NavBar />
			<Layout>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</Layout>
		</React.Fragment>
	);
}

export default App;
