// import Message from './Message';
import Alert from './components/Alert';
import ListGroups from './components/ListGroups'; 
import Button from './components/Button';
import { useState } from 'react';

function App (){
  const[alertVisible, setalertVisibility] = useState(false);

  let items = ["lamjung", "kathmandu", "pokhara", "bajura", "lalitpur"];
  const handleSelectItem = (item: string)=>{
    console.log(item)
  }
  return (
    <div>
      <ListGroups items={items} heading="cities" onSelectItem={handleSelectItem}/>
      {alertVisible && <Alert onClose={()=>{setalertVisibility(false)}}>
        Hello  World! This is an alert message. 
      </Alert>}
      <Button color="primary" onClick={()=>{setalertVisibility(true)}}>
        Button 
      </Button>
    </div>
  )
}

export default App;