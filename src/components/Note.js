import React from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content.slice(0, 50)}</p>
      <button onClick={handleClick}>
        <DeleteTwoToneIcon />
      </button>
    </div>
  );
}

export default Note;
