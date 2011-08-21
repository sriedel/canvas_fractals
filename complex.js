var Complex = function( real, imaginary ) {
                this.real = real;
                this.imaginary = imaginary;
              };
Complex.prototype.complement = 
  function() {
    return new Complex( this.real, -this.imaginary );
  };

Complex.prototype.add = 
  function( value ) {
    return new Complex( this.real + value.real, 
                        this.imaginary + value.imaginary );
  };

Complex.prototype.multiply = 
  function( value ) {
    var new_real = this.real * value.real - 
                   this.imaginary * value.imaginary;
    var new_imaginary = this.real * value.imaginary + 
                        this.imaginary * value.real;
    return new Complex( new_real, new_imaginary );
  };

Complex.prototype.absolute = 
  function() {
    return Math.sqrt( this.multiply( this.complement() ).real );
  };
