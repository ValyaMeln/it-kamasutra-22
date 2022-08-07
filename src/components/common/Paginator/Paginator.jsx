import * as axios from "axios";
import React, { useState } from "react";
import style from "./Paginator.module.css";
import cn from 'classnames'


let Paginator = (props) => {
  //totalUsersCount => totalItemCount 
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesCount = Math.ceil(props.totalItemCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionSize = 7;
  //portionSize   ??? прокинути через пропси
  let portionCount = Math.ceil(pagesCount / portionSize);
  console.log(portionCount);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;




  return (

    <ul className={style.selectedPage_wrapper}>

      {portionNumber > 1 &&
        <button className={style.btnPaginator} onClick={() => { setPortionNumber(portionNumber - 1) }}> PREV</button>
      }
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          // return <li className={props.currentPage === p ? style.selectedPage : style.page}
          return <li className={cn ({
                [style.selectedPage]: props.currentPage === p
              }, style.pageNumber)}
            key={p}
            onClick={(e) => {
              props.onPageChanged(p);
            }}> {p}</li>
        })}
      {portionCount > portionNumber &&
        <button className={style.btnPaginator} onClick={() => { setPortionNumber(portionNumber + 1) }}> NEXT</button>
      }

    </ul>


  )

}


export default Paginator;