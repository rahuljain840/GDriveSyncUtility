import React from 'react';
import axios from 'axios';
import { getData } from '../dataapi/api.js';
import PropTypes from 'prop-types';

class TileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: {}
        };
    }

    componentDidMount() {
        getData().then(feedsRes => {
            var feeds = feedsRes.filter(function (s) {
                if (s.title.toLowerCase().includes(this.props.match.params.feed.toLowerCase())) {
                    return s;
                }
            }.bind(this));
            this.setState({ feed: feeds[0] });

        }, error => {
            console.log(error);
        });
    }

    render() {
        return (
            <Info tile={this.state.feed} />
        );
    }

}

const Info = ({ tile }) => {
    return (
        <div className="description form-group divTable">

            <div className="headRow">
                <div>RSS Feed Details</div>
            </div>
            <img className="imgTile" alt={tile.url} src={tile.url} />
            <div className="divRow">
                <div className="divCell">Title :</div>
                <div className="divCell">{tile.title}</div>
            </div>

            <div className="divRow">
                <div className="divCell">Description :</div>
                <div className="divCell">{tile.description}</div>
            </div>

        </div>
    );
};

export default TileForm;