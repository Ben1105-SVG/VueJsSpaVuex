(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Register",
  data: function data() {
    return {
      form_fields: {
        username: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
      },
      success: false,
      errors: []
    };
  },
  methods: {
    send_form: function send_form() {
      this.$store.dispatch('registration_form_submit', this.form_fields);
    }
  },
  watch: {
    getSuccess: function getSuccess() {
      this.success = this.getSuccess;
      this.$router.push('login');
    },
    getErrors: function getErrors() {
      this.errors = this.getErrors;
    }
  },
  computed: {
    getSuccess: function getSuccess() {
      return this.$store.getters.getFormResponse.success;
    },
    getErrors: function getErrors() {
      return this.$store.getters.getFormResponse.errors;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c&scoped=true& */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3563ad7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=3563ad7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "grid align__item" }, [
        _c("div", { staticClass: "register" }, [
          _c(
            "svg",
            {
              staticClass: "site__logo",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "56",
                height: "84",
                viewBox: "77.7 214.9 274.7 412"
              }
            },
            [
              _c(
                "defs",
                [
                  _c(
                    "linearGradient",
                    { attrs: { id: "a", x1: "0%", y1: "0%", y2: "0%" } },
                    [
                      _c("stop", {
                        attrs: { offset: "0%", "stop-color": "#8ceabb" }
                      }),
                      _c("stop", {
                        attrs: { offset: "100%", "stop-color": "#378f7b" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("path", {
                attrs: {
                  fill: "url(#a)",
                  d:
                    "M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("h2", [_vm._v("Sign Up")]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "form",
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.send_form.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "form__field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form_fields.username,
                      expression: "form_fields.username"
                    }
                  ],
                  attrs: {
                    type: "text",
                    name: "username",
                    value: "",
                    placeholder: "Username"
                  },
                  domProps: { value: _vm.form_fields.username },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form_fields, "username", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.getErrors.username,
                      expression: "getErrors.username"
                    }
                  ],
                  staticClass: "form__field"
                },
                [
                  _c("input", {
                    staticClass: "bg-danger",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.getErrors.username }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form__field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form_fields.phone,
                      expression: "form_fields.phone"
                    }
                  ],
                  attrs: {
                    type: "text",
                    name: "phone",
                    value: "",
                    placeholder: "Phone"
                  },
                  domProps: { value: _vm.form_fields.phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form_fields, "phone", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.getErrors.phone,
                      expression: "getErrors.phone"
                    }
                  ],
                  staticClass: "form__field"
                },
                [
                  _c("input", {
                    staticClass: "bg-danger",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.getErrors.phone }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form__field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form_fields.email,
                      expression: "form_fields.email"
                    }
                  ],
                  attrs: {
                    type: "email",
                    name: "email",
                    value: "",
                    placeholder: "info@mailaddress.com"
                  },
                  domProps: { value: _vm.form_fields.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form_fields, "email", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.getErrors.email,
                      expression: "getErrors.email"
                    }
                  ],
                  staticClass: "form__field"
                },
                [
                  _c("input", {
                    staticClass: "bg-danger",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.getErrors.email }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form__field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form_fields.password,
                      expression: "form_fields.password"
                    }
                  ],
                  attrs: {
                    type: "password",
                    name: "password",
                    value: "",
                    placeholder: "•••••••••"
                  },
                  domProps: { value: _vm.form_fields.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form_fields, "password", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.getErrors.password,
                      expression: "getErrors.password"
                    }
                  ],
                  staticClass: "form__field"
                },
                [
                  _c("input", {
                    staticClass: "bg-danger",
                    attrs: { type: "text", disabled: "" },
                    domProps: { value: _vm.getErrors.password }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form__field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form_fields.password_confirmation,
                      expression: "form_fields.password_confirmation"
                    }
                  ],
                  attrs: {
                    type: "password",
                    name: "password_confirmation",
                    placeholder: "•••••••••"
                  },
                  domProps: { value: _vm.form_fields.password_confirmation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form_fields,
                        "password_confirmation",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(0)
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            [
              _vm._v("Already have an accout? "),
              _c("router-link", { attrs: { to: "/" } }, [_vm._v("Log in")])
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form__field" }, [
      _c("input", { attrs: { type: "submit", value: "Sign Up" } })
    ])
  }
]
render._withStripped = true



/***/ })

}]);