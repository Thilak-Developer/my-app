
import './data.css';
import Information from './Information';

function Data() {
  return (
  <div >
    <h1>My Name Is : {Information[0].name} </h1>
    <h2>Age :{Information[0].age}</h2>
    <h3>Education :{Information[0].education}</h3>
    <h4>Mother Tongue :{Information[0].tongue}</h4>
    <h5>Hobby :{Information[0].hobby}</h5>
  </div>
  )}

export default Data;
