import './App.css'
import avatar from './assets/chicken.png';

function App() {
 
  return (
    <>

      <div className="app-container">
        
        
        <div className="app">

            <div className="app-time">
              <span className="time">09:10</span>
              <span className="date">26 May</span>
            </div>



            <div className="app-user">
              <img src={avatar} alt="" className='app-user__avatar' />
              <div className="app-user__info">
                <span>Welcome!</span>
                <span className="app-user__info-name">M Kunal</span>
              </div>
            </div>


        </div>
      
      
      </div>
    
    </>
  )
}

export default App
