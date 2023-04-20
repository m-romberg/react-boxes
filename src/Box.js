import React, { useState } from "react";

/** Box: Make a box element.
 *
 * Props:
 * - width: box width
 * - height: box height
 * - backgroundColor: color of box
 *
 */

function Box ({width, height, backgroundColor}) {
  const boxStyles = {
    width,
    height,
    backgroundColor
  }
  return <div style={boxStyles}></div>
}

export default Box