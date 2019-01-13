cardOneDiv = select('#card-one');
cardOneDiv.position(2.5*wUnit, hUnit);

cardOneDivWidth = constants.cardW*(.25*wUnit).toString();
cardOneDivHeight = constants.cardH*(.6*hUnit).toString();

cardOneDiv.style("width", cardOneDivWidth +'px');
cardOneDiv.style("height", cardOneDivHeight +'px');
