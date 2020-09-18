import React from "react";
import showToast from "../../utils/toast";

const ButtonShowToast = ({ type, title, message, children }) => {
  const typeButton = type;

  const returnColorButton = () => {
    switch (typeButton) {
      case "sucess":
        return "#07bc0c";
      case "error":
        return "#e74c3c";
      case "info":
        return "#3498db";
      case "warn":
        return "#f1c40f";
      case "default":
        return "#FFF";
      case "dark":
        return "#121212";
      default:
        return "#FFF";
    }
  };

  return (
    <button
      style={{
        backgroundColor: returnColorButton(),
        border: "none",
        padding: "10px",
        margin: "5px",
        cursor: "pointer",
        borderRadius: "12px",
      }}
      onClick={() =>
        showToast[`${type}`]({
          title: `${title}`,
          message: `${message}`,
        })
      }
    >
      {children}
    </button>
  );
};

export default ButtonShowToast;
