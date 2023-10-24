import React from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

function Note(props) {
  const truncatedContent =
    props.content.length > 20
      ? props.content.substring(0, 20) + "..." // Display only the first 20 characters with an ellipsis
      : props.content;

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{truncatedContent}</p>
      <button onClick={handleClick}>
        <DeleteTwoToneIcon />
      </button>
    </div>
  );
}

export default Note;
