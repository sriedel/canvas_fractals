var JuliaController = function( domId, recomputeFunc ) {
  this.element = document.getElementById( domId );

  this.element.addEventListener( "mousemove", this.mouseMoved, null );
  this.oldMouseX = null;
  this.oldMouseY = null;

  JuliaController.recomputeFunc = recomputeFunc;
};

JuliaController.prototype.mouseMoved = 
  function( event ) {
    if( event.clientX == this.oldMouseX &&
        event.clientY == this.oldMouseY ) {
      return;
    }

    var relativeX = event.clientX - event.target.offsetLeft;
    var relativeY = event.clientY - event.target.offsetTop;

    JuliaController.recomputeFunc( relativeX, relativeY );

    this.oldMouseX = event.clientX;
    this.oldMouseY = event.clientY;
  }
