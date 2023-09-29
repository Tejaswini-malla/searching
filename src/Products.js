import React from 'react'
const Products=({data})=>{
    return(
        <div> 
            <div className="row">
                {data.map(data => 
                <div class="col-md-4">
                    <div class="card" style={{"width":"19rem"}}>
                        <img class="card-img-top" src={data.recipe.image} alt="Card image cap"/>
                        <div class="card-boby">
                        <center>
                            <h5 class="card-title">{data.label}</h5>
                            <p class = "card-text">Total Amount of Calories : {data.calories}</p>
                            <a href = "#" class="btn btn-primary">Buy</a>
                        </center>
                    </div>
                    
                    </div>
                    </div>
                    
                    
                    
                    
                    
                    )}
        </div>
        </div>
    )
}
export default Products;