import React from "react";

function Button({ label, action }) {
  return (
    <div className="button-component" onClick={action}>
      {label}
    </div>
  );
}

export default Button;
