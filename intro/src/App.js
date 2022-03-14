import './App.css';

import Stars from './components/Stars';

function App() {
const count = 0;
if ((count > 1 && count < 5) || count === 1 || count === 5) {
return (
    <div className = 'main'>
     {console.log(count)} 
<Stars count = {count}/>
    </div>
  )
  
}
  return null
}

export default App;

