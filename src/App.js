import {io} from 'socket.io-client'
import { useEffect, useState } from 'react';
import CreateUser from './component/CreateUser';
import OnlineUsers from './component/OnlineUsers';
import MessageContainer from './component/MessageContainer';

const socket = io(`http://localhost:8000`);

function App() {
  const [step, setStep] = useState(1);
  const [username,setUsername]= useState(" ");
  const [users, setUsers]  = useState({});
  const [message, setMessage] = useState('');
  const [reciever, setReciever] = useState('')
  const [media, setMedia] = useState(null);

  const handleSetUsername = ()=>{
    console.log(username)
    socket.emit('new_user',username)
    setStep(2);
  }
  const selectUser = (name) =>{
    setReciever(name)
    setStep(3);
  }
  const handleGoBack= () => {
    setStep(2); 
  }
  const sendMessage = (e) =>{
    e.preventDefault();
    const data={
      sender:username,
      message,
      reciever,
      media,
    }
    socket.emit('send_message',data);
  }
  useEffect(()=>{
    socket.on("new_user",(users)=>{
      console.log([users])
      setUsers(users);
    })
    socket.on('new_message',(data)=> {
      console.log('data');
    })
  },)

  return (
    <div className="container">
      <header className="container my-3 mx-auto text-center">
       <h1 className='text-white fw-bold'>Messenger App </h1>
      </header>
      <div className="card col-5 mx-auto">
        <div className="card-body p-0">
          {/* step- 1 */}
          {  step === 1 && <CreateUser handleSetUsername={handleSetUsername} value={username} onChange={setUsername} /> }
            {/* step 2 */}
            { step === 2 && <OnlineUsers username={username} data={users} selectUser={selectUser}/>}
            {/* step -3 */}
            { step ===3 && <MessageContainer recieve={reciever} value={message} onChange={setMessage} sendMessage={sendMessage} handleGoBack={handleGoBack}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
