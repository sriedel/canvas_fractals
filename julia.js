var Julia = function( width, height ) {
  this.minReal = -2.0;
  this.maxReal = 2.0;
  this.minImg = -2.0;
  this.maxImg = 2.0;

  this.width = width;
  this.height = height;
  this.realStep = ( this.maxReal - this.minReal ) / width;
  this.imgStep = ( this.maxImg - this.minImg ) / height;
  this.resultArray = null;
};

Julia.prototype.compute = 
  function( iterations, func ) {
    this.resultArray = [];
    var point = new Complex( this.minReal, this.maxImg );

    for( var y = 0;
             y < this.height;
             ++y, point.imaginary -= this.imgStep ) {

      point.real = this.minReal;
      for( var x = 0;
               x < this.width;
               ++x, point.real += this.realStep ) {

        var resultIndex = y * this.width + x;
        this.resultArray[resultIndex] = this.spotCompute( iterations, point, func );
      }
    }
  };

Julia.prototype.spotCompute =
  function( iterations, point, func ) {
    var computePoint = new Complex( point.real, point.imaginary );

    for( var i = 0; i < iterations; ++i ) {
      computePoint = func( computePoint );
    }
    return computePoint.absolute();
  };
