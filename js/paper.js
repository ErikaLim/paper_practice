tool.fixedDistance = 50;

var secondLayer = new Layer ();
function onMouseMove(event) {
  // The radius of the circle is the distance we moved
  // divided by 2:
  var radius = event.delta.length / 2;

  // Create a circle shaped path at the point in the middle between
  // the current position of the mouse and the last position of
  // the mouse:
  var secondPath = new Path.Circle({
    center: event.middlePoint,
    radius: radius
  });

  // The hue is defined by the amount of times the onMouseMove
  // event has been fired, multiplied by 10:
  secondPath.fillColor = {
    hue: event.count * 3,
    saturation: 1,
    brightness: 1
  };

  // If we created at least 8 paths, remove the first
  // path in the layer.
  if (secondLayer.children.length > 10)
    secondLayer.firstChild.remove();
}
