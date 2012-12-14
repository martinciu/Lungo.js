/**
 * Initialize the <section> element
 *
 * @namespace Lungo.Boot
 * @class Section
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 * @author Guillermo Pascual <pasku@tapquo.com> || @pasku1
 */

Lungo.Boot.Section = (function(lng, undefined) {

    var ELEMENT = lng.Constants.ELEMENT;
    var CLASS = lng.Constants.CLASS;
    var ATTRIBUTE = lng.Constants.ATTRIBUTE;

    /**
     * Initializes all <section>s of the project
     *
     * @method init
     */
    var init = function() {
        lng.Section.init(lng.dom(document));

        _initFirstSection();
    };

    var _initFirstSection = function() {
        var first_section = lng.Element.Cache.sections.first();
        lng.Element.Cache.section = first_section;
        lng.Element.Cache.article = first_section.children(ELEMENT.ARTICLE).first();

        var first_section_id = '#' + first_section.attr(ATTRIBUTE.ID);
        first_section.addClass(CLASS.CURRENT);
        lng.Router.History.add(first_section_id);
    };

    return {
        init: init
    };

})(Lungo);
