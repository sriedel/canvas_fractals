var JuliaPainter = function( domId, width, height ) {
  this.width = width;
  this.height = height;

  this.element = document.getElementById( domId );
  this.context = this.element.getContext( "2d" );
  this.imagedata = this.context.createImageData( width, height );

  this.blank();
};

JuliaPainter.prototype.blank = 
  function() {
    for( var i = 0, len = this.imagedata.data.length; i < len ; ++i ) {
      this.imagedata.data[i] = 128;
    }

    this.render();
  }

JuliaPainter.prototype.buildImage = 
  function( origin, steps ) {
    for( var y = 0 ; y < this.height; ++y ) {
      for( var x = 0; x < this.width; ++x ) {
        var originIndex = y * this.width + x;
        var imageDataIndex = originIndex * 4; // RGBA
        var value = origin[originIndex];

        var intensity = ( value / steps ) * 255;

        this.imagedata.data[imageDataIndex] = intensity;
        this.imagedata.data[imageDataIndex + 1] = intensity * 2;
        this.imagedata.data[imageDataIndex + 2] = intensity * 3;
        this.imagedata.data[imageDataIndex + 3] = 255; // Alpha
      }
    }

    this.render();
  }

JuliaPainter.prototype.render = 
  function() {
    this.context.putImageData( this.imagedata, 0, 0 );
  }
