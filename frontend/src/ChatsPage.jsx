import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'b79f2a5d-d5a2-4513-ae22-cd4e6e2c0fda', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style = {{height: '100vh'}}>
        <MultiChatSocket {...chatProps} /> 
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div> 
    )
}

export default ChatsPage