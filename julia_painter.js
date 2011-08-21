var JuliaPainter = function( width, height ) {
  this.minReal = -2.0;
  this.maxReal = 2.0;
  this.minImg = -2.0;
  this.maxImg = 2.0;

  this.width = width;
  this.height = height;
  this.realStep = ( this.maxReal - this.minReal ) / width;
  this.imgStep = ( this.maxImg - this.minImg ) / height;
};

JuliaPainter.prototype.compute = 
  function( iterations, func, resultArray ) {
    var point = new Complex( this.minReal, this.maxImg );

    for( var y = 0;
             y < this.height;
             ++y, point.imaginary -= this.imgStep ) {

      point.real = this.minReal;
      for( var x = 0;
               x < this.width;
               ++x, point.real += this.realStep ) {

        var resultIndex = y * this.width + x;
        resultArray[resultIndex] = this.spotCompute( iterations, point, func );
      }
    }
  };

JuliaPainter.prototype.spotCompute =
  function( iterations, point, func ) {
    var computePoint = new Complex( point.real, point.imaginary );

    for( var i = 0; i < iterations; ++i ) {
      computePoint = func( computePoint );
      if( computePoint.absolute() >= 2.0 ) {
        return false;
      }
    }
    return true;
  };

JuliaPainter.prototype.buildImage = 
  function( origin, imageDataResult ) {
    for( var y = 0 ; y < this.height; ++y ) {
      for( var x = 0; x < this.width; ++x ) {
        var originIndex = y * this.width + x;
        var imageDataIndex = originIndex * 4; // RGBA

        var color = origin[originIndex] ? 255 : 0;
        imageDataResult.data[imageDataIndex] = color;
        imageDataResult.data[imageDataIndex + 1] = color;
        imageDataResult.data[imageDataIndex + 2] = color;
        imageDataResult.data[imageDataIndex + 3] = 255; // Alpha
      }
    }
  }
