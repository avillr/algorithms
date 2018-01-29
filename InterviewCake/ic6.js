//Write a function to find the rectangular intersection of two given love rectangles.
//   var myRectangle = {

//     // coordinates of bottom-left corner
//     leftX: 1,
//     bottomY: 5,

//     // width and height
//     width: 10,
//     height: 4,

// };

const rectangleA = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4
}
const rectangleB = {
  leftX: 2,
  bottomY: 6,
  width: 10,
  height: 4
}

function intersection (rectA, rectB) {
  return Object.assign({}, overlapY(rectA, rectB), overlapX(rectA, rectB));
}

function overlapX (rectA, rectB) {
  let aLeft = rectA.leftX;
  let aRight = aLeft + rectA.width;

  let bLeft = rectB.leftX;
  let bRight = bLeft + rectB.width;

  if (aLeft < bLeft) {
    return {leftX: bLeft, width: aRight - bLeft};
  } else {
    return {leftX: aLeft, width: bRight - aLeft};
  }
}

function overlapY (rectA, rectB) {
  let aBottom = rectA.bottomY;
  let aTop = aBottom + rectA.height;

  let bBottom = rectB.bottomY;
  let bTop = bBottom + rectB.height;

  if (aBottom < bBottom) {
    return {bottomY: bBottom, height: aTop - bBottom};
  } else {
    return {bottomY: aBottom, height: bTop - aBottom};
  }
}

console.log(intersection(rectangleA, rectangleB));
