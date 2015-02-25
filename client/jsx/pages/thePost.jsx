var React = require('react');
var req = require('superagent');
var Router = require('react-router');

var PostHeader = require('../ui/postHeader.jsx');
var PostBody = require('../ui/postBody.jsx');

var ThePost = module.exports = React.createClass({
	render: function(){
		return (
			<div className='thePostPage'>
				<div className='container'>
					<PostHeader />
					<PostBody />
				</div>
			</div>
			);
	}
});