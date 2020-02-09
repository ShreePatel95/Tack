import React from 'react';
import InternalNavbarContainer from './internal_navbar_container';
import ChatRoom from './chat_room/ChatRoom';

class ChannelDetail extends React.Component {

    componentDidMount(){
        this.props.getChannel(this.props.match.params.channelId);
    }

    render(){
        const { channel } = this.props;
        if (!channel) return null;
        return (
            <div>
                <InternalNavbarContainer channel={channel}/>
                <h2>{channel.title}</h2>
                <p>{channel.description}</p>
                <ChatRoom />
            </div>
        )
    }

}

export default ChannelDetail;