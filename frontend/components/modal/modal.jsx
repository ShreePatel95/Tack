import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannelFormContainer from '../channel_form/create_channel_form_container';
import UpdateChannelFormContainer from '../channel_form/update_channel_modal';
import InviteMembersFormContainer from '../channel_form/invite_members_form_container';
import RemoveMembersFormContainer from '../channel_form/remove_members_form_container';
import { withRouter } from 'react-router-dom';

function Modal({modal, closeModal}){
    // let addChannel = <button className="add-channel-button" onClick={() => dispatch(openModal('Create Channel'))}><i className="fas fa-plus plus-icon"></i>Add a channel</button>;
    if(!modal){
        return null;
    }
    let component;
    switch(modal){
        case 'Create Channel':
            component = <CreateChannelFormContainer />
            break;
        case 'Update Channel':
            component = <UpdateChannelFormContainer />
            break;
        case 'Invite Members':
            component = <InviteMembersFormContainer />
            break;
        case 'Remove Members':
            component = <RemoveMembersFormContainer />
            break;
        default:
            return null;
    }

    return (
        <div>
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    debugger;
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));