"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./components/home/home.component");
var blogs_component_1 = require("./components/blogs/blogs.component");
var blog_component_1 = require("./components/blog/blog.component");
var shop_component_1 = require("./components/shop/shop.component");
var product_component_1 = require("./components/product/product.component");
var shows_component_1 = require("./components/shows/shows.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'blog',
        component: blogs_component_1.BlogsComponent
    },
    {
        path: 'blog/post/:id',
        component: blog_component_1.BlogComponent
    },
    {
        path: 'shop',
        component: shop_component_1.ShopComponent
    },
    {
        path: 'shows',
        component: shows_component_1.ShowsComponent
    },
    {
        path: 'shop/product/:id',
        component: product_component_1.ProductComponent
    }
];
//# sourceMappingURL=app.routing.js.map