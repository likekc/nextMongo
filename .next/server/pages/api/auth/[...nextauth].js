"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\[...nextauth].js */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1QyU1Qi4uLm5leHRhdXRoJTVELmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2lFO0FBQ2pFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ydW0vPzMxNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF0uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/util/database */ \"(api)/./util/database.js\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n//import GoogleProvider from \"next-auth/providers/google\";\n\n\nconst authOptions = {\n    providers: [\n        // providers: [                         //다른 사이트 사용\n        //   GoogleProvider({\n        //     clientId: '978787063277-2gdiuuoj80v904qfe0gsatece9ao8qm4.apps.googleusercontent.com',\n        //     clientSecret: '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',\n        //   })\n        // ],             //다른 사이트 사용\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: \"f417480bd5162e5281ce\",\n            clientSecret: \"c6fe42760379ae4c40bf2d1f59ff7efba9f826ae\"\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            //1. 로그인페이지 폼 자동생성해주는 코드 \n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            //2. 로그인요청시 실행되는코드\n            //직접 DB에서 아이디,비번 비교하고 \n            //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함\n            async authorize (credentials) {\n                let db = (await _util_database__WEBPACK_IMPORTED_MODULE_0__.connectDB).db(\"forum\");\n                let user = await db.collection(\"user_cred\").findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    console.log(\"해당 이메일은 없음\");\n                    return null;\n                }\n                const pwcheck = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compare(credentials.password, user.password);\n                if (!pwcheck) {\n                    console.log(\"비번틀림\");\n                    return null;\n                }\n                return user;\n            }\n        })\n    ],\n    //3. jwt 써놔야 잘됩니다 + jwt 만료일설정\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60 //30일  일, 시, 분, 초\n    },\n    callbacks: {\n        //4. jwt 만들 때 실행되는 코드 \n        //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.\n        jwt: async ({ token, user })=>{\n            if (user) {\n                token.user = {};\n                token.user.name = user.name;\n                token.user.email = user.email;\n            }\n            return token;\n        },\n        //5. 유저 세션이 조회될 때 마다 실행되는 코드\n        session: async ({ session, token })=>{\n            session.user = token.user;\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__.MongoDBAdapter)(_util_database__WEBPACK_IMPORTED_MODULE_0__.connectDB)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZ0I7QUFDM0I7QUFDdUI7QUFDeEQsMERBQTBEO0FBQ1E7QUFDdEM7QUFFckIsTUFBTU0sY0FBYztJQUN6QkMsV0FBVztRQUNQLG1EQUFtRDtRQUNuRCxxQkFBcUI7UUFDckIsNEZBQTRGO1FBQzVGLDJEQUEyRDtRQUMzRCxPQUFPO1FBQ1AsNkJBQTZCO1FBQy9CSixpRUFBY0EsQ0FBQztZQUNiSyxVQUFVO1lBQ1ZDLGNBQWM7UUFDaEI7UUFFQUwsc0VBQW1CQSxDQUFDO1lBQ2xCLHlCQUF5QjtZQUN6Qk0sTUFBTTtZQUNKQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNwRDtZQUNBLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsMkNBQTJDO1lBQzNDLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUlNLEtBQUssQ0FBQyxNQUFNakIscURBQVEsRUFBR2lCLEVBQUUsQ0FBQztnQkFDOUIsSUFBSUMsT0FBTyxNQUFNRCxHQUFHRSxVQUFVLENBQUMsYUFBYUMsT0FBTyxDQUFDO29CQUFDUixPQUFRRCxZQUFZQyxLQUFLO2dCQUFBO2dCQUM5RSxJQUFJLENBQUNNLE1BQU07b0JBQ1RHLFFBQVFDLEdBQUcsQ0FBQztvQkFDWixPQUFPO2dCQUNUO2dCQUNBLE1BQU1DLFVBQVUsTUFBTWxCLHFEQUFjLENBQUNNLFlBQVlJLFFBQVEsRUFBRUcsS0FBS0gsUUFBUTtnQkFDeEUsSUFBSSxDQUFDUSxTQUFTO29CQUNaRixRQUFRQyxHQUFHLENBQUM7b0JBQ1osT0FBTztnQkFDVDtnQkFDQSxPQUFPSjtZQUNUO1FBQ0Y7S0FFRDtJQUVELDZCQUE2QjtJQUM3Qk8sU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUssR0FBRyxpQkFBaUI7SUFDN0M7SUFFQUMsV0FBVztRQUNULHNCQUFzQjtRQUN0QixxREFBcUQ7UUFDckRDLEtBQUssT0FBTyxFQUFFQyxLQUFLLEVBQUVaLElBQUksRUFBRTtZQUN6QixJQUFJQSxNQUFNO2dCQUNSWSxNQUFNWixJQUFJLEdBQUcsQ0FBQztnQkFDZFksTUFBTVosSUFBSSxDQUFDUixJQUFJLEdBQUdRLEtBQUtSLElBQUk7Z0JBQzNCb0IsTUFBTVosSUFBSSxDQUFDTixLQUFLLEdBQUdNLEtBQUtOLEtBQUs7WUFDL0I7WUFDQSxPQUFPa0I7UUFDVDtRQUNBLDRCQUE0QjtRQUM1QkwsU0FBUyxPQUFPLEVBQUVBLE9BQU8sRUFBRUssS0FBSyxFQUFFO1lBQ2hDTCxRQUFRUCxJQUFJLEdBQUdZLE1BQU1aLElBQUk7WUFDekIsT0FBT087UUFDVDtJQUNGO0lBRUFNLFFBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNwQ0MsU0FBVWxDLDBFQUFjQSxDQUFDRCxxREFBU0E7QUFDcEMsRUFBRTtBQUNGLGlFQUFlRSxnREFBUUEsQ0FBQ0ksWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvcnVtLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCJAL3V0aWwvZGF0YWJhc2VcIjtcclxuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG4vL2ltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogWyAgICAgICAgICAgIFxyXG4gICAgICAvLyBwcm92aWRlcnM6IFsgICAgICAgICAgICAgICAgICAgICAgICAgLy/ri6Trpbgg7IKs7J207Yq4IOyCrOyaqVxyXG4gICAgICAvLyAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgLy8gICAgIGNsaWVudElkOiAnOTc4Nzg3MDYzMjc3LTJnZGl1dW9qODB2OTA0cWZlMGdzYXRlY2U5YW84cW00LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcclxuICAgICAgLy8gICAgIGNsaWVudFNlY3JldDogJ0dPQ1NQWC0xRG42aG5qX2t0ejlMWEVRMjl2MEVFR0RfYVBYJyxcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyBdLCAgICAgICAgICAgICAvL+uLpOuluCDsgqzsnbTtirgg7IKs7JqpXHJcbiAgICBHaXRodWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiAnZjQxNzQ4MGJkNTE2MmU1MjgxY2UnLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6ICdjNmZlNDI3NjAzNzlhZTRjNDBiZjJkMWY1OWZmN2VmYmE5ZjgyNmFlJyxcclxuICAgIH0pLFxyXG4gICAgICAgIFxyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIC8vMS4g66Gc6re47J247Y6Y7J207KeAIO2PvCDsnpDrj5nsg53shLHtlbTso7zripQg7L2U65OcIFxyXG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcImVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJwYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAgLy8yLiDroZzqt7jsnbjsmpTssq3si5wg7Iuk7ZaJ65CY64qU7L2U65OcXHJcbiAgICAgIC8v7KeB7KCRIERC7JeQ7IScIOyVhOydtOuUlCzruYTrsogg67mE6rWQ7ZWY6rOgIFxyXG4gICAgICAvL+yVhOydtOuUlCzruYTrsogg66ee7Jy866m0IHJldHVybiDqsrDqs7wsIO2LgOumrOuptCByZXR1cm4gbnVsbCDtlbTslbztlahcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgbGV0IGRiID0gKGF3YWl0IGNvbm5lY3REQikuZGIoJ2ZvcnVtJyk7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VyX2NyZWQnKS5maW5kT25lKHtlbWFpbCA6IGNyZWRlbnRpYWxzLmVtYWlsfSlcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCftlbTri7kg7J2066mU7J287J2AIOyXhuydjCcpO1xyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHdjaGVjayA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICBpZiAoIXB3Y2hlY2spIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfruYTrsojti4DrprwnKTtcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1c2VyXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIF0sXHJcblxyXG4gIC8vMy4gand0IOyNqOuGlOyVvCDsnpjrkKnri4jri6QgKyBqd3Qg66eM66OM7J287ISk7KCVXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCAvLzMw7J28ICDsnbwsIOyLnCwg67aELCDstIhcclxuICB9LFxyXG5cclxuICBjYWxsYmFja3M6IHtcclxuICAgIC8vNC4gand0IOunjOuTpCDrlYwg7Iuk7ZaJ65CY64qUIOy9lOuTnCBcclxuICAgIC8vdXNlcuuzgOyImOuKlCBEQuydmCDsnKDsoIDsoJXrs7Tri7Tqsqjsnojqs6AgdG9rZW4udXNlcuyXkCDrrZAg7KCA7J6l7ZWY66m0IGp3dOyXkCDrk6TslrTqsJHri4jri6QuXHJcbiAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyIH0pID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi51c2VyID0ge307XHJcbiAgICAgICAgdG9rZW4udXNlci5uYW1lID0gdXNlci5uYW1lXHJcbiAgICAgICAgdG9rZW4udXNlci5lbWFpbCA9IHVzZXIuZW1haWxcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgLy81LiDsnKDsoIAg7IS47IWY7J20IOyhsO2ajOuQoCDrlYwg66eI64ukIOyLpO2WieuQmOuKlCDsvZTrk5xcclxuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcclxuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjsgIFxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICAgIFxyXG4gIHNlY3JldCA6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuICBhZGFwdGVyIDogTW9uZ29EQkFkYXB0ZXIoY29ubmVjdERCKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7ICJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJNb25nb0RCQWRhcHRlciIsIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJkYiIsInVzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImNvbnNvbGUiLCJsb2ciLCJwd2NoZWNrIiwiY29tcGFyZSIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImFkYXB0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./util/database.js":
/*!**************************!*\
  !*** ./util/database.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst url = \"mongodb://localhost:27017\";\n//const url = 'mongodb+srv://admin:umss0110@cluster0.yw8mhwi.mongodb.net/'\n//const url = 'mongodb+srv://admin:umss0110@cluster0.yw8mhwi.mongodb.net/DB지정이름'\n//const options = { useNewUrlParser: true }\nlet connectDB;\nif (true) {\n    if (!global._mongo) {\n        //global._mongo = new MongoClient(url, options).connect()\n        global._mongo = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(url).connect();\n    }\n    connectDB = global._mongo;\n} else {}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL2RhdGFiYXNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUNyQyxNQUFNQyxNQUFNO0FBQ1osMEVBQTBFO0FBQzFFLGdGQUFnRjtBQUNoRiwyQ0FBMkM7QUFDM0MsSUFBSUM7QUFFSixJQUFJQyxJQUF5QixFQUFlO0lBQzFDLElBQUksQ0FBQ0MsT0FBT0MsTUFBTSxFQUFFO1FBQ2xCLHlEQUF5RDtRQUN6REQsT0FBT0MsTUFBTSxHQUFHLElBQUlMLGdEQUFXQSxDQUFDQyxLQUFLSyxPQUFPO0lBQzlDO0lBQ0FKLFlBQVlFLE9BQU9DLE1BQU07QUFDM0IsT0FBTyxFQUVOO0FBQ21CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ydW0vLi91dGlsL2RhdGFiYXNlLmpzPzBlNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5jb25zdCB1cmwgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNydcclxuLy9jb25zdCB1cmwgPSAnbW9uZ29kYitzcnY6Ly9hZG1pbjp1bXNzMDExMEBjbHVzdGVyMC55dzhtaHdpLm1vbmdvZGIubmV0LydcclxuLy9jb25zdCB1cmwgPSAnbW9uZ29kYitzcnY6Ly9hZG1pbjp1bXNzMDExMEBjbHVzdGVyMC55dzhtaHdpLm1vbmdvZGIubmV0L0RC7KeA7KCV7J2066aEJ1xyXG4vL2NvbnN0IG9wdGlvbnMgPSB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSB9XHJcbmxldCBjb25uZWN0REJcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nbykge1xyXG4gICAgLy9nbG9iYWwuX21vbmdvID0gbmV3IE1vbmdvQ2xpZW50KHVybCwgb3B0aW9ucykuY29ubmVjdCgpXHJcbiAgICBnbG9iYWwuX21vbmdvID0gbmV3IE1vbmdvQ2xpZW50KHVybCkuY29ubmVjdCgpXHJcbiAgfVxyXG4gIGNvbm5lY3REQiA9IGdsb2JhbC5fbW9uZ29cclxufSBlbHNlIHtcclxuICBjb25uZWN0REIgPSBuZXcgTW9uZ29DbGllbnQodXJsLCBvcHRpb25zKS5jb25uZWN0KClcclxufVxyXG5leHBvcnQgeyBjb25uZWN0REIgfVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVybCIsImNvbm5lY3REQiIsInByb2Nlc3MiLCJnbG9iYWwiLCJfbW9uZ28iLCJjb25uZWN0Iiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();