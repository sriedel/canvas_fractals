var JuliaController = function( domId ) {
  this.element = document.getElementById( domId );
  this.element.addEventListener( "mousemove", this.mouseMoved, null );
  this.oldMouseX = null;
  this.oldMouseY = null;
};

JuliaController.prototype.mouseMoved = 
  function( event ) {
    if( event.clientX == this.oldMouseX &&
        event.clientY == this.oldMouseY ) {
      return;
    }

    var relativeX = event.clientX - event.target.offsetLeft;
    var relativeY = event.clientY - event.target.offsetTop;
    console.log( "X/Y: " + relativeX + "/" + relativeY );

    this.oldMouseX = event.clientX;
    this.oldMouseY = event.clientY;
  }
