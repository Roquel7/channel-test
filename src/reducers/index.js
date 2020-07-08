import { combineReducers } from 'redux'

function messagesReducer( messages = [], action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [
                ...messages,
                action.payload.message
            ]
        case 'DELETE_MESSAGE':
            return messages.filter( message => message.id !== action.payload.id)
        case 'FECTH_MESSAGES':
            return action.payload.messages
        default: 
            return messages
    }
}

function channelsReducer( channels = [], action ) {
    switch(action.type) {
        case 'ADD_CHANNEL':
            return channels
        case 'DELETE_CHANNEL':
            return channels
        default: 
            return channels
    }
}

function selectedChannel(selectedChannel = null, action) {
    if (action.type === 'SELECT_CHANNEL') {
      return action.payload.id
    }
    return selectedChannel
  }  

export default combineReducers({
    messages: messagesReducer,
    selectedChannel: selectedChannel,
    channels: channelsReducer
})