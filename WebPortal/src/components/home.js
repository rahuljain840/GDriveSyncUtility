import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IndexRoute } from 'react-router';
import TileList from './tileList.js';
import { getData } from '../dataapi/api.js';
import _ from 'lodash';
import EditTable from './shared/editableTable.js';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feeds: []
		};
	}

	formatData(feeds) {
		return feeds.map(f => {
			return {
				columns: [
					{ value: f.Id },
					{ value: f.Name },
					{ value: f.IsNew },
					{ value: f.Updated },
					{ value: f.Deleted }
				]
			};
		});
	}

	componentDidMount() {
		getData().then(feeds => {
			feeds = this.formatData(feeds);

			this.setState({ feeds });

		}, error => {
			console.log(error);
		});
	}

	render() {
		return (
			<div>
				<div className="parentBox container">
					<h1 className="headingTitle"> RSS Feeds </h1>
					{/*{
						_.map(this.state.feeds, ((feed, i) => <TileList key={i} feed={feed} />))
					}*/}

					<EditTable rows={this.state.feeds} />
				</div>
			</div>
		);
	}
}

export default Home;