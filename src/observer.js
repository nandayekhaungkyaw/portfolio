import 'animate.css';

export const observation = () => {
  // Select the element to observe
  const aboutMe = document.querySelector("#aboutMe");

  if (!aboutMe) return; // Ensure the element exists

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    
    entries.forEach(entry => {
      if (entry.isIntersecting ) {
        entry.target.classList.add('animate__animated', 'animate__fadeInRightBig');
        console.log('Section is now visible!');
        observer.unobserve(entry.target);
       
      } else {
        entry.target.classList.remove('animate__animated', 'animate__fadeInRightBig');
       
      }
    });
  }, {
    root: null, // relative to the viewport
    rootMargin: '0px', // margin around the root
    threshold: 0.2 // trigger callback when 10% of the element is visible
  });

  // Start observing the selected element
  observer.observe(aboutMe);
};

export const observation2 = () => {
  const ui = document.querySelector("#uiUx");
  

  if (!ui) return; // Ensure the element exists

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting  ) {
        entry.target.classList.add('animate__animated', 'animate__fadeInBottomLeft');
        console.log('Section is now visible!');
        observer.unobserve(entry.target);
       
      } else {
        entry.target.classList.remove('animate__animated', 'animate__fadeInBottomLeft');
        console.log('invisible');
       
      }
    });
  }, { threshold: 0.1 });

  observer.observe(ui);
};

export const observation3 = () => {
  const ui = document.querySelector("#heroSection");

  if (!ui) return; // Ensure the element exists

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInBottomRight');
        console.log('Section is now visible!');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('animate__animated', 'animate__fadeInBottomRight');
        console.log('invisible');
      }
    });
  }, { threshold: 0.2 });

  observer.observe(ui);
};

export const observation4 = () => {
  const ui = document.querySelector("#frontend");

  if (!ui) return; // Ensure the element exists

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInBottomLeft');
        console.log('Section is now visible!');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('animate__animated', 'animate__fadeInBottomLeft');
        console.log('invisible');
      }
    });
  }, { threshold: 0.2 });

  observer.observe(ui);
};

export const observation5 = () => {
    const ui = document.querySelector("#footer");
  
    if (!ui) return; // Ensure the element exists
  
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInBottomRight');
          console.log('Section is now visible!');
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('animate__animated', 'animate__fadeInBottomRight');
          console.log('invisible');
        }
      });
    }, { threshold: 0.2 });
  
    observer.observe(ui);
  };
