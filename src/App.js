import React,{useState} from 'react'
import Products from './Products';

const App = () => {
    const [search,setSearch] = useState('');
    const [data,setData] = useState([]);
    const YOUR_APP_ID = "35fe144d";
    const YOUR_APP_KEY = "c1ebb26e88d8bb9826af03554775e7f0";
    const submitHandler = e =>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
            Response => Response.json()
        ).then(
            data => setData(data.hits)
        )

    }
    
    return(
        <div>
            <center>
                <h1>Food recipe</h1><br/>
                <form onSubmit={submitHandler}>
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <input type="submit" className = "btn btn-primary" value="Search"/>
                </form>
                {data.length>=1?<Products data = {data}/>:null}
            </center>
        </div>
    
    )
}
export default App
