import React,{useState} from "react"
import "../CSS/menu.css"
import NavBar from "../Components/NavBar"
import Footer from '../Components/Footer'

const meals=[
    "KOTTU","FRIED RICE","SEA FOOD",
    "BURGER","NASIGURAN","FRUIT SALAD",
    "SHWARMA","CHICKEN DEVEL","BURIYANI",
    "SUBMARINE","MIX RICE","IDI APPA"
]

const Foodmenu = ()=>{

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
        <>
        <div>
             <NavBar path1="/" name1="Home" path2="/rooms/" name2="Rooms" path3="/activities" name3="Activities" path4="/facilities" name4="Facilities" path5="/aboutUs" name5="About Us" pathSign="/signIn" LogName="Log In"></NavBar>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id='body'>
            <div id='searchLine'>
                Search <input type="text" value={searchValue} onChange={handleChangeWord}></input>
                {checkLength && <button onClick={clearButton}>Clear</button>}
            </div>

            <br></br>
            
            <div className='foodList  ul'>
                <h1>--------------------------------------- Menu ------------------------------------</h1>
                <ul>
                    {filterItems.map((foodItems) =>{
                                return <li key={foodItems}>{foodItems}</li>
                            })}
                </ul>
                   
            </div>
            
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}

export default Foodmenu
