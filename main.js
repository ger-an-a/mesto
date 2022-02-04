(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.userNameSelector,r=e.activitySelector,o=e.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._activity=document.querySelector(r),this._avatar=document.querySelector(o)}var n,r;return n=t,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,activity:this._activity.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._activity.textContent=t}},{key:"setAvatar",value:function(e){this._avatar.src=e}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.forms.edit,r=document.forms.add,o=document.querySelector(".page"),i=o.querySelector(".profile__edit-btn"),a=o.querySelector(".profile__add-btn");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n,r){var o=t.name,i=t.link,a=t.likes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=o,this._link=i,this._alt=this._title,this._likes=a.length,this._cardSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_toggleLike",value:function(){this._likeBtn.classList.toggle("card__like-btn_active")}},{key:"_deleteCard",value:function(){this._element.closest(".card").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",this._handleCardClick),this._likeBtn.addEventListener("click",(function(){e._toggleLike()})),this._element.querySelector(".card__delete-btn").addEventListener("click",(function(){e._deleteCard()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__img"),this._likeBtn=this._element.querySelector(".card__like-btn"),this._element.querySelector(".card__title").textContent=this._title,this._element.querySelector(".card__likes").textContent=this._likes,this._cardImage.src=this._link,this._cardImage.alt=this._alt,this._setEventListeners(),this._element}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){return new l(e,"#card-template",(function(){t.open(e)})).generateCard()}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleOverlayClose",value:function(e){(e.target.classList.contains("button_target_close")||e.target.classList.contains("popup")&&!e.target.classList.contains("popup__container"))&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._handleOverlayClose)}},{key:"delEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._handleOverlayClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this.delEventListeners()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackSubmit=t,n._form=n._popup.querySelector(".form"),n._inputs=n._popup.querySelectorAll(".form__input"),n.formValues={},n}return t=a,(n=[{key:"getInputValues",value:function(){var e=this;this._inputs.forEach((function(t){e.formValues[t.name]=t.value}))}},{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){y(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._callbackSubmit)}},{key:"delEventListeners",value:function(){y(g(a.prototype),"delEventListeners",this).call(this),this._form.removeEventListener("submit",this._callbackSubmit)}},{key:"close",value:function(){y(g(a.prototype),"close",this).call(this),this._form.reset()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function L(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imgPopup=document.querySelector(".popup_target_img"),t._viewportTitle=t._imgPopup.querySelector(".photo-viewport__title"),t._viewportImg=t._imgPopup.querySelector(".photo-viewport__img"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.title,n=e.link,r=e.alt;S(j(a.prototype),"open",this).call(this),this._viewportTitle.textContent=t,this._viewportImg.src=n,this._viewportImg.alt=r}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q,B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(t.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_disabledButtonState",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disabledButtonState():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._buttonElement.addEventListener("click",this._enableValidation),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"hideErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._disabledButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-btn",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error"},R=new B(T,n),V=new B(T,r),x=function(e){var n=new t(e);return fetch("https://nomoreparties.co/v1/cohort-34/users/me",{method:"GET",headers:{authorization:"c0d2a2f4-6654-436b-b9fd-4446d91e7925"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){n.setUserInfo(e.name,e.about),n.setAvatar(e.avatar)})).catch((function(e){console.log(e)})),n}({userNameSelector:".profile__title",activitySelector:".profile__subtitle",avatarSelector:".profile__avatar"}),N=new P(".popup_target_img"),A=(q=N,console.log("попыточка"),void fetch("https://mesto.nomoreparties.co/v1/cohort-34/cards",{method:"GET",headers:{authorization:"c0d2a2f4-6654-436b-b9fd-4446d91e7925"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e);var t=new c({items:e,renderer:function(e){var n=f(e,q);t.addItem(n)}},".cards__grid");return t.renderItems(),t})).catch((function(e){console.log(e)}))),D=new E(".popup_target_edit",(function(e){e.preventDefault(),D.getInputValues(),fetch("https://mesto.nomoreparties.co/v1/cohort-34/users/me",{method:"PATCH",headers:{authorization:"c0d2a2f4-6654-436b-b9fd-4446d91e7925","Content-Type":"application/json"},body:JSON.stringify({name:D.formValues.userName,about:D.formValues.activity})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){x.setUserInfo(e.name,e.about)})).catch((function(e){console.log(e)})),D.close()})),U=new E(".popup_target_add",(function(e){e.preventDefault(),U.getInputValues();var t=f({title:U.formValues.title,link:U.formValues.sorce,alt:U.formValues.title},N);A.addItem(t),V.hideErrors(),U.close.bind(U)()}));R.enableValidation(),V.enableValidation(),D.setEventListeners(),i.addEventListener("click",(function(){D.setInputValues(x.getUserInfo()),D.open.bind(D)()})),U.setEventListeners(),a.addEventListener("click",U.open.bind(U))})();