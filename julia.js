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
  function( maxIterations, forCoefficients ) {
    this.resultArray = [];
    var point = new Complex( this.minReal, this.maxImg );
    var triggerValue = Math.sqrt( 2 * ( this.maxReal - this.minReal ) * 
                                      ( this.maxReal - this.minReal ) ) / 2;
    var triggerValueSquare = triggerValue * triggerValue;
    var resultIndex = 0;

    for( var y = 0;
             y < this.height;
             ++y, point.imaginary -= this.imgStep ) {

      point.real = this.minReal;
      for( var x = 0;
               x < this.width;
               ++x, point.real += this.realStep ) {

        var computePoint = new Complex( point.real, point.imaginary );
        var iteration = 0;

        while( iteration < maxIterations &&
               ( computePoint.real * computePoint.real + 
                 computePoint.imaginary * computePoint.imaginary ) < triggerValueSquare ) {
          computePoint.multiply( computePoint ).add( forCoefficients );
          ++iteration;
        }

        this.resultArray[resultIndex++] = iteration;
      }
    }
  };

Julia.prototype.mapPixelToComplex = 
  function( x, y ) {
    var real = ( x / this.width ) * ( this.maxReal - this.minReal ) + this.minReal;
    var img = ( 1 - ( y / this.height ) ) * ( this.maxImg - this.minImg ) + this.minImg;

    return new Complex( real, img );
  };

