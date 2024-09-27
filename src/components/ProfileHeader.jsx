import { useState } from "react";

export default function ProfileHeader({ url, name }) {
  const [roundedPhoto, setRoundedPhoto] = useState("rounded-full");

  const handleDoubleClick = () => {
    if (roundedPhoto === "rounded-full") {
      setRoundedPhoto("rounded-md");
    } else {
      setRoundedPhoto("rounded-full");
    }
  };

  return (
    <>
      <div className="flex-column items-center justify-center p-4">
        <div
          onDoubleClick={handleDoubleClick}
          className={`${roundedPhoto}  w-[150px] rounded-full overflow-hidden`}
        >
          <img src={url} alt="Avatar" />
        </div>
        <div className="text-center">{name}</div>
      </div>
    </>
  );
}
