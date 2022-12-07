import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    console.log("Message mounted");

    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
      console.log(":D");
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      console.log("Message unmounted");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h2>
        Message with coords: x:{x} - y:{y}
      </h2>
    </>
  );
};
