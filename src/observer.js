import "animate.css";
import { test } from "./selector";



export const observation2 = (animateItem, animation) => {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", animation);
          console.log("Section is now visible!");
        } else {
          entry.target.classList.remove("animate__animated", animation);
          console.log("invisible");
        }
      });
    },
    {
      root: null, // relative to the viewport
      rootMargin: "0px", // margin around the root
      threshold: 0.01,
    }
  );

  observer.observe(animateItem);
};



export const observation6 = (name, animation) => {
  // Select the element to observe
  const aboutMe = name;

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      console.log(entries);

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", animation);
          console.log("Section is now visible!");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInRightBig"
          );
        }
      });
    },
    {
      root: null, // relative to the viewport
      rootMargin: "0px", // margin around the root
      threshold: 0.2, // trigger callback when 10% of the element is visible
    }
  );

  aboutMe.forEach((me) => {
    observer.observe(me);
  });
  // Start observing the selected element
};
