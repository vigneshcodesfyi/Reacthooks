import React from 'react'

const List = () => {

    const text = ["abc","def","jkl"]
  return (
    <div>

<ul>
    {text.map((num)=>{
        return <li>{num}</li>
    })}
</ul>


    </div>
  )
}

export default List