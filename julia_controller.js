var JuliaController = function( domId, recomputeFunc ) {
  this.element = document.getElementById( domId );

  this.element.addEventListener( "mousemove", this.mouseMoved, false );
  this.element.addEventListener( "DOMMouseScroll", this.mouseMoved, false );

  JuliaController.recomputeFunc = recomputeFunc;
  JuliaController.iterations = 5;
};

JuliaController.adjustIterations = 
  function( delta ) {
    JuliaController.iterations += delta;
    if( JuliaController.iterations < 1 ) {
      JuliaController.iterations = 1;
    } else if ( JuliaController.iterations > 50 ) {
      JuliaController.iterations = 50;
    }
  }

JuliaController.prototype.mouseMoved = 
  function( event ) {
    var relativeX = event.clientX - event.target.offsetLeft;
    var relativeY = event.clientY - event.target.offsetTop;

    JuliaController.recomputeFunc( relativeX, relativeY, event.detail );

    this.oldMouseX = event.clientX;
    this.oldMouseY = event.clientY;
  }

