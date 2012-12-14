/**
 * Initialize the <article> element
 *
 * @namespace Lungo.Boot
 * @class Article
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 * @author Guillermo Pascual <pasku@tapquo.com> || @pasku1
 */

Lungo.Article = (function(lng, undefined) {
    var ATTRIBUTE = lng.Constants.ATTRIBUTE;
    var ELEMENT = lng.Constants.ELEMENT;
    var SELECTORS = {
        LIST_IN_ARTICLE: 'article.list, aside.list',
        CHECKBOX_IN_ARTICLE: '.checkbox',
        ARTICLE_SCROLLABLE: 'article.scroll'
    };
    var _scope = null;

    /**
     * Initializes the markup elements of an article
     *
     * @method init
     */
    var init = function(scope) {
        _scope = scope;
        _initElement(SELECTORS.LIST_IN_ARTICLE, _createListElement);
        _initElement(SELECTORS.CHECKBOX_IN_ARTICLE, _createCheckboxElement);
        _initElement(SELECTORS.ARTICLE_SCROLLABLE, _scrollFix);
    };

    var boot = function() {
        init(lng.dom(document));
    };

    var _initElement = function(selector, callback) {
        var found_elements = _scope.find(selector);
        for (var i = 0, len = found_elements.length; i < len; i++) {
            var element = lng.dom(found_elements[i]);
            lng.Core.execute(callback, element);
        }
    };

    var _createListElement = function(article) {
        if (article.children().length === 0) {
            var article_id = article.attr(ATTRIBUTE.ID);
            article.append(ELEMENT.LIST);
        }
    };

    var _createCheckboxElement = function(checkbox) {
        checkbox.append(ELEMENT.SPAN);
    };

    var _scrollFix = function(article) {
        article[0].addEventListener('touchstart', function(event) {
            scrollTop = this.scrollTop;
            if(scrollTop <= 1) {
                this.scrollTop = 1;
            }
            if(scrollTop + this.offsetHeight >= this.scrollHeight) {
                this.scrollTop = this.scrollHeight - this.offsetHeight - 1;
            }
        }, false);
    };

    return {
        init: init,
        boot: boot
    };


})(Lungo);
