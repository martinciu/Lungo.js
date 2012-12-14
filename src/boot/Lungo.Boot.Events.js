/**
 * Initialize the automatic DOM UI events
 *
 * @namespace Lungo.Boot
 * @class Events
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 * @author Guillermo Pascual <pasku@tapquo.com> || @pasku1
 */

Lungo.Boot.Events = (function(lng, undefined) {

    /**
     * Initializes the automatic subscription events by markup of the project.
     *
     * @method init
     *
     */
    var init = function() {
        lng.Events.boot();
    };

    return {
        init: init
    };

})(Lungo);
