import React from "react";
import {DeleteTwoTone} from '@ant-design/icons';

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <div>

    <button onClick={props.onDelete}><DeleteTwoTone/></button>

    </div>
    
  </div>
);