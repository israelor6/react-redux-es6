import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import * as usersAction from '../../actions/usersActions';

import './users.css';

class Users extends React.Component {
	constructor(props) {
		super(props);
		Users.context = this;
	}

	render() {
		return (
			<div>
				<h1>Welcome!</h1>
				<hr/>
				<h3> this list are loaded from the App.jsx, to the store. the data rendered to user component by redux:)</h3>
				<div>
					<List>
						<Subheader>Users List</Subheader>
						{this.props.users.map(x => {
							return <ListItem
								key={x.id}
								primaryText={x.first_name}
								secondaryText={x.last_name}
								leftAvatar={<Avatar src={x.avatar}/>}
							/>
						})}
					</List>

				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		actions: bindActionCreators(usersAction, state),
		users: state.users.users
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(usersAction, dispatch)
	}
}

Users.propTypes = {
	actions: PropTypes.object.isRequired,
	users: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
