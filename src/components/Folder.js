import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  return explorer.isFolder ? (
    <div>
      <span onClick={() => setExpand(!expand)}>
        {explorer.name}
        <br />
      </span>

      <div style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}>
        {explorer.items.map((exp) => {
          return <Folder key={exp.name} explorer={exp} />;
        })}
      </div>
    </div>
  ) : (
    <span>
      {explorer.name}
      <br />
    </span>
  );
}

export default Folder;
