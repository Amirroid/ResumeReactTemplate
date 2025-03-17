import React from "react";

export default function IconButton({ children }) {
    return (
        <button className="group text-white border border-1.5 rounded-full border-white w-12 h-12
                           cursor-pointer transition-all duration-200 ease-in-out
                           hover:text-black hover:bg-white active:scale-95 
                           focus:outline-none focus:ring focus:ring-white/50 select-none">
            <div className="w-full h-full flex items-center justify-center">
                {React.cloneElement(children, {
                    className: "w-6 h-6 transition-colors duration-200 group-hover:fill-black fill-white"
                })}
            </div>
        </button>
    )
}