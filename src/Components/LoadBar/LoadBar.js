import React from "react";
import "./LoadBar.css";

const LoadBar = () => {
  return (
    <div className="Container">
      <div className="Card">
        <div className="Box">
          <div className="Percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="Number">
              <h2>
                90<span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="Text">Html</h2>
        </div>
      </div>

      <div className="Card">
        <div className="Box">
          <div className="Percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="Number">
              <h2>
                85<span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="Text">CSS</h2>
        </div>
      </div>

      <div className="Card">
        <div className="Box">
          <div className="Percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="Number">
              <h2>
                60<span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="Text">Javascript</h2>
        </div>
      </div>
    </div>
  );
};

export default LoadBar;
