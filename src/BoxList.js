import { v4 as uuid } from ‘uuid’;
import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from './Box';


/**
 *
 * This component should render all of the Box components
 * along with the NewBoxForm component.

  /** BoxList: makes a b.
 *
 * State:
 * - Boxes array
 */
 function BoxList() {
  const [boxes, setBoxes] = useState([]);

    /** Add new box object to boxes. */
    function addBox(box) {
      let newBox = { ...box, id: uuid() };
      setItems(box => [...box, newBox]);
    }

    function renderBoxes() {
      return (
          <ul>
            {boxes.map(box => (
              <Box key={box.id} styles={box}/>
               ))}
          </ul>
      );
    }
 }