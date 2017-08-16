"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/Rx");
var contentfulService = (function () {
    function contentfulService(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
        this.space = '5t2diyyfjpv1';
        this.token = '8b41ffa5f5aa4576d894fb46423d475213c3b9bd3fbaa63ef44a0f7283cba147';
        this.blog = '14l94LTcTksosm4k6uoUeA';
        this.product = '2idzk3SwUoe8mkiwok0Ii2';
        this.show = 'show';
        console.log('MovieService Initialized...');
    }
    contentfulService.prototype.getBlogs = function () {
        return this._http.get('https://cdn.contentful.com/spaces/' + this.space + '/entries?access_token=' + this.token + '&content_type=' + this.blog + '&include=10')
            .map(function (res) { return res.json(); });
    };
    contentfulService.prototype.getBlog = function (entry) {
        return this._http.get('https://cdn.contentful.com/spaces/' + this.space + '/entries/' + entry + '?access_token=' + this.token)
            .map(function (res) { return res.json(); });
    };
    contentfulService.prototype.getProducts = function () {
        return this._http.get('https://cdn.contentful.com/spaces/' + this.space + '/entries?access_token=' + this.token + '&content_type=' + this.product + '&include=10')
            .map(function (res) { return res.json(); });
    };
    contentfulService.prototype.getProduct = function (entry) {
        return this._http.get('https://cdn.contentful.com/spaces/' + this.space + '/entries/' + entry + '?access_token=' + this.token)
            .map(function (res) { return res.json(); });
    };
    contentfulService.prototype.getProductThumbnails = function (entry) {
        return this._http.get('https://cdn.contentful.com/spaces/' + this.space + '/entries?access_token=' + this.token + '&include=10&content_type=' + this.product + '&sys.id=' + entry)
            .map(function (res) { return res.json(); });
    };
    contentfulService.prototype.getProductImage = function (entry) {
        return this._http.get('https://cdn.contentful.com/spaces/' + this.space + '/entries?access_token=' + this.token + '&include=10&content_type=' + this.product + '&fields.image.sys.id=' + entry)
            .map(function (res) { return res.json(); });
    };
    contentfulService.prototype.getShows = function () {
        return this._http.get('https://cdn.contentful.com/spaces/' + this.space + '/entries?access_token=' + this.token + '&content_type=' + this.show + '&include=10')
            .map(function (res) { return res.json(); });
    };
    contentfulService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_2.Http, http_1.Jsonp])
    ], contentfulService);
    return contentfulService;
}());
exports.contentfulService = contentfulService;
//# sourceMappingURL=contentful.service.js.map