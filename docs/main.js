/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/aliases.js":
/*!**********************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/aliases.js ***!
  \**********************************************************/
/*! exports provided: get, getByClass, rect, make, on, off, clearChildren, applyStyleClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByClass\", function() { return getByClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rect\", function() { return rect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"make\", function() { return make; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"on\", function() { return on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"off\", function() { return off; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearChildren\", function() { return clearChildren; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyStyleClasses\", function() { return applyStyleClasses; });\n/**Get an element by its ID, alias\n */\nconst get = id => document.getElementById(id);\n/**Alias for getElementsByClassName*/\n\n\nconst getByClass = classname => document.getElementsByClassName(classname);\n/**An alias for getBoundingClientRect*/\n\n\nconst rect = e => e.getBoundingClientRect();\n/**Alias for createElement*/\n\n\nconst make = type => document.createElement(type);\n/**Listen to events on an element*/\n\n\nconst on = (elem, type, callback, options = undefined) => {\n  if (!elem) throw \"No element supplied\";\n  elem.addEventListener(type, callback, options);\n};\n/**Stop listen to events on an element*/\n\n\nconst off = (elem, type, callback) => {\n  if (!elem) throw \"No element supplied\";\n  elem.removeEventListener(type, callback);\n};\n/**Remove all child elements from an element*/\n\n\nconst clearChildren = e => {\n  while (e.lastChild) {\n    e.lastChild.remove();\n  }\n};\n/**Apply classes to an element*/\n\n\nconst applyStyleClasses = (e, ...classes) => {\n  if (!classes) return;\n\n  for (const c of classes) {\n    e.classList.add(c);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/aliases.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/component.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _aliases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aliases.js */ \"./node_modules/@repcomm/exponent-ts/lib/aliases.js\");\n //TODO - replace with harrix event listener api\n\nconst COMPONENT_NAMESPACE = \"component-namespace\";\n\n/**Can be extended to create templates, or used for making\n * writting HTML less painful\n * \n * @author Jonathan Crowder\n */\nclass Component {\n  constructor() {\n    this.eventListeners = new Array();\n  }\n  /**Mounts the component to a parent HTML element*/\n\n\n  mount(parent) {\n    if (parent instanceof HTMLElement) {\n      parent.appendChild(this.element);\n    } else if (parent instanceof Component) {\n      // parent.mountChild(this);\n      parent.element.appendChild(this.element);\n    } else {\n      throw \"Cannot append to parent because its not a Component or HTMLElement\";\n    }\n\n    return this;\n  }\n\n  unmount() {\n    if (this.element.parentElement) {\n      this.element.remove();\n    }\n\n    return this;\n  }\n  /**Mounts child component or html element to this*/\n\n\n  mountChild(child) {\n    if (child instanceof HTMLElement) {\n      this.element.appendChild(child);\n    } else if (child instanceof Component) {\n      // this.element.appendChild(child.element);\n      child.mount(this);\n    } else {\n      throw \"Cannot append child because its not a Component or HTMLElement\";\n    }\n\n    return this;\n  }\n  /**Listen to events on this componenet's element*/\n\n\n  on(type, callback, options) {\n    Object(_aliases_js__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(this.element, type, callback, options);\n    this.eventListeners.push({\n      type,\n      callback\n    });\n    return this;\n  }\n\n  getRegisteredEvents(type, cb) {\n    let result = new Array();\n\n    for (let listener of this.eventListeners) {\n      if (listener.type == type && listener.callback == cb) {\n        result.push(listener);\n      }\n    }\n\n    return result;\n  }\n\n  deleteRegisteredEvents(type, cb) {\n    let listener;\n\n    for (let i = 0; i < this.eventListeners.length; i++) {\n      listener = this.eventListeners[i];\n\n      if (type == listener.type && cb == listener.callback) {\n        this.eventListeners.splice(i, 1);\n      }\n    }\n\n    return this;\n  }\n  /**Stop listening to an event on this componenet's element*/\n\n\n  off(type, callback) {\n    Object(_aliases_js__WEBPACK_IMPORTED_MODULE_0__[\"off\"])(this.element, type, callback);\n    this.deleteRegisteredEvents(type, callback);\n    return this;\n  }\n\n  setId(str) {\n    this.element.id = str;\n    return this;\n  }\n\n  getId() {\n    return this.element.id;\n  }\n  /**Add CSS classes*/\n\n\n  addClasses(...classnames) {\n    this.element.classList.add(...classnames);\n    return this;\n  }\n  /**Remove CSS classes*/\n\n\n  removeClasses(...classnames) {\n    this.element.classList.remove(...classnames);\n    return this;\n  }\n\n  removeAllListeners() {\n    for (let listener of this.eventListeners) {\n      this.off(listener.type, listener.callback);\n    }\n\n    return this;\n  }\n\n  static assignComponentToNative(native, component) {\n    native[COMPONENT_NAMESPACE] = {\n      component: component\n    };\n  }\n\n  static removeComponentFromNative(native) {\n    native[COMPONENT_NAMESPACE] = undefined;\n  }\n  /**Make the element of this component a type of HTMLElement*/\n\n\n  make(type) {\n    if (this.element) {\n      this.removeAllListeners();\n      Component.removeComponentFromNative(this.element);\n    }\n\n    this.element = Object(_aliases_js__WEBPACK_IMPORTED_MODULE_0__[\"make\"])(type);\n    Component.assignComponentToNative(this.element, this);\n    return this;\n  }\n  /**Use a native element instead of creating one*/\n\n\n  useNative(element) {\n    if (this.element) {\n      this.removeAllListeners();\n      Component.removeComponentFromNative(this.element);\n    }\n\n    if (!element) console.warn(\"useNative was passed\", element);\n    this.element = element;\n    return this;\n  }\n\n  setTextContent(str) {\n    this.element.textContent = str;\n    return this;\n  }\n\n  getTextContent() {\n    return this.element.textContent;\n  }\n  /**Alias of getBoundingClientRect */\n\n\n  get rect() {\n    return this.getRect();\n  }\n\n  getRect() {\n    return Object(_aliases_js__WEBPACK_IMPORTED_MODULE_0__[\"rect\"])(this.element);\n  }\n  /**Removes children components*/\n\n\n  removeChildren() {\n    while (this.element.lastChild) {\n      this.element.lastChild.remove();\n    }\n\n    return this;\n  }\n\n  click() {\n    this.element.click();\n  }\n\n  setStyleItem(item, value) {\n    this.element.style[item] = value;\n    return this;\n  }\n\n  getStyleItem(item) {\n    return this.element.style[item];\n  }\n  /**Experimental*/\n\n\n  for(start, count, cb) {\n    for (let i = start; i < count + 1; i++) {\n      cb(this, i);\n    }\n\n    return this;\n  }\n  /**Set attribute*/\n\n\n  setAttr(name, value) {\n    this.element[name] = value;\n    return this;\n  }\n\n  getAttr(name) {\n    return this.element[name];\n  }\n\n  removeAttr(name) {\n    this.element.removeAttribute(name);\n    return this;\n  }\n\n  static nativeIsComponent(element) {\n    return element[COMPONENT_NAMESPACE] != undefined && element[COMPONENT_NAMESPACE] != null;\n  }\n\n  static nativeToComponent(element) {\n    if (!Component.nativeIsComponent(element)) throw `No component found in native ${element}`;\n    return element[COMPONENT_NAMESPACE].component;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/component.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponent.js":
/*!***********************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponent.js ***!
  \***********************************************************/
/*! exports provided: Exponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Exponent\", function() { return Exponent; });\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ \"./node_modules/@repcomm/exponent-ts/lib/component.js\");\n\n/**Base component for exponent library\n * \n */\n\nclass Exponent extends _component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  /**Doesn't have to be used by class extensions*/\n  constructor() {\n    super();\n    this.mutObserver = new MutationObserver(this.onElementMutate);\n    this.enabled = true;\n  }\n\n  getEnabled() {\n    return this.enabled;\n  }\n\n  setEnabled(enable) {\n    if (this.getEnabled() == enable) return this;\n    this.enabled = enable;\n    this.onEnable();\n  }\n\n  onEnable() {}\n\n  make(type) {\n    super.make(type);\n    this.notifyElementChanged();\n    this.applyRootClasses();\n    return this;\n  }\n  /**Called by mutation observer\n   * @param recs\n   * @param observer \n   */\n\n\n  onElementMutate(recs, observer) {\n    for (let rec of recs) {\n      if (rec.type !== \"childList\") continue; // rec.addedNodes\n      // rec.removedNodes\n    }\n  }\n  /**Let the Exponent know if its native element has been changed\n   * Typically fired when element removed or added to handle mutation observation of dom node\n   */\n\n\n  notifyElementChanged() {\n    this.mutObserver.disconnect();\n\n    if (this.element) {\n      this.mutObserver.observe(this.element, {\n        subtree: false,\n        //Don't listen to grandchildren/etc\n        childList: true //Do listen to child remove/add\n\n      });\n    }\n\n    return this;\n  }\n\n  applyRootClasses() {\n    this.addClasses(\"exponent\");\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponent.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/button.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/button.js ***!
  \*******************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exponent.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponent.js\");\n\nclass Button extends _exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"Exponent\"] {\n  /**TODO - This should probably be abstracted*/\n  constructor() {\n    super();\n    this.setUseType(\"normal\");\n    this.make(\"button\");\n    this.addClasses(\"exponent-dark\", \"exponent-button\");\n  }\n\n  setUseType(type) {\n    this.useType = type;\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/button.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/contextpanel.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/contextpanel.js ***!
  \*************************************************************************/
/*! exports provided: ContextPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextPanel\", function() { return ContextPanel; });\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js\");\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component.js */ \"./node_modules/@repcomm/exponent-ts/lib/component.js\");\n\n\n/**This panel type can keep track of different components to be rendered\n * and simply uses strings to refer to them\n * \n * Switching between game renderer / settings panel / menus were in mind for this\n * @author Jonathan Crowder\n * \n */\n\nclass ContextPanel extends _panel_js__WEBPACK_IMPORTED_MODULE_0__[\"Panel\"] {\n  constructor() {\n    super();\n    this.contexts = new Map();\n    this.memory = new Array();\n  }\n\n  addContext(id, ctx) {\n    this.contexts.set(id, ctx);\n    return this;\n  }\n\n  hasContext(id) {\n    return this.contexts.has(id);\n  }\n\n  getContext(id) {\n    return this.contexts.get(id);\n  }\n\n  getCurrentContext() {\n    return this.currentContext;\n  }\n\n  getCurrentContextId() {\n    return this.currentContextId;\n  }\n\n  hasCurrentContext() {\n    return this.currentContext && this.currentContext instanceof _component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  }\n\n  switchContext(id) {\n    if (!id) throw `id was ${id}`;\n    if (!this.hasContext(id)) throw `Cannot switch context to ${id} as it hasn't been added before`;\n    if (this.currentContext) this.currentContext.unmount();\n    this.currentContext = this.contexts.get(id);\n    if (!this.currentContext) throw `set context, it is ${this.currentContext}`;\n    if (!(this.currentContext instanceof _component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])) throw `${id} context isn't instance of Component`;\n    this.currentContext.mount(this);\n    this.currentContext.setStyleItem(\"flex\", 1);\n    this.currentContextId = id;\n    return this;\n  }\n\n  getIds() {\n    let result = new Array();\n\n    for (let key of this.contexts.keys()) {\n      result.push(key);\n    }\n\n    return result;\n  }\n\n  save() {\n    if (this.currentContext && this.currentContextId) {\n      this.memory.push(this.currentContextId);\n    } else {\n      throw `Couldn't push ${this.currentContextId} into memory`;\n    }\n\n    return this;\n  }\n\n  restore() {\n    if (this.memory.length < 1) throw \"Couldn't restore as memory is < 1, forgot to save() ?\";\n    let id = this.memory.pop();\n    if (id === undefined || id === null) throw `id was ${id}`;\n    if (!this.hasContext(id)) throw `No component for context id ${id} has been added, cannot restore to it`;\n    this.switchContext(id);\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/contextpanel.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/drawing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/drawing.js ***!
  \********************************************************************/
/*! exports provided: Drawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Drawing\", function() { return Drawing; });\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exponent.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponent.js\");\n\nclass Drawing extends _exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"Exponent\"] {\n  constructor(ctxConfig) {\n    super();\n    this.renderPasses = new Array();\n    this.autoClear = true;\n    this.autoResize = false;\n    this.needsRedraw = true;\n    /**TODO - This should probably be Canvas pixel ratio?*/\n\n    this.pixelRatio = 1;\n    this.make(\"canvas\");\n    this.addClasses(\"exponent-drawing\");\n    this.context = this.element.getContext(\"2d\", ctxConfig);\n\n    this.frameCallback = delta => {\n      if (this.getEnabled()) {\n        if (this.needsRedraw) {\n          this.render();\n        }\n\n        requestAnimationFrame(this.frameCallback);\n      }\n    };\n\n    requestAnimationFrame(this.frameCallback);\n\n    this.onResize = () => {\n      if (this.autoResize) {\n        this.setSize(Math.floor(this.rect.width * this.pixelRatio), Math.floor(this.rect.height * this.pixelRatio));\n      }\n    };\n\n    window.addEventListener(\"resize\", this.onResize);\n  }\n\n  setNeedsRedraw(redraw = true) {\n    this.needsRedraw = redraw;\n    return this;\n  }\n\n  hasRenderPass(cb) {\n    return this.renderPasses.includes(cb); // return this.renderPasses.indexOf(cb) != -1;\n  }\n\n  removeRenderPass(cb) {\n    if (!this.hasRenderPass(cb)) throw \"Cannot remove render pass, not in list\";\n    let ind = this.renderPasses.indexOf(cb);\n    this.renderPasses.splice(ind, 1);\n    return this;\n  }\n\n  addRenderPass(cb) {\n    if (this.hasRenderPass(cb)) throw \"Cannot add render pass more than once\";\n    this.renderPasses.push(cb);\n    return this;\n  }\n\n  get width() {\n    return this.element.width;\n  }\n\n  set width(v) {\n    this.element.width = v;\n  }\n\n  get height() {\n    return this.element.height;\n  }\n\n  set height(v) {\n    this.element.height = v;\n  }\n\n  setSize(w, h) {\n    this.width = w;\n    this.height = h;\n    this.needsRedraw = true;\n    return this;\n  }\n\n  render() {\n    this.needsRedraw = false;\n\n    if (this.autoClear) {\n      this.context.clearRect(0, 0, this.width, this.height);\n    }\n\n    for (let cb of this.renderPasses) {\n      cb(this.context, this);\n    }\n  }\n\n  setHandlesResize(autoResize) {\n    this.autoResize = autoResize;\n    setTimeout(() => {\n      this.onResize(undefined);\n    }, 100);\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/drawing.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/dualpanel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/dualpanel.js ***!
  \**********************************************************************/
/*! exports provided: DualPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DualPanel\", function() { return DualPanel; });\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js\");\n\nclass DualPanel extends _panel_js__WEBPACK_IMPORTED_MODULE_0__[\"Panel\"] {\n  constructor() {\n    super();\n    this.direction = \"row\";\n    this.firstRatio = 1;\n    this.secondRatio = 1;\n    this.addClasses(\"exponent-dual-panel\");\n  }\n\n  onRatioUpdate() {\n    if (this.first) this.first.setStyleItem(\"flex\", this.firstRatio);\n    if (this.second) this.second.setStyleItem(\"flex\", this.secondRatio);\n  }\n\n  setRatio(first, second) {\n    this.firstRatio = first;\n    this.secondRatio = second;\n    this.onRatioUpdate();\n    return this;\n  }\n\n  setDirection(dir) {\n    this.direction = dir;\n    this.setStyleItem(\"flex-direction\", dir);\n    return this;\n  }\n\n  clearElements() {\n    return this;\n  }\n\n  setElements(first, second) {\n    if (this.first) this.first.unmount();\n    if (this.second) this.second.unmount();\n    this.first = first;\n    this.second = second;\n    first.mount(this);\n    second.mount(this);\n    this.onRatioUpdate();\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/dualpanel.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/grid.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/grid.js ***!
  \*****************************************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js\");\n\nclass Grid extends _panel_js__WEBPACK_IMPORTED_MODULE_0__[\"Panel\"] {\n  constructor() {\n    super();\n    this.columns = 3;\n    this.rows = 3;\n    this.addClasses(\"exponent-grid\");\n  }\n\n  setColumnCount(columns) {\n    this.columns = columns;\n    this.setStyleItem(\"grid-template-columns\", `repeat(${columns}, 1fr)`);\n    return this;\n  }\n\n  getColumnCount() {\n    return this.columns;\n  }\n\n  setRowCount(rows) {\n    this.rows = rows;\n    this.setStyleItem(\"grid-template-rows\", `repeat(${rows}, 1fr)`);\n    return this;\n  }\n\n  getRowCount() {\n    return this.rows;\n  }\n\n  setCell(e, columnStart, rowStart, columnEnd, rowEnd) {\n    e.setStyleItem(\"grid-column-start\", columnStart);\n    e.setStyleItem(\"grid-row-start\", rowStart);\n    if (columnEnd) e.setStyleItem(\"grid-column-end\", columnEnd);\n    if (rowEnd) e.setStyleItem(\"grid-row-end\", rowEnd);\n    e.mount(this);\n    return this;\n  }\n\n  setGap(gapStyle) {\n    this.setStyleItem(\"gap\", gapStyle);\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/grid.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/imagepanel.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/imagepanel.js ***!
  \***********************************************************************/
/*! exports provided: ImagePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImagePanel\", function() { return ImagePanel; });\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js\");\n\nclass ImagePanel extends _panel_js__WEBPACK_IMPORTED_MODULE_0__[\"Panel\"] {\n  constructor() {\n    super();\n    this.setStretchRule(\"fit-width\");\n  }\n\n  setImage(url) {\n    this.setStyleItem(\"background-image\", `url('${url}')`);\n    return this;\n  }\n\n  setInterpolation(rule) {\n    this.setStyleItem(\"image-rendering\", rule);\n    return this;\n  }\n\n  setStretchRule(rule) {\n    switch (rule) {\n      case \"fill-panel\":\n        //not implemented yet\n        break;\n\n      case \"fit-width\":\n        this.setStyleItem(\"background-size\", `100% auto`);\n        this.setStyleItem(\"background-position\", `50% 50%`);\n        break;\n\n      case \"fit-height\":\n        this.setStyleItem(\"background-size\", `auto 100%`);\n        this.setStyleItem(\"background-position\", `50% 50%`);\n        break;\n    }\n\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/imagepanel.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/knob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/knob.js ***!
  \*****************************************************************/
/*! exports provided: Knob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Knob\", function() { return Knob; });\n/* harmony import */ var _aliases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aliases.js */ \"./node_modules/@repcomm/exponent-ts/lib/aliases.js\");\n/* harmony import */ var _math_general_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/general.js */ \"./node_modules/@repcomm/exponent-ts/lib/math/general.js\");\n/* harmony import */ var _mod_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mod.js */ \"./node_modules/@repcomm/exponent-ts/lib/mod.js\");\n\n\n //TODO - This needs to go\n\nconst knobImages = [\"./images/knob01.svg\", \"./images/knob02.svg\", \"./images/knob03.svg\", \"./images/knob04.svg\", \"./images/knob05.svg\", \"./images/knob06.svg\", \"./images/knob07.svg\"];\nclass Knob extends _mod_js__WEBPACK_IMPORTED_MODULE_2__[\"SquarePanel\"] {\n  constructor() {\n    super();\n    this.min = 0;\n    this.max = 1;\n    this.minTurns = -0.5;\n    this.maxTurns = 1.5;\n    this.value = 0;\n    this.prevalue = 0;\n    this.turning = false;\n    this.turningx = 0;\n    this.turningy = 0;\n    this.step = 0;\n    this.addClasses(\"exponent-knob\");\n    this.grab = new _mod_js__WEBPACK_IMPORTED_MODULE_2__[\"Panel\"]().addClasses(\"exponent-knob-grab\").mount(this.container);\n    let ind = Math.floor(Math.random() * knobImages.length);\n    this.setImage(knobImages[ind]);\n    this.grab.on(\"mousedown\", evt => {\n      evt.preventDefault();\n      this.turning = true;\n      this.turningx = evt.screenX;\n      this.turningy = evt.screenY;\n    });\n    Object(_aliases_js__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(window, \"mouseup\", evt => {\n      this.turning = false;\n    });\n    Object(_aliases_js__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(window, \"mousemove\", evt => {\n      if (this.turning) {\n        let delta = evt.movementX - evt.movementY;\n        delta *= Knob.sensitivity / Object(_math_general_js__WEBPACK_IMPORTED_MODULE_1__[\"ndist\"])(this.min, this.max);\n        if (evt.ctrlKey) delta /= 4;\n        this.addValue(delta); // let value = dist(\n        //   this.turningx,\n        //   this.turningy,\n        //   evt.screenX,\n        //   evt.screenY\n        // ) * ndist(this.min, this.max) * Knob.sensitivity;\n        // this.setValue(value);\n      }\n    });\n    this.setValue(0);\n  }\n\n  addValue(a) {\n    this.setValue(this.prevalue + a);\n    return this;\n  }\n\n  setValue(v) {\n    /**value is defined as a number between min and max\n     * -- it can be over, which is fine,\n     * -- but we clamp it so it won't do that for experience purposes\n     * \n     * Next we calculate the amount of turn (from straight up)\n     * and we do that be finding the interpolant of value between min and max\n     * and lerping with minTurn maxTurn using interpolant\n     * \n     * This ensures the same ratio of value to min -> max\n     * as turn to minTurn -> maxTurn\n     */\n    //Clamp the input\n    this.prevalue = Object(_math_general_js__WEBPACK_IMPORTED_MODULE_1__[\"clamp\"])(v, this.min, this.max);\n    this.value = this.prevalue;\n\n    if (this.step != 0) {\n      this.value = Object(_math_general_js__WEBPACK_IMPORTED_MODULE_1__[\"roundToNext\"])(this.value, this.step);\n    } //Calculate turns\n\n\n    let turns = Object(_math_general_js__WEBPACK_IMPORTED_MODULE_1__[\"lerp\"])(this.minTurns, this.maxTurns, Object(_math_general_js__WEBPACK_IMPORTED_MODULE_1__[\"inverseLerp\"])(this.min, this.max, this.value));\n    this.grab.setStyleItem(\"transform\", [`rotate(${turns}turn)`]);\n    return this;\n  }\n\n  getValue() {\n    return this.value;\n  }\n\n  setImage(url) {\n    this.grab.setStyleItem(\"background-image\", `url('${url}')`);\n    return this;\n  }\n\n}\nKnob.sensitivity = 0.005;\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/knob.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/listpanel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/listpanel.js ***!
  \**********************************************************************/
/*! exports provided: ListPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListPanel\", function() { return ListPanel; });\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js\");\n\nclass ListPanel extends _panel_js__WEBPACK_IMPORTED_MODULE_0__[\"Panel\"] {\n  /**how many items fit in view*/\n  constructor() {\n    super();\n    this.mode = \"vertical\";\n    this.itemViewRatio = 5;\n    this.addClasses(\"exponent-list\");\n    this.setMode(\"vertical\");\n  }\n\n  setMode(mode) {\n    this.mode = mode;\n\n    if (this.mode == \"horizontal\") {\n      this.setStyleItem(\"overflow\", \"scroll hidden\");\n      this.setStyleItem(\"flex-direction\", \"row\");\n    } else {\n      this.setStyleItem(\"overflow\", \"hidden scroll\");\n      this.setStyleItem(\"flex-direction\", \"column\");\n    }\n\n    return this;\n  }\n\n  setItemViewRatio(ratio) {\n    this.itemViewRatio = ratio;\n    return this;\n  }\n\n  hasItem(item) {\n    throw \"Not implemented yet\"; //TODO - implement\n  }\n\n  addItem(item) {\n    if (this.hasItem(item)) throw \"Cannot add item more than once\";\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/listpanel.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js":
/*!******************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js ***!
  \******************************************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Panel\", function() { return Panel; });\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exponent.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponent.js\");\n\nclass Panel extends _exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"Exponent\"] {\n  constructor() {\n    super();\n    this.make(\"div\");\n    this.addClasses(\"exponent-panel\");\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/exponents/squarepanel.js":
/*!************************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/exponents/squarepanel.js ***!
  \************************************************************************/
/*! exports provided: SquarePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SquarePanel\", function() { return SquarePanel; });\n/* harmony import */ var _mod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mod.js */ \"./node_modules/@repcomm/exponent-ts/lib/mod.js\");\n\n\n/**A panel whose child is always squarely fit inside\n */\nclass SquarePanel extends _mod_js__WEBPACK_IMPORTED_MODULE_0__[\"Panel\"] {\n  /**The element that is actually square*/\n\n  /**Length of side*/\n\n  /**Calculated x offset of container*/\n\n  /**Calculated y offset of container*/\n  constructor() {\n    super();\n    this.container = new _mod_js__WEBPACK_IMPORTED_MODULE_0__[\"Panel\"]();\n    this.length = 0;\n    this.cx = 0;\n    this.cy = 0;\n    this.alignVertical = \"center\";\n    this.alignHorizontal = \"center\";\n    this.addClasses(\"exponent-square\");\n\n    this.onResize = () => {\n      //Always recalc size\n      this.calcChildSize(); //Only apply it if we're enabled\n\n      if (this.getEnabled()) this.applyChildSize();\n    };\n\n    window.addEventListener(\"resize\", this.onResize);\n    this.container.mount(this); // this.container.styleItem(\"position\", \"absolute\");\n\n    this.container.addClasses(\"exponent-square-container\");\n  }\n  /**Recalculate size metrics from DOM rects\n   * You need to applyChildSize after using this to\n   * see the effects\n   */\n\n\n  calcChildSize() {\n    let min = Math.min(this.rect.width, this.rect.height);\n    let max = Math.max(this.rect.width, this.rect.height);\n    let gap = max - min;\n    let wIsBigger = this.rect.width > this.rect.height; //Set length of square to the smaller value\n\n    this.length = Math.floor(min); //Handle centering coords\n\n    if (wIsBigger) {\n      this.cy = 0; //Reset offset\n\n      if (this.alignHorizontal == \"center\") {\n        this.cx = Math.floor(gap / 2); //move over by half gap\n      } else if (this.alignHorizontal == \"left\") {\n        this.cx = 0;\n      } else {\n        this.cx = Math.floor(gap);\n      }\n    } else {\n      this.cx = 0; //Reset offset\n\n      if (this.alignVertical == \"center\") {\n        this.cy = Math.floor(gap / 2); //move over by half gap\n      } else if (this.alignVertical == \"top\") {\n        this.cy = 0;\n      } else {\n        this.cy = Math.floor(gap);\n      }\n    } //Apparently this, and position:absolute works..\n    //TODO - fix parent container offset gap\n\n\n    this.cx += this.rect.x;\n    this.cy += this.rect.y; //Whatever.\n\n    return this;\n  }\n\n  applyChildSize() {\n    //EW\n    this.container.setStyleItem(\"width\", `${this.length}px`);\n    this.container.setStyleItem(\"height\", `${this.length}px`);\n    this.container.setStyleItem(\"left\", `${this.cx}px`);\n    this.container.setStyleItem(\"top\", `${this.cy}px`);\n    return this;\n  }\n\n  mountChild(child) {\n    console.log(\"Square content\", child);\n    this.container.mountChild(child);\n    setTimeout(() => {\n      this.calcChildSize();\n      this.applyChildSize();\n    }, 100);\n    return this;\n  }\n\n  setAlign(hor, ver) {\n    this.alignHorizontal = hor;\n    this.alignVertical = ver;\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/exponents/squarepanel.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/math/general.js":
/*!***************************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/math/general.js ***!
  \***************************************************************/
/*! exports provided: EPSILON, radians, ndist, clamp, randomByte, lerp, inverseLerp, dist, roundToNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EPSILON\", function() { return EPSILON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"radians\", function() { return radians; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ndist\", function() { return ndist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clamp\", function() { return clamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomByte\", function() { return randomByte; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return lerp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inverseLerp\", function() { return inverseLerp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dist\", function() { return dist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"roundToNext\", function() { return roundToNext; });\n/**Artificial minimum standard*/\nconst EPSILON = 0.00001;\n/**Convert degrees to radians*/\n\nconst radians = deg => deg * Math.PI / 180;\n/**Returns the abs distance between two numbers, works with negatives*/\n\nconst ndist = (v0, v1) => Math.abs(Math.abs(v0) - Math.abs(v1));\n/**Clamps value between min and max*/\n\nconst clamp = (value, min, max) => {\n  return Math.max(Math.min(value, max), min);\n};\n/**Returns a Math.random value between 0 and 255*/\n\nconst randomByte = () => Math.floor(Math.random() * 255);\n/**Linear interpolation between from and to, using 0.0 - 1.0 interpolant `by`*/\n\nconst lerp = (from, to, by) => {\n  return from * (1 - by) + to * by;\n};\n/**Performs the inverse of lerp\n * Will give you the interpolant given the interpolated number and its bounds (to and from)\n */\n\nconst inverseLerp = (from, to, value) => {\n  return (value - from) / (to - from);\n};\nconst dist = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));\nconst roundToNext = (n, next) => {\n  let isNeg = n < 0;\n\n  if (isNeg) {\n    n -= next;\n  }\n\n  ;\n  let resto = n % next;\n\n  if (resto <= next) {\n    return n - resto;\n  } else {\n    return n + next - resto;\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/math/general.js?");

/***/ }),

/***/ "./node_modules/@repcomm/exponent-ts/lib/mod.js":
/*!******************************************************!*\
  !*** ./node_modules/@repcomm/exponent-ts/lib/mod.js ***!
  \******************************************************/
/*! exports provided: EXPONENT_CSS_STYLES, Exponent, Button, Panel, ContextPanel, DualPanel, Grid, ImagePanel, ListPanel, SquarePanel, Knob, Drawing, Component, runOnce, on, get, applyStyleClasses, clearChildren, getByClass, make, off, rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EXPONENT_CSS_STYLES\", function() { return EXPONENT_CSS_STYLES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runOnce\", function() { return runOnce; });\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ \"./node_modules/@repcomm/exponent-ts/lib/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Exponent\", function() { return _exponent_js__WEBPACK_IMPORTED_MODULE_1__[\"Exponent\"]; });\n\n/* harmony import */ var _exponents_panel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exponents/panel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/panel.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Panel\", function() { return _exponents_panel_js__WEBPACK_IMPORTED_MODULE_2__[\"Panel\"]; });\n\n/* harmony import */ var _exponents_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exponents/button.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/button.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _exponents_button_js__WEBPACK_IMPORTED_MODULE_3__[\"Button\"]; });\n\n/* harmony import */ var _exponents_contextpanel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exponents/contextpanel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/contextpanel.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ContextPanel\", function() { return _exponents_contextpanel_js__WEBPACK_IMPORTED_MODULE_4__[\"ContextPanel\"]; });\n\n/* harmony import */ var _exponents_dualpanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exponents/dualpanel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/dualpanel.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DualPanel\", function() { return _exponents_dualpanel_js__WEBPACK_IMPORTED_MODULE_5__[\"DualPanel\"]; });\n\n/* harmony import */ var _exponents_grid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exponents/grid.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/grid.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return _exponents_grid_js__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"]; });\n\n/* harmony import */ var _exponents_imagepanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exponents/imagepanel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/imagepanel.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ImagePanel\", function() { return _exponents_imagepanel_js__WEBPACK_IMPORTED_MODULE_7__[\"ImagePanel\"]; });\n\n/* harmony import */ var _exponents_listpanel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exponents/listpanel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/listpanel.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ListPanel\", function() { return _exponents_listpanel_js__WEBPACK_IMPORTED_MODULE_8__[\"ListPanel\"]; });\n\n/* harmony import */ var _exponents_squarepanel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exponents/squarepanel.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/squarepanel.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SquarePanel\", function() { return _exponents_squarepanel_js__WEBPACK_IMPORTED_MODULE_9__[\"SquarePanel\"]; });\n\n/* harmony import */ var _exponents_knob_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exponents/knob.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/knob.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Knob\", function() { return _exponents_knob_js__WEBPACK_IMPORTED_MODULE_10__[\"Knob\"]; });\n\n/* harmony import */ var _exponents_drawing_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exponents/drawing.js */ \"./node_modules/@repcomm/exponent-ts/lib/exponents/drawing.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Drawing\", function() { return _exponents_drawing_js__WEBPACK_IMPORTED_MODULE_11__[\"Drawing\"]; });\n\n/* harmony import */ var _aliases_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aliases.js */ \"./node_modules/@repcomm/exponent-ts/lib/aliases.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"on\", function() { return _aliases_js__WEBPACK_IMPORTED_MODULE_12__[\"on\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return _aliases_js__WEBPACK_IMPORTED_MODULE_12__[\"get\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"applyStyleClasses\", function() { return _aliases_js__WEBPACK_IMPORTED_MODULE_12__[\"applyStyleClasses\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clearChildren\", function() { return _aliases_js__WEBPACK_IMPORTED_MODULE_12__[\"clearChildren\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getByClass\", function() { return _aliases_js__WEBPACK_IMPORTED_MODULE_12__[\"getByClass\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"make\", function() { return _aliases_js__WEBPACK_IMPORTED_MODULE_12__[\"make\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"off\", function() { return _aliases_js__WEBPACK_IMPORTED_MODULE_12__[\"off\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rect\", function() { return _aliases_js__WEBPACK_IMPORTED_MODULE_12__[\"rect\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst EXPONENT_CSS_STYLES = new _component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().make(\"style\").setId(\"exponent-built-in-styles\").setTextContent(`\n  .exponent {\n    flex: 1;\n  }\n  .exponent-panel {\n    display: flex;\n  }\n  .exponent-dual-panel {\n    display: flex;\n  }\n  .exponent-grid {\n    display: grid;\n  }\n  .exponent-button {\n    border: none;\n    cursor: pointer;\n  }\n  .exponent-knob-grab {\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-size: contain;\n    cursor: grab;\n  }\n  .exponent-drawing {\n    min-width:0;\n  }\n  .exponent-square-container {\n  }\n  .exponent-list {\n    flex-wrap: wrap;\n    /* overflow:hidden; */\n  }\n  .exponent-list>* {\n    flex: 1;\n  }`);\n\nfunction injectEventListenAPI() {\n  //TODO - implement into exponents themselves\n  //harrix / hb432 implementation of event tracking\n  (() => {\n    const storage = new Map();\n    const {\n      addEventListener,\n      removeEventListener\n    } = EventTarget.prototype;\n    Object.defineProperties(EventTarget.prototype, {\n      eventListeners: {\n        get: function () {\n          return storage.has(this) ? storage.get(this) : storage.set(this, []).get(this);\n        }\n      },\n      addEventListener: {\n        value: function (...args) {\n          addEventListener.call(this, ...args);\n          this.eventListeners.push(new Set(args));\n        }\n      },\n      removeEventListener: {\n        value: function (...args) {\n          removeEventListener.call(this, ...args);\n          const listeners = this.eventListeners;\n\n          for (const listener of listeners) {\n            args.map(arg => listener.has(arg)).includes(false) || listeners.splice(listeners.indexOf(listener), 1);\n          }\n        }\n      }\n    });\n  })();\n  /**example usage, remove all events for the click and hover events from all div elements\n   * for (const div of [ ...document.querySelectorAll('div') ]) {\n     for (const [ type, ...args ] of div.eventListeners) {\n        switch (type) {\n           case 'click':\n           case 'hover':\n              div.removeEventListener(type, ...args);\n              break;\n        }\n     }\n    }\n   */\n\n}\n\nfunction runOnce() {\n  injectEventListenAPI();\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/@repcomm/exponent-ts/lib/mod.js?");

