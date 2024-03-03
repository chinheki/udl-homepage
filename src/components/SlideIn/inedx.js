import React,{ useState, useEffect, Children  } from "react";
import './SlideIn.css'
export function check_if_in_view(className,addClassName) {
  const animation_elements = document.querySelectorAll(className);
  const bottom = document.querySelector("#root").getBoundingClientRect().bottom;
  const top = document.querySelector("#root").getBoundingClientRect().top;
  animation_elements.forEach((e) => {
    if (
      e.getBoundingClientRect().top <= bottom &&
      e.getBoundingClientRect().bottom >= top
    ) {
      e.classList.add(addClassName);
    } else {
      e.classList.remove(addClassName);
    }
  });
}
const SlideIn = ({ children, side, distance, delay }) => {
  return (
    <div className={`slide-container from-${side}`}>
      {Children.map(children, (e, i) => (
        <div
          className='animation-element'
          style={{
            transitionDelay: `${delay ? delay * i : 0}ms`,
            transform:
              side === "left"
                ? `translateX(${distance ? -1 * distance : -100}px)`
                : side === "right"
                ? `translateX(${distance ? distance : 100}px)`
                : side === "top"
                ? `translateY(${distance ? -1 * distance : -100}px)`
                : `translateY(${distance ? distance : 100}px)`
          }}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default SlideIn
