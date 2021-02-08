import React from "react";

import { Nav } from "./nav.js";
import { Card } from "./card.js";
import { Jumbotrom } from "./jumbotrom.js";
import { Footer } from "./footer.js";
//create your first component
export function Home() {
	return (
		<div>
			<Nav />
			<Jumbotrom />
			<div className="row">
				<Card /> <Card /> <Card />
			</div>
			<Footer />
		</div>
	);
}
