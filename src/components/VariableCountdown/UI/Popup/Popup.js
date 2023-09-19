import React, { useEffect, useState } from "react";
import "./Popup.css";

const Popup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0); // Add a key to force remounting the component

  useEffect(() => {
    // Show the popup
    setTimeout(() => {
      setVisible(true);

      // Hide the popup and close it after 1.8 seconds
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onClose();
          // Increment the key to force remounting the component
          // This is a solution to the face the component wouldn't remount when the user reset the timer
          setKey(key + 1);
        }, 300); // Close after the scale-down animation (0.3s)
      }, 1800); // Hide after 1.8 seconds
    }, 0); // Show immediately

  }, [onClose, key]);

  // CSS class to control the scaling animation
  const popupClass = `popupWrapper ${visible ? "popup-visible" : ""}`;

  return (
    <div key={key} className={popupClass}>
      <div className="popupBackground">
        <h2 className="popupHeading">Time's Up!</h2>
        <p>Your countdown has finished.</p>
      </div>
    </div>
  );
};

export default Popup;
