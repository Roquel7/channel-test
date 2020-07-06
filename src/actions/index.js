import Axios from 'axios'

export const addMessage = (text, userId, channelId) => {
    return {
        type: 'ADD_MESSAGE',
        payload: {
            message: {
                name: text,
                userId,
                postId: channelId
            }
        }
    }
}

export const fetchMessages = () => {
    return async (dispatch, getState) => {
        let response = await fetch 
        ('https://console.firebase.google.com/project/channel-project-r7/database/firestore/data~2Fmessages')
        let data = await response.json()
        dispatch({
            type: 'FETCH_MESSAGES',
            payload: {
                messages: data
            }
        })
    }
}

export const selectChannel = (id) => {
    return {
        type: 'SELECT_CHANNEL',
        payload: {
            id
        }
    }
}