/***/ }),

/***/ "./src/components/editor.ts":
/*!**********************************!*\
  !*** ./src/components/editor.ts ***!
  \**********************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Editor\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @repcomm/exponent-ts */ \"./node_modules/@repcomm/exponent-ts/lib/mod.js\");\n/* harmony import */ var _tray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tray */ \"./src/components/tray.ts\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Editor = /*#__PURE__*/function (_Grid) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Editor, _Grid);\n\n  var _super = _createSuper(Editor);\n\n  function Editor() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Editor);\n\n    _this = _super.call(this);\n\n    _this.addClasses(\"editor\");\n\n    _this.setStyleItem(\"grid-template-rows\", \"minmax(0, 1fr) minmax(0, 15fr)\");\n\n    _this.setStyleItem(\"grid-template-columns\", \"minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr)\");\n\n    _this.tray = new _tray__WEBPACK_IMPORTED_MODULE_6__[\"Tray\"]();\n\n    _this.setCell(_this.tray, 1, 2);\n\n    _this.tray.createItem().setImage(\"resources/icons/panel.svg\").setLabel(\"Panel\").setUserData({\n      test: \"test\"\n    });\n\n    _this.tray.createItem().setImage(\"resources/icons/imagepanel.svg\").setLabel(\"Image Panel\").setUserData({\n      test: \"test\"\n    });\n\n    _this.highlighter = new _repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_5__[\"Panel\"]().setId(\"highlighter\");\n\n    _this.setCell(_this.highlighter, 2, 2);\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Editor, [{\n    key: \"getTray\",\n    value: function getTray() {\n      return this.tray;\n    }\n  }]);\n\n  return Editor;\n}(_repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"]);\n\n//# sourceURL=webpack:///./src/components/editor.ts?");

