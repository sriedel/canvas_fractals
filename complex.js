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
    if( value instanceof Complex ) {
      this.real += value.real;
      this.imaginary += value.imaginary;
    } else {
      this.real += value;
    }

    return this;
  };

Complex.prototype.multiply = 
  function( value ) {
    var new_real = this.real * value.real - 
                   this.imaginary * value.imaginary;
    var new_imaginary = this.real * value.imaginary + 
                        this.imaginary * value.real;
    this.real = new_real;
    this.imaginary = new_imaginary;

    return this;
  };

Complex.prototype.absolute = 
  function() {
    return Math.sqrt( this.abs_squared() );
  };

Complex.prototype.abs_squared =
  function() {
    return this.real * this.real + this.imaginary * this.imaginary;
  };
