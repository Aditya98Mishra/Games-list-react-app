import { useEffect, useState } from "react";
import "./form.css";

 export const Formdata = () => {
   const [formdata, setFormdata] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
       getData();
   });
const getData = () => {
    setLoading(true);
    fetch('http://localhost:3001/games')
    .then((db) => db.json())
    .then((res) => {
       setFormdata(res);  
       setLoading(false);
       
    });

};

    return  (
    <div id="form">
     
        <form>
             <input type="text" id="gamename" name="gamename" placeholder="GameName" required="True"/>
             <br/> <br/>
             <input type="text" id="gameauthor" name="gameauthor" placeholder="GameAuthor" required="True"/>
             <br/> <br/>
             <input type="text" id="gametags" name="gametags" placeholder="GameTags" required="True"/>
             <br/> <br/>
             <input type="number" id="gameprice" name="gameprice" placeholder="GamePrice" required="True"/>
             <br/> <br/>
             <input type="checkbox" id="forkids" name="forkids" required="True"/> <label>For kids</label>
             <br/> <br/>
             <input type="text" placeholder="Game Description" id="gamedesc" required="True" name="gamedesc" cols="30" rows="10"/><label>Game Dec</label>
             <br/><br/>
             <select name="gamerating" required="True" id="gamerating">
                 <option value="select Rating">Select Ratings</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
             </select>
             <br /><br />
             <button onClick={() => {
                 const data = {
                     gamename:document.getElementById("gamename").value,
                     gameauthor:document.getElementById("gameauthor").value,
                     gameprice:document.getElementById("gameprice").value,
                     gametags:document.getElementById("gametags").value,
                     forkids:document.getElementById("forkids").value,
                     gamedesc:document.getElementById("gamedesc").value,
                     gamerating:document.getElementById("gamerating").value,
                 };
                 fetch("http://localhost:3001/games", {
                     method: "POST",
                     body: JSON.stringify(data),
                     headers: {
                         "content-type" : "application/json",
                     },
                 }).then(getData);
             }}>Submit</button>
         </form>
        
        <table>
            <tr>
                <th>Game Name</th>
                <th>Game Author</th>
                <th>Game Tags</th>
                <th>Game Price</th>
                <th>For Kids</th>
                <th>Game Desc</th>
                <th>Rating</th>
           </tr>
           <tr>
                <td>
                {formdata.map((e,i) => (
                 <div key={e.id}>
                     {e.gamename}
                 </div>
             ))}
                </td>
                <td>
                {formdata.map((e,i) => (
                 <div key={e.id}>
                     {e.gameauthor}
                 </div>
             ))}
                </td>
                <td>
                {formdata.map((e,i) => (
                 <div key={e.id}>
                     {e.gametags}
                 </div>
             ))}
                </td>
                <td>
                {formdata.map((e,i) => (
                 <div key={e.id}>
                     {e.gameprice}
                 </div>
             ))}
                </td>
                <td>
                {formdata.map((e,i) => (
                 <div key={e.id}>
                     {e.forkids}
                 </div>
             ))}
                </td>
                <td>
                {formdata.map((e,i) => (
                 <div key={e.id}>
                     {e.gamedesc}
                 </div>
             ))}
                </td>
                <td>
                {formdata.map((e,i) => (
                 <div key={e.id}>
                     {e.gamerating}
                 </div>
             ))}
                </td>
           </tr>
        </table>
        {/* </div> */}
    </div>
    
  );
};