var count = 3;
tool.fixedDistance = 100;

var layer = new Layer();
function onMouseMove(event) {
  var ellipse = new Path.Ellipse(10, 20, 200, 100);
  ellipse.fillColor = {
    hue: event.count * 3,
    saturation: 1,
    brightness: 1
  };

  var symbol = new Symbol(ellipse);
  for (var i = 0; i < count; i++) {
    var center = Point.random() * view.size;
    var placedSymbol = symbol.place(center);
    placedSymbol.scale(i / count);
  }

  if (layer.children.length > 10)
    layer.firstChild.remove();


}
