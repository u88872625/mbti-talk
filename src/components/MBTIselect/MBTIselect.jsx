import React, { useState } from "react";
import MBTItypes from "./MBTItypes";
import styles from "./MBTIselect.module.scss";

const MBTIselect = ({ onMBTISelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  console.log(selectedIndex);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    onMBTISelect(MBTItypes[index]);
  };

  return (
    <div className={styles.wrapper}>
      {MBTItypes.map((MBTI, index) => (
        <img
          key={index}
          src={MBTI.image}
          alt={MBTI.type}
          onClick={() => handleImageClick(index)}
          className={
            selectedIndex === index ? styles.selected : styles.notSelected
          }
        />
      ))}
    </div>
  );
};

export default MBTIselect;
