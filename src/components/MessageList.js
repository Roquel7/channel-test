import React from 'react'
import { connect } from 'react-redux'

import InputMessage from './InputMessage'
import { addMessage, fetchMessages } from '../actions'
import { db } from '../services/firebase'

class MessageList extends React.Component {

    // componentDidMount() {
    //     db.collection('messages')
    //         .onSnapshot(querySnapshot => {
    //             let messages = []
    //             querySnapshot.forEach(doc => {
    //                 let messageObject = {
    //                     id: doc.id,
    //                     ...doc.data()
    //                 }
    //                 messages.push(messageObject)
    //                 this.setState({
    //                     messages
    //                 })
    //             })
    //         })
    // }

    renderMessages() {
        return this.props.messages.map((message, key) => {
            return <div key={ key } > { message.name} </div>
        })
    }

    // renderInput() {
    //     if (this.props.selectedChannel) {
    //         return <InputMessage submit={ this.submitMessage } />
    //     }
    // }

    renderInput() {
            return <InputMessage submit={ this.submitMessage } />
    }
    
    submitMessage = message => {
        this.props.addMessage(message, 1, this.props.selectedChannel)
    }

    render()  {
        return (
            <div className="item">
                { this.renderMessages() }
                { this.renderInput() }
            </div>
        )
    }

}

const mapStateToProps = state => {
    let messages = state.messages.filter(message => message.postId === state.selectedChannel)
    return {
        messages: messages, 
        selectedChannel: state.selectedChannel
    }
}

const mapDispatchToProps = {
    addMessage, 
    fetchMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)