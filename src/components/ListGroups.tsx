import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
// import { MouseEvent } from "react";

interface Props {
  items : string[]; 
  heading : string;
  onSelectItem: (item: string)=>void;
}

function ListGroups({items, heading, onSelectItem}: Props) {
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // }; //event handler
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      {/* fragment tool */}
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index);
            onSelectItem(item);
            }}
          >
            {item}
          </ListGroup>
        ))}
        ;
        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
    </>
  );
}

export default ListGroups;
