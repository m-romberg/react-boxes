
/** Box: Make a box element.
 *
 * Props:
 * - width: box width
 * - height: box height
 * - backgroundColor: color of box
 *
 */

function Box (styles) {
  const {width, height, backgroundColor} = styles;

  const boxStyles = {
    width,
    height,
    backgroundColor
  }
  return <div style={boxStyles}></div>
}

export default Box