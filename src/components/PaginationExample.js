import React from 'react';

const PaginationExample = () => {
  return (
    <div className="ui two column centered grid">
      <div className="ui pagination menu">
      <a className=" item"> Previous </a>

        <a className="active item">1</a>
        <a className=" item">2</a>
        <a className=" item">3</a>
        <a className=" item">4</a>
        <div class="disabled item">
           ...
         </div>
         <a className=" item">Next  </a>

      </div>
    </div>
  )
}


export default PaginationExample;
