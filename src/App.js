import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  const test = ()=>{
    Notification.requestPermission().then( (result)=> {
     
      console.log(result);
      if(Notification.permission === 'granted'){
    var notification2= new Notification('임, How are you?');
    notification2.onshow = (a,b,c)=>{
      console.log(a,b,c);
    }
      notification2.onclick = function() {
        window.open('http://stackoverflow.com/a/13328397/1269037');
        };
      }
      //showNotification();
     // setTimeout(() => greeting.close(), 10*1000);
    });
  }
  const show = ()=>{
    console.log(Notification.permission);
    if(Notification.permission === 'granted'){
    var notification= new Notification('H123213123123i, How are you?');
    notification.onshow = ()=>{
      console.log('show?');
    }
      notification.onclick = function() {
        window.open('http://stackoverflow.com/a/13328397/1269037');
        };
      }
      console.log(notification);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={()=>{test()}}>button</button>
          <button onClick={()=>{show()}}>button</button>
        </p>
      </header>
    </div>
  );
}

export default App;
