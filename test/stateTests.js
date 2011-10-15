var WorkerCanvas = require("../workercanvas/WorkerCanvas").WorkerCanvas;

exports.testStrokestyle = function(test) {
    var canvas = new WorkerCanvas(100, 200);
    canvas.strokeStyle = "rgba(1,1,1,1.0)";
    test.equals(canvas.strokeStyle, "rgba(1,1,1,1.0)", "faulty strokestyle");
    test.done();
};