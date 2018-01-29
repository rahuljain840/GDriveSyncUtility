import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IndexRoute } from 'react-router';

class TileList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link to={`/details/${this.props.feed.title}`} >
				<div className="tile">
					<img className="imgTile" alt={this.props.feed.title} src={this.props.feed.url} />
					<div className="imgTitle">
						<h4>{this.props.feed.title}</h4>
					</div>
					<div className="imgDesc">
						<h5>{this.props.feed.description}</h5>
					</div>
				</div>
			</Link>
		);
	}
}

export default TileList;