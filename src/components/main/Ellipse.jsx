import React from "react";

function Ellipse({ ellipseitem }) {
  return (
    <React.Fragment>
      {ellipseitem ? (
        <div className='ellipse'>
          {ellipseitem.map((type, i) => (
            <div key={i} className={`ellipse-item ${type}`}></div>
          ))}
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default Ellipse;
