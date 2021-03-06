"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@tzfe/toolkit");
var Example = /** @class */ (function () {
    function Example() {
        this.obj = { a: 1 };
    }
    Example.prototype.setSearchKey = function (obj, sec) {
        console.log("obj", obj);
        console.log("sec", sec);
    };
    __decorate([
        toolkit_1.SearchKey({ a: "name_like_or_unitName_like" })
    ], Example.prototype, "setSearchKey", null);
    return Example;
}());
var example = new Example();
example.setSearchKey({ a: 1, "b@": 2, c: 3 }, 123);
