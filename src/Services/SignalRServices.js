import { HubConnectionBuilder } from '@microsoft/signalr';

let connection;

export function startSignalRConnection(messageReceivedCallback) {
        
    connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7211/chatHub")
        .build();

    connection.start()
        .then(() => console.log('SignalR connected'))
        .catch(err => console.error('SignalR connection error: ', err));

    connection.on("ReceiveMessage", (msg) => {
        // console.log(`Message received from ${msg.user}: ${msg.content}`);
        messageReceivedCallback(msg);
    });
}

export async function sendMessage(msg) {
    try {
        connection.invoke("SendMessage", msg)
    } catch (err) { 
        console.error('Error sending message: ', err);
    }
}