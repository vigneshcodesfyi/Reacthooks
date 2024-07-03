import {React,useEffect,useMemo,useState} from 'react'

const Memo = () => {

  const [number, setnumber] = useState(0)
    const test = useMemo(()=>{

      return ab(number);
    },[number]) 
    const [number1, setnumber1] = useState(0)

    useEffect(()=>{

      return ab(number);
    },[number]) ;

    
    function ab(number){


      for (let i = 0; i < 10000; i++) {
       console.log("hello")
       console.log("i ")
       console.log("vicky ")


      }

      return number*10;
    }
  return (
    <>
    
   <input type='number' value={number} onChange={(e)=>setnumber(e.target.value)}/>

   <p>The value is {test}</p>
<p>
{number1}
</p>

   <button onClick={()=>setnumber1((prev)=>prev+1)}> add</button>
    </>
  )
}

export default Memo