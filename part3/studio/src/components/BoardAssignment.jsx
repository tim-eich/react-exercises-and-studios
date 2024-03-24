import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: 'Cakes',
         value: 'cakes'
      },
      {
         label: 'Desserts',
         value: 'desserts'
      },
      {
         label: 'Baked Goods',
         value: 'bakedGoods'
      }
   ];

   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value ={ boardName } onChange={ handleChange }>
         { boards.map(( data ) =>{
            return (
               <option value ={ data.value }>{ data.label }</option>
            );
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
