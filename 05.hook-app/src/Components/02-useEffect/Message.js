import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message mounted");

    return () => {
      console.log("Message unmounted");
    };
  }, []);

  return (
    <>
      <h2>Message</h2>
    </>
  );
};