/**
 * Initialize the <section> element
 v
 * @namespace Lungo.Boot
 * @class Section
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 * @author Guillermo Pascual <pasku@tapquo.com> || @pasku1
 */

Lungo.Section = (function(lng, undefined) {

    var ELEMENT = lng.Constants.ELEMENT;
    var CLASS = lng.Constants.CLASS;
    var ATTRIBUTE = lng.Constants.ATTRIBUTE;
    var _scope = null;

    /**
     * Initializes all <section>s of the project
     *
     * @method init
     */
    var init = function(scope) {
        _scope = scope
        _cacheDOMElements();
        lng.Fallback.fixPositionInAndroid();

        _initSections();
        _initAsides();
    };

    var enchance = function(scope) {
      lng.Events.attach(scope);
      lng.Attributes.init(scope);
      lng.Section.init(scope);
      lng.Article.init(scope);
    };

    var _initSections = function() {
        //@todo: position fixed
        //lng.Fallback.positionFixed(lng.Element.Cache.sections);

        for (var i = 0, len = _sections().length; i < len; i++) {
            _initArticles(i);
        }
    };

    var _initAsides = function() {
        var aside = null;
        var asides = _asides();
        for (var i = 0, len = asides.length; i < len; i++) {
            aside = lng.dom(asides[i]);
            aside.children(ELEMENT.ARTICLE).addClass(CLASS.CURRENT);
        }
    };

    var _initArticles = function(section_index) {
        var section = lng.dom(_sections()[section_index]);

        var first_article = section.children(ELEMENT.ARTICLE).first();
        first_article.addClass(CLASS.CURRENT);

        var first_article_id = first_article.attr(ATTRIBUTE.ID);
        if (first_article_id) lng.View.Article.switchReferenceItems(first_article_id, section);
    };

    var _cacheDOMElements = function() {
        //TODO: update cache with scoped elements only
        lng.Element.Cache.sections = lng.dom(ELEMENT.SECTION);
        lng.Element.Cache.asides = lng.dom(ELEMENT.ASIDE);
    };

    var _sections = function() {
        return _scope.filter(ELEMENT.SECTION);
        //return _scoped(ELEMENT.SECTION);
    };

    var _asides = function() {
        return _scope.filter(ELEMENT.ASIDE);
        //return _scoped(ELEMENT.ASIDE);
    };

    var _scopeIsA = function(element) {
      var filtered = _scope.filter(element);
      return filtered !== undefined && filtered.attr('id') == _scope.attr('id');
    };

    var _scoped = function(element) {
        if (_scopeIsA(element)) {
            return _scope;
        } else {
            return _scope.filter(element);
        }
    };

    return {
        init: init,
        enchance: enchance
    };

})(Lungo);
