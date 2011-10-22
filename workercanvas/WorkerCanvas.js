function WorkerCanvas(width, height) {
    var i,j,row;
    
    this._width = width;
    this._height = height;
    this._x = 0;
    this._y = 0;
    this._strokeStyle = "rgb(0,0,0)";
    this._pa = [];
    
    for (i = 0; i < w ; i++) {
        row = this._pa[i] = [];
        for (j = 0; j < h; j++) {
            row[j] = [0,0,0,0];
        }
    }
}

exports.WorkerCanvas = WorkerCanvas;

Object.defineProperty(WorkerCanvas.prototype, "strokeStyle", {
    set: function(style) {
        this._strokeStyle = style;
    },
    get: function() {
        return this._strokeStyle;
    }
});    

WorkerCanvas.prototype.moveTo = function(x, y) {
    this._x = x;
    this._y = y;
};

WorkerCanvas.prototype.clearRect = function(x, y, w, h) {
    var i,j,row,p,
        wlen = Math.min(x + w, this._width),
        hlen = Math.min(y + h, this._height);
    for (i = x; i < wlen; i++) {
        row = this._pa[i];
        for(j = y; j < hlen; j++) {
            p = row[j];
            p[0] = 0;
            p[1] = 0;
            p[2] = 0;
            p[3] = 0;
        }
    }
};
