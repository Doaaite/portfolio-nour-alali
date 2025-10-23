import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    const moveDot = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // النقطة تتحرك مباشرة مع الدائرة
      dot.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    };

    const animateCursor = () => {
      // الدائرة تلحق النقطة ببطء
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      
      // تحديث موضع النقطة لتصبح في منتصف الدائرة
      dot.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", moveDot);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", moveDot);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
    </>
  );
};

export default CustomCursor;