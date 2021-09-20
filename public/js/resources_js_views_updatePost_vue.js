(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_updatePost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/updatePost.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/updatePost.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "addPost",
  data: function data() {
    return {
      postErrors: {},
      post: {
        content: '',
        image: {},
        user_id: ''
      }
    };
  },
  computed: {
    get_post_errors: function get_post_errors() {
      return _objectSpread({}, this.$store.getters['Post/get_all_errors']);
    },
    get_auth_user: function get_auth_user() {
      return _objectSpread({}, this.$store.getters['User/get_auth_user']);
    },
    get_specified_post: function get_specified_post() {
      return _objectSpread({}, this.$store.getters['Post/get_specified_post'].data);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('Post/post_show', this.$route.params.id).then(function (response) {
      console.log(_this.get_specified_post);
    });
  },
  created: function created() {
    this.post.user_id = this.get_auth_user.id;
  },
  methods: {
    PostImage: function PostImage(event) {
      var _this2 = this;

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = function () {
        _this2.post.image = reader.result;
      };
    },
    updatePost: function updatePost(data) {
      var _this3 = this;

      this.$store.dispatch('Post/update_post', data).then(function () {
        _this3.$root.$emit('successCheck', {
          message: 'Your post is successfully updated'
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/updatePost.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/updatePost.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updatePost_vue_vue_type_template_id_7a800270_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePost.vue?vue&type=template&id=7a800270&scoped=true& */ "./resources/js/views/updatePost.vue?vue&type=template&id=7a800270&scoped=true&");
/* harmony import */ var _updatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePost.vue?vue&type=script&lang=js& */ "./resources/js/views/updatePost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _updatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _updatePost_vue_vue_type_template_id_7a800270_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _updatePost_vue_vue_type_template_id_7a800270_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a800270",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/updatePost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/updatePost.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/updatePost.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./updatePost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/updatePost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/updatePost.vue?vue&type=template&id=7a800270&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/updatePost.vue?vue&type=template&id=7a800270&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updatePost_vue_vue_type_template_id_7a800270_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updatePost_vue_vue_type_template_id_7a800270_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_updatePost_vue_vue_type_template_id_7a800270_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./updatePost.vue?vue&type=template&id=7a800270&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/updatePost.vue?vue&type=template&id=7a800270&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/updatePost.vue?vue&type=template&id=7a800270&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/updatePost.vue?vue&type=template&id=7a800270&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "posts-wrapper" }, [
      _c("h2", [_vm._v("My Posts")]),
      _vm._v(" "),
      _c("div", { staticClass: "row row-cols-1 row-cols-md-2 g-4" }, [
        _c("div", { staticClass: "col post-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src: "/storage/Post-avatars/" + _vm.get_specified_post.image,
                alt: "..."
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("p", [_vm._v(_vm._s(_vm.get_specified_post.content))])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "posts" }, [
      _c("h2", [_vm._v("Update Post")]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "form-cont" }, [
              _c("label", { attrs: { for: "textarea_post" } }, [
                _vm._v(
                  "\n                        Post content\n                        "
                ),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.get_specified_post.content,
                      expression: "get_specified_post.content"
                    }
                  ],
                  attrs: { name: "", id: "textarea_post" },
                  domProps: { value: _vm.get_specified_post.content },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.get_specified_post,
                        "content",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.postErrors.content,
                        expression: "postErrors.content"
                      }
                    ],
                    staticClass: "form__field"
                  },
                  [
                    _c("input", {
                      staticClass: "bg-danger",
                      attrs: { type: "text", disabled: "" },
                      domProps: { value: _vm.postErrors.content }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "custom-file" }, [
                _c("input", {
                  staticClass: "custom-file-input",
                  attrs: {
                    type: "file",
                    name: "avatar",
                    id: "inputGroupFile00"
                  },
                  on: { change: _vm.PostImage }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.postErrors.image,
                        expression: "postErrors.image"
                      }
                    ],
                    staticClass: "form__field"
                  },
                  [
                    _c("input", {
                      staticClass: "bg-danger",
                      attrs: { type: "text", disabled: "" },
                      domProps: { value: _vm.postErrors.image }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-file-label",
                    attrs: { for: "inputGroupFile00" }
                  },
                  [_vm._v("Choose image")]
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "add_post",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.updatePost(_vm.get_specified_post)
                    }
                  }
                },
                [_vm._v("Add post")]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);