/***/ }),

/***/ "./src/components/tray.ts":
/*!********************************!*\
  !*** ./src/components/tray.ts ***!
  \********************************/
/*! exports provided: TrayItem, Tray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TrayItem\", function() { return TrayItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tray\", function() { return Tray; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @repcomm/exponent-ts */ \"./node_modules/@repcomm/exponent-ts/lib/mod.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar TrayItem = /*#__PURE__*/function (_Panel) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TrayItem, _Panel);\n\n  var _super = _createSuper(TrayItem);\n\n  function TrayItem() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TrayItem);\n\n    _this = _super.call(this);\n\n    _this.addClasses(\"tray-item\");\n\n    _this.image = new _repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_6__[\"ImagePanel\"]().addClasses(\"tray-item-image\").mount(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    _this.label = new _repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_6__[\"Exponent\"]().make(\"span\").addClasses(\"exponent\", \"tray-item-label\", \"no-select\").mount(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TrayItem, [{\n    key: \"setLabel\",\n    value: function setLabel(txt) {\n      this.label.setTextContent(txt);\n      return this;\n    }\n  }, {\n    key: \"setImage\",\n    value: function setImage(url) {\n      this.image.setImage(url);\n      return this;\n    }\n  }, {\n    key: \"getUserData\",\n    value: function getUserData() {\n      return this.userData;\n    }\n  }, {\n    key: \"setUserData\",\n    value: function setUserData(userData) {\n      this.userData = userData;\n      return this;\n    }\n  }, {\n    key: \"hasUserData\",\n    value: function hasUserData() {\n      if (this.userData) return true;\n      return false;\n    }\n  }]);\n\n  return TrayItem;\n}(_repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_6__[\"Panel\"]);\nvar Tray = /*#__PURE__*/function (_Panel2) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Tray, _Panel2);\n\n  var _super2 = _createSuper(Tray);\n\n  function Tray() {\n    var _this2;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tray);\n\n    _this2 = _super2.call(this);\n\n    _this2.addClasses(\"tray\");\n\n    _this2.items = new Set();\n    return _this2;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tray, [{\n    key: \"addItem\",\n    value: function addItem(item) {\n      if (this.hasItem(item)) throw \"Tray already has item \".concat(item, \", cannot add again\");\n      item.mount(this);\n      this.items.add(item);\n      return this;\n    }\n  }, {\n    key: \"hasItem\",\n    value: function hasItem(item) {\n      return this.items.has(item);\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem(item) {\n      if (!this.hasItem(item)) throw \"Item '\".concat(item, \"' was not found in tray, could not remove\");\n      item.unmount();\n      this.items[\"delete\"](item);\n      return this;\n    }\n  }, {\n    key: \"createItem\",\n    value: function createItem() {\n      var result = new TrayItem();\n      this.addItem(result);\n      return result;\n    }\n  }]);\n\n  return Tray;\n}(_repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_6__[\"Panel\"]);\n\n//# sourceURL=webpack:///./src/components/tray.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repcomm/exponent-ts */ \"./node_modules/@repcomm/exponent-ts/lib/mod.js\");\n/* harmony import */ var _components_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/editor */ \"./src/components/editor.ts\");\n\n //Add the exponent styles\n\n_repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_0__[\"EXPONENT_CSS_STYLES\"].mount(document.head); //Create a container panel for the elements\n\nvar container = new _repcomm_exponent_ts__WEBPACK_IMPORTED_MODULE_0__[\"Panel\"]().setId(\"container\").mount(document.body);\nvar editor = new _components_editor__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"]().mount(container);\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });