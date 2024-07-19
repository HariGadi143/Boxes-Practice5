import React from "react";
import styles from "./Boxes.module.css";

const Boxes = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapperContainer}>
        <h1>Boxes</h1>
        <div className={styles.boxesWrapper}>
          {boxesList.map((box, index) => {
            return (
              <div
                key={box?.id}
                className={styles.boxItem}
                style={{
                  backgroundColor: box?.bakground,
                  height: box?.height,
                  width: box?.width,
                }}
              >
                {box?.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Boxes;

const boxesList = [
  {
    id: 1,
    title: "Small",
    height: "100px",
    width: "100px",
    bakground: "#fbbf24",
  },
  {
    id: 2,
    title: "Medium",
    height: "200px",
    width: "200px",
    bakground: "#38bdf8",
  },
  {
    id: 3,
    title: "Large",
    height: "400px",
    width: "400px",
    bakground: "#ec4899",
  },
];
