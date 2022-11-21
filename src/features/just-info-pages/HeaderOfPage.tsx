import React from "react";
import classes from "./headerOfPage.module.css";

export const HeaderOfPage: React.FC<{
  handleDarkMode: (isDark: boolean) => void;
}> = ({ handleDarkMode }) => {
  return (
    <div className="flex">
      <div className="w-3/12">
        
      </div>
      <header className="w-9/12">
        <div className="flex align-right pr-4 2xl:pr-12">

        <div className="ml-auto">
          <span className="inline-block mx-2 font-semibold text-neutral-500">Light</span> 
          <label className={classes.switch}>
            <input
              onChange={(e) => handleDarkMode(e.target.checked)}
              type="checkbox"
            />
            <span className={classes.slider}></span>
          </label>{" "}
          <span className="inline-block mx-1 font-semibold text-neutral-500">Dark</span> 
        </div>
        </div>
        
      </header>
    </div>
  );
};