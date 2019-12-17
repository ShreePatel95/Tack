import React from 'react';
import CreateChannelContainer from '../channel_form/create_channel_form_container';
import Modal from '../modal/modal';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';


class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {logout, session, user} = this.props
        return (
            <div className="sidebar-container">
                <div className="client-logo-dropdown">
                    <h2 className="client-logo">tack-aa<i class="fas fa-angle-down arrow-down"></i></h2>
                    <p className="client-logo-name"><i className="fas fa-thumbtack tack-size"></i>{this.props.currentUser.name}</p>
                </div>
                <button className="signup-button" onClick={logout}>Logout</button>
                <div className="channels-container">
                    <h3>Channels</h3>
                </div>
                <div className="channel-modal">
                    <Modal />
                </div>
            </div>
        );
    }
}

export default Sidebar;