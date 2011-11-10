var id = 'ui:Button',
  Abstract = li.require( 'ui/Abstract' ),
  Button;

Button = Abstract.extend( function ( $element, settings ){
  var Button = this,
    defaults = {
      on: 'click'
    },
    action;

  settings = _.extend( defaults, settings );

  action = settings.action;

  // on click
  $element.on( settings.on, function ( event ) {
    _.log("Button " + settings.on);
    Button.trigger( action );
  } );

  $element.data( id, Button );

} );

if ( typeof module !== 'undefined' && module.exports ) {
  module.exports = Button;
}

