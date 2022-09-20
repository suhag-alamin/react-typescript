import React from "react";
import LIst from "./LIst";

const Lists = () => {
  const items: string[] = ["item1", "item2", "item3"];
  const onClick: (item: string) => void = (item: string) => alert(item);
  return (
    <div>
      <LIst items={items} onClick={onClick} />
    </div>
  );
};

export default Lists;
