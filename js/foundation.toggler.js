!function(Foundation, $) {
  'use strict';

  /**
   * Creates a new instance of Toggler.
   * @class
   * @fires Toggler#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Toggler(element) {
    this.$element = element;
    this.options = $.extend({}, Toggler.defaults, element.data());
    this.className = '';

    this._init();
    this._events();

    /**
     * Fires when the plugin has been successfuly initialized.
     * @event Toggler#init
     */
    this.$element.trigger('init.zf.toggler');
  }

  Toggler.defaults = {
    animate: false
  }

  /**
   * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
   * @function
   * @private
   */
  Toggler.prototype._init = function() {
    // Parse animation classes if they were set
    if (this.options.animate) {
      var input = this.options.animate.split(' ');

      this.animationIn = input[0];
      this.animationOut = input[1] || null;
    }
    // Otherwise, parse toggle class
    else {
      var input = this.$element.data('toggler');

      // Allow for a . at the beginning of the string
      if (input[0] === '.') {
        this.className = input.slice(1);
      }
      else {
        this.className = input;
      }
    }
  };

  /**
   * Initializes events for the toggle trigger.
   * @function
   * @private
   */
  Toggler.prototype._events = function() {
    var _this = this;

    this.$element.on('toggle.zf.trigger', function() {
      _this.toggle();
      return false;
    });
  };

  /**
   * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
   * @function
   * @fires Toggler#on
   * @fires Toggler#off
   */
  Toggler.prototype.toggle = function() {
    if (!this.options.animate) {
      this._toggleClass();
    }
    else {
      this._toggleAnimate();
    }
  };

  Toggler.prototype._toggleClass = function() {
    this.$element.toggleClass(this.className);

    if (this.$element.hasClass(this.className)) {
      /**
       * Fires if the target element has the class after a toggle.
       * @event Toggler#on
       */
      this.$element.trigger('on.zf.toggler');
    }
    else {
      /**
       * Fires if the target element does not have the class after a toggle.
       * @event Toggler#off
       */
      this.$element.trigger('off.zf.toggler');
    }
  }

  Toggler.prototype._toggleAnimate = function() {
    if (this.$element.is(':hidden')) {
      Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
        this.trigger('on.zf.toggler');
      });
    }
    else {
      Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
        this.trigger('off.zf.toggler');
      });
    }
  }

  /**
   * Destroys the instance of Toggler on the element.
   * @function
   */
  Toggler.prototype.destroy= function() {
    this.$element.off('.zf.toggler');
  };

  Foundation.plugin(Toggler);

  // Exports for AMD/Browserify
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Toggler;
  if (typeof define === 'function')
    define(['foundation'], function() {
      return Toggler;
    });

}(Foundation, jQuery);
