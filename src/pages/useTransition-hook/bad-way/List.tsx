import { useState } from "react";

const List = () => {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  function handleChange(e: any) {
    setName(e.target.value);
    const largeList: string[] = [];

    for (let i = 0; i < 10000; i++) {
      largeList.push(e.target.value);
    }

    setList(largeList);
  }

  return (
    <div style={{ position: "absolute", top: 10 }}>
      <h3>Bad transition example: </h3>
      <p>Type something</p>
      <div className="my-input">
        <input type="text" value={name} onChange={handleChange} />
        {list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default List;
