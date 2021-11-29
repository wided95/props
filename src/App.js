
import './App.css';
import Profile from './profile/Profile';
import image from './téléchargement.png';
function App() {
  const handleName=(x)=>alert(x);
  return (
    <div className="App">
      <header className="App-header">
        <Profile handleName={handleName} fullName="wided" level="master degree"  profession="developper">
          <img src={image}/>
          </Profile>
      </header>
    </div>
  );
}


export default App;
