import React,{useState} from "react"
import "../CSS/menu.css"


const meals=[
    "KOTTU","FRIED RICE","SEA FOOD",
    "BURGER","NASIGURAN","FRUIT SALAD",
    "SHWARMA","CHICKEN DEVEL","BURIYANI",
    "SUBMARINE","MIX RICE","IDI APPA"
]

const Menu = ()=>{

    const[searchValue,setSearchValue]=useState("")

    const handleChangeWord =(event)=>{
        setSearchValue(event.target.value)
    }

    const clearButton=()=>{
        setSearchValue("")   
    }

   meals.map((foodItems)=>{
       return foodItems.toUpperCase()
   })

    const filterItems = meals.filter((foodItems)=>{
        return foodItems.includes(searchValue.toUpperCase())
    })
    const checkLength = searchValue.length > 0
    console.log(checkLength)

    return(
        <div id='body'>
            <div id='searchLine'>
                Search <input type="text" value={searchValue} onChange={handleChangeWord}></input>
                {checkLength && <button onClick={clearButton}>Clear</button>}
            </div>

            <br></br>
            
            <div className='foodList'>
                <h1>--------------------------------------- Menu ------------------------------------</h1>
                <ul>
                    {filterItems.map((foodItems) =>{
                                return <li key={foodItems}>{foodItems}</li>
                            })}
                        
                </ul>
                
                
                    
            </div>
            
            
        </div>
        
    )
}

export default Menu
