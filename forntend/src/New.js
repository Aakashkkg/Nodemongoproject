import React,{useEffect,useState} from "react"
import axios from "axios";


function New1(){

var uri ="http://localhost:200/";

const [a,seta] = useState([])

function show(){
axios.get(uri+"co1").then((succ)=>{
console.log(succ);
seta(succ.data);

})
}

useEffect(()=>{
show();
},[])


    return(

<>

{/* <table className="table">
    <thead>
        <tr>
<th>_ID</th>
<th>Name</th>
<th>Email</th>
<th>Contact</th> 
       </tr>
    </thead>

<tbody>
{a.map((row)=>(
<tr key={row._id}>
<td>{row._id}</td>
<td>{row.Name}</td>
<td>{row.Email}</td>
<td>{row.Contact}</td>
</tr>
))}


</tbody>


</table> */}



</>


    )
    


}

export default New1;