import { toast } from "react-toastify";
import React from "react";

const showToast = {
  sucess: ({ title, message }) => {
    return toast.success(<ContentToast title={title} message={message} />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },

  error: ({ title, message }) => {
    return toast.error(<ContentToast title={title} message={message} />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },

  info: ({ title, message }) => {
    return toast.info(<ContentToast title={title} message={message} />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },

  warn: ({ title, message }) => {
    return toast.warn(<ContentToast title={title} message={message} />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },

  default: ({ title, message }) => {
    return toast(<ContentToast title={title} message={message} />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },

  dark: ({ title, message }) => {
    return toast.dark(<ContentToast title={title} message={message} />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
};

const ContentToast = ({ title, message }) => (
  <div>
    <h3>{title}</h3>
    <p>{message}</p>
  </div>
);

export default showToast;
