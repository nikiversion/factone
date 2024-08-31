import { Link } from 'react-router-dom';
import Data from './info.json';
import './info.css';


const Info = () => {

  return (
    <div className='infomain'>
      {
        Data.map(data=>
          <div className='infocontainer'>
            
              <div style={{color:'red', fontSize:'30px'}}>{data.title}</div>
           
            
              <div align='center'><img src={data.image}/></div>
            
       
              <p>{data.story}</p>
             <Link to={data.location}> <button>వివరంగా</button></Link>
           
          </div>)
      }
    </div>
  )
}

export default Info


