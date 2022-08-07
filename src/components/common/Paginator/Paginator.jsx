import * as axios from "axios";
import React from "react";
import s from "./Paginator.module.css";



let Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }


  
  return (
    // <div>
      <ul className={s.selectedPage_wrapper}>
        {pages.map(p => {
          return <li className={props.currentPage === p ? s.selectedPage : s.page}
            onClick={(e) => { props.onPageChanged(p); }}> {p}</li>
        })}

      </ul>
     
    // </div>
  )

}


export default Paginator;