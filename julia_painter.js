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
        var value = origin[originIndex];

        var intensity = ( value / 2.0 ) * 128;
        intensity = intensity > 255 ? 255 : intensity;

        imageDataResult.data[imageDataIndex] = intensity / 3;
        imageDataResult.data[imageDataIndex + 1] = intensity / 2;
        imageDataResult.data[imageDataIndex + 2] = intensity;
        imageDataResult.data[imageDataIndex + 3] = 255; // Alpha
      }
    }
  }
