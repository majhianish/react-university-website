import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
   <Wrapper>
    {isVisible && (
        <div className="top-bt" onClick={goToBtn}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#2bb5f0' className="w-6 h-6 top-bt--icon">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
</svg>

        </div>
     )}
   </Wrapper>
  );
};

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
position: relative;

.top-bt {
  font-size: 2.4rem;
  width: 4rem;
  height: 4rem;
  color: #1369f2;
  border-radius: 50%;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &--icon {
    animation: gototop 1.2s linear infinite alternate-reverse;
  }

  @keyframes gototop {
    0% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(1rem);
    }
  }
}
`;
export default GoToTop;

