var JuliaPainter = function( width, height ) {
  this.width = width;
  this.height = height;
};

JuliaPainter.prototype.buildImage = 
  function( origin, imageDataResult ) {
    for( var y = 0 ; y < this.height; ++y ) {
      for( var x = 0; x < this.width; ++x ) {
        var originIndex = y * this.width + x;
        var imageDataIndex = originIndex * 4; // RGBA

        var color = origin[originIndex] < 2.0 ? 255 : 0;
        imageDataResult.data[imageDataIndex] = color;
        imageDataResult.data[imageDataIndex + 1] = color;
        imageDataResult.data[imageDataIndex + 2] = color;
        imageDataResult.data[imageDataIndex + 3] = 255; // Alpha
      }
    }
  }
