import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Skills from './Component/Profile/skills';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/> 
    <header className="App-header">
        
        <FullName/>
        <Skills/>
        <Address/>
    </header>
    </div>
  );
}

export default App;
