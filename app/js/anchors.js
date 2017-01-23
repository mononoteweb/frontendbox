/**
 *
 */

module.exports = function() {
  'use strict';

  /**
   * Class constructor for Tabs MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mlg-component-design-pattern
   *
   * @constructor
   * @param {Element} element The element that will be upgraded.
   */
  function monolooogAnchors(element) {
    // Stores the HTML element.
    this.element_ = document.getElementsByClassName(element);

    // Initialize instance.
    this.init();
  };
  window['monolooogAnchors'] = monolooogAnchors;

  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string}
   * @private
   */
  monolooogAnchors.prototype.Constant_ = {
    DURATION_: 250
  };

  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
  monolooogAnchors.prototype.CssClasses_ = {
    // None at the moment.
  };

  /**
   * Handle clicks to a anchors component
   *
   * @private
   */
  monolooogAnchors.prototype.initAnchors_ = function() {
    // Create new anchors for each anchor element
    for (var i = 0; i < this.element_.length; i++) {
      new monolooogAnchor(this.element_[i], this);
    }
  };


  /**
   * Scroll Anchor Window
   *
   * @private
   */
  monolooogAnchors.prototype.scrollAnchorWindow_ = function(pos_, cpf_) { 
    var requestId = window.requestAnimationFrame(function() {
      monolooogAnchors.scrollAnchorWindow_(pos_, cpf_);
    });

//    console.log('==========================');
//    console.log('pos_.X: ' + pos_.X + ' pos_.Y: ' + pos_.Y + 'cpf_.X: ' + cpf_.X + 'cpf_.Y: ' + cpf_.Y);
//    console.log('winX_:' + window.pageXOffset);
//    console.log('winY_:' + window.pageYOffset);

    var dirX_ = 0, dirY_ = 0;

    if(Math.abs(pos_.X - Math.floor(window.pageXOffset)) <  Math.abs(cpf_.X)) {
      dirX_ = pos_.X - Math.floor(window.pageXOffset);
    } else if (pos_.X < Math.floor(window.pageXOffset)) {
      dirX_ = cpf_.X;
    } else if (pos_.X > Math.floor(window.pageXOffset)) {
      dirX_ = -1 * cpf_.X;
    }

    if(Math.abs(pos_.Y - Math.floor(window.pageYOffset)) < Math.abs(cpf_.Y)) {
      dirY_ = pos_.Y - Math.floor(window.pageYOffset);
    } else if (pos_.Y < Math.floor(window.pageYOffset)) {
      dirY_ = cpf_.Y;
    } else if (pos_.Y > Math.floor(window.pageYOffset)) {
      dirY_ = -1 * cpf_.Y;
    }

    window.scrollBy(dirX_, dirY_);
//    console.log('posX_:' + pos_.Y + ', winX_:' + window.pageXOffset);
//    console.log('posY_:'+pos_.X+', winY_:' + window.pageYOffset);
//    console.log('dirX_:' + dirX_ + ', dirY_:' + dirY_);
//    console.log('========================');
    if (dirX_ === 0 && dirY_ === 0) {
      window.cancelAnimationFrame(requestId);
    }
  }


  /**
   * Get Constant / ms(duration)
   * 
   * @private
   */
  monolooogAnchors.prototype.getConstantMs_ = function(pos_) {
    // requestAnimationFrameFPS * duration(ms) / 1000ms
    var frame_ = Math.floor(60 * (this.Constant_.DURATION_ / 1000));
    // Change Per Frame
    var cpf_ = new Array();
    cpf_.X = Math.floor((pos_.X - window.pageXOffset) / frame_);
    cpf_.Y = Math.floor((pos_.Y - window.pageYOffset) / frame_);
 
    this.scrollAnchorWindow_(pos_, cpf_);
  }


  /**
   * Get Coodinate Anchor Target
   *
   * @private
   */
  monolooogAnchors.prototype.getCoodinateTarget_ = function(href) {
    
    var target_ = document.getElementById(href),
        rect = target_.getBoundingClientRect(),
        pos_ = new Array();

    pos_.X = Math.floor(rect.left + window.pageXOffset);
    pos_.Y = Math.floor(rect.top + window.pageYOffset);

    this.getConstantMs_(pos_);
 }


  /**
   * Initialize element.
   */
  monolooogAnchors.prototype.init = function() {
    if (this.element_) {
      this.initAnchors_();
    }
  };

  /**
   * Constructor for an individual anchor.
   *
   * @constructor
   * @param {Element} anchor The HTML element for the anchor.
   * @param {monolooogAnchors} ctx The monolooogAnchors object that owns the anchor.
   */
  function monolooogAnchor(anchor, ctx) {
    if (anchor) {
      anchor.addEventListener('click', function(e) {
        if (anchor.getAttribute('href').charAt(0) === '#') {
          e.preventDefault();
          var href = anchor.href.split('#')[1];
          ctx.getCoodinateTarget_(href);
        }
      });

    }
  }

  var monolooogAnchors = new monolooogAnchors('mlg-js-anchor');
}; 
