(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{238:function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("47ab6571",content,!0,{sourceMap:!1})},240:function(t,e,n){var content=n(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("55d6cbf0",content,!0,{sourceMap:!1})},241:function(t,e,n){"use strict";n(238)},242:function(t,e,n){(e=n(25)(!1)).push([t.i,"[data-v-649a290f]:root{--color-primary:#305d83;--color-primary-lighter:#5a98d0;--color-accent:orange;--color-white:#fff;--color-text:#080610;--color-gray-dark:#999;--color-gray:#ccc;--header-height:72px;--header-height-mobile:54px;--breakpoint-sm:600px;--breakpoint-md:768px;--breakpoint-lg:1024px;--font-title-1:4.8rem;--font-title-2:2.4rem;--font-title-3:2rem;--font-title-4:1.8rem;--font-text:1.6rem;--font-text-small:1.4rem;--font-caption:1.2rem}html[data-v-649a290f]{font-size:10px;overflow-x:hidden;width:100%}body[data-v-649a290f]{font-family:Montserrat,Roboto,Segoe UI,Helvetica Neue,sans-serif;font-weight:400;line-height:1.42857rem;text-transform:none;letter-spacing:normal}body *[data-v-649a290f]{font-size:1.6rem;font-size:var(--font-text);line-height:1}a[data-v-649a290f],button[data-v-649a290f],h1[data-v-649a290f],h2[data-v-649a290f],h3[data-v-649a290f],h4[data-v-649a290f],h5[data-v-649a290f],p[data-v-649a290f]{font-family:Montserrat,Roboto,Segoe UI,Helvetica Neue,sans-serif}p[data-v-649a290f]{line-height:1.5}*[data-v-649a290f],[data-v-649a290f]:after,[data-v-649a290f]:before{box-sizing:border-box;margin:0}.container[data-v-649a290f]{max-width:1024px;margin-left:auto;margin-right:auto}.image[data-v-649a290f]{display:block;position:relative}.image img[data-v-649a290f]{position:absolute;display:block;width:100%;height:100%;bottom:0;left:0;right:0;top:0}.image.is-4by3[data-v-649a290f]{padding-top:75%}.image.is-3by1[data-v-649a290f]{padding-top:33.3333%}.image.is-square[data-v-649a290f]{padding-top:100%}.image.is-3by2[data-v-649a290f]{padding-top:66.6666%}img.loading[data-v-649a290f]{background:#ddd}.media[data-v-649a290f]{padding-bottom:16px;display:flex}.media-image[data-v-649a290f]{min-width:200px}.media-content[data-v-649a290f]{padding-left:16px}.media-content-title[data-v-649a290f]{padding-bottom:8px;display:block;font-weight:700;text-decoration:none;color:#305d83;color:var(--color-primary);font-size:1.8rem;font-size:var(--font-title-4)}",""]),t.exports=e},243:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},245:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!0},description:{type:String},link:{type:String}}},r=(n(241),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"media"},[t._m(0),t._v(" "),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("NuxtLink",{staticClass:"media-content-title",attrs:{to:t.link}},[t._v("\n\t\t\t\t\t"+t._s(t.title)+"\n\t\t\t\t\t")])],1),t._v(" "),n("p",[t._v("\n\t\t\t\t\t"+t._s(t.description)+"\n\t\t\t\t")]),t._v(" "),t._t("default")],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-image"},[e("figure",{staticClass:"image is-3by2"},[e("img",{attrs:{src:"http://lorempixel.com/480/320"}})])])}],!1,null,"649a290f",null);e.default=component.exports},248:function(t,e,n){t.exports=function(){"use strict";function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var e="undefined"!=typeof window,n=e&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=e&&"IntersectionObserver"in window,o=e&&"classList"in document.createElement("p"),r=e&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:n||e?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},l=function(e){return t({},a,e)},s=function(t,e){var n,i="LazyLoad::Initialized",o=new t(e);try{n=new CustomEvent(i,{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(n)},c="loading",u="loaded",d="applied",f="error",v="native",b=function(t,e){return t.getAttribute("data-"+e)},p=function(t){return b(t,"ll-status")},h=function(t,e){return function(t,e,n){var i="data-ll-status";null!==n?t.setAttribute(i,n):t.removeAttribute(i)}(t,0,e)},m=function(t){return h(t,null)},_=function(t){return null===p(t)},x=function(t){return p(t)===v},y=[c,u,d,f],w=function(t,e,n,i){t&&(void 0===i?void 0===n?t(e):t(e,n):t(e,n,i))},k=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},E=function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},C=function(t){return t.llTempImage},I=function(t,e){if(e){var n=e._observer;n&&n.unobserve(t)}},z=function(t,e){t&&(t.loadingCount+=e)},O=function(t,e){t&&(t.toLoadCount=e)},A=function(t){for(var e,n=[],i=0;e=t.children[i];i+=1)"SOURCE"===e.tagName&&n.push(e);return n},L=function(t,e,n){n&&t.setAttribute(e,n)},M=function(t,e){t.removeAttribute(e)},N=function(t){return!!t.llOriginalAttrs},S=function(t){if(!N(t)){var e={};e.src=t.getAttribute("src"),e.srcset=t.getAttribute("srcset"),e.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=e}},R=function(t){if(N(t)){var e=t.llOriginalAttrs;L(t,"src",e.src),L(t,"srcset",e.srcset),L(t,"sizes",e.sizes)}},j=function(t,e){L(t,"sizes",b(t,e.data_sizes)),L(t,"srcset",b(t,e.data_srcset)),L(t,"src",b(t,e.data_src))},$=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes")},D=function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&A(n).forEach(e)},H={IMG:function(t,e){D(t,(function(t){S(t),j(t,e)})),S(t),j(t,e)},IFRAME:function(t,e){L(t,"src",b(t,e.data_src))},VIDEO:function(t,e){!function(t,n){A(t).forEach((function(t){L(t,"src",b(t,e.data_src))}))}(t),L(t,"poster",b(t,e.data_poster)),L(t,"src",b(t,e.data_src)),t.load()}},T=function(t,e){var n=H[t.tagName];n&&n(t,e)},U=function(t,e,n){z(n,1),k(t,e.class_loading),h(t,c),w(e.callback_loading,t,n)},G=["IMG","IFRAME","VIDEO"],P=function(t,e){!e||function(t){return t.loadingCount>0}(e)||function(t){return t.toLoadCount>0}(e)||w(t.callback_finish,e)},q=function(t,e,n){t.addEventListener(e,n),t.llEvLisnrs[e]=n},V=function(t,e,n){t.removeEventListener(e,n)},F=function(t){return!!t.llEvLisnrs},J=function(t){if(F(t)){var e=t.llEvLisnrs;for(var n in e){var i=e[n];V(t,n,i)}delete t.llEvLisnrs}},B=function(t,e,n){!function(t){delete t.llTempImage}(t),z(n,-1),function(t){t&&(t.toLoadCount-=1)}(n),E(t,e.class_loading),e.unobserve_completed&&I(t,n)},Q=function(t,e,n){var i=C(t)||t;F(i)||function(t,e,n){F(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";q(t,i,e),q(t,"error",n)}(i,(function(o){!function(t,e,n,i){var o=x(e);B(e,n,i),k(e,n.class_loaded),h(e,u),w(n.callback_loaded,e,i),o||P(n,i)}(0,t,e,n),J(i)}),(function(o){!function(t,e,n,i){var o=x(e);B(e,n,i),k(e,n.class_error),h(e,f),w(n.callback_error,e,i),o||P(n,i)}(0,t,e,n),J(i)}))},K=function(t,e,n){!function(t){return G.indexOf(t.tagName)>-1}(t)?function(t,e,n){!function(t){t.llTempImage=document.createElement("IMG")}(t),Q(t,e,n),function(t,e,n){var i=b(t,e.data_bg),o=b(t,e.data_bg_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage='url("'.concat(a,'")'),C(t).setAttribute("src",a),U(t,e,n))}(t,e,n),function(t,e,n){var i=b(t,e.data_bg_multi),o=b(t,e.data_bg_multi_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage=a,function(t,e,n){k(t,e.class_applied),h(t,d),e.unobserve_completed&&I(t,e),w(e.callback_applied,t,n)}(t,e,n))}(t,e,n)}(t,e,n):function(t,e,n){Q(t,e,n),T(t,e),U(t,e,n)}(t,e,n)},W=["IMG","IFRAME","VIDEO"],X=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},Y=function(t){return Array.prototype.slice.call(t)},Z=function(t){return t.container.querySelectorAll(t.elements_selector)},tt=function(t){return function(t){return p(t)===f}(t)},et=function(t,e){return function(t){return Y(t).filter(_)}(t||Z(e))},rt=function(t,n){var o=l(t);this._settings=o,this.loadingCount=0,function(t,e){i&&!X(t)&&(e._observer=new IntersectionObserver((function(n){!function(t,e,n){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,e,n,i){var o=function(t){return y.indexOf(p(t))>=0}(t);h(t,"entered"),k(t,n.class_entered),E(t,n.class_exited),function(t,e,n){e.unobserve_entered&&I(t,n)}(t,n,i),w(n.callback_enter,t,e,i),o||K(t,n,i)}(t.target,t,e,n):function(t,e,n,i){_(t)||(k(t,n.class_exited),function(t,e,n,i){n.cancel_on_exit&&function(t){return p(t)===c}(t)&&"IMG"===t.tagName&&(J(t),function(t){D(t,(function(t){$(t)})),$(t)}(t),function(t){D(t,(function(t){R(t)})),R(t)}(t),E(t,n.class_loading),z(i,-1),m(t),w(n.callback_cancel,t,e,i))}(t,e,n,i),w(n.callback_exit,t,e,i))}(t.target,t,e,n)}))}(n,t,e)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(o,this),function(t,n){e&&window.addEventListener("online",(function(){!function(t,e){var n;(n=Z(t),Y(n).filter(tt)).forEach((function(e){E(e,t.class_error),m(e)})),e.update()}(t,n)}))}(o,this),this.update(n)};return rt.prototype={update:function(t){var e,o,r=this._settings,a=et(t,r);O(this,a.length),!n&&i?X(r)?function(t,e,n){t.forEach((function(t){-1!==W.indexOf(t.tagName)&&function(t,e,n){t.setAttribute("loading","lazy"),Q(t,e,n),T(t,e),h(t,v)}(t,e,n)})),O(n,0)}(a,r,this):(o=a,function(t){t.disconnect()}(e=this._observer),function(t,e){e.forEach((function(e){t.observe(e)}))}(e,o)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),Z(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var e=this,n=this._settings;et(t,n).forEach((function(t){I(t,e),K(t,n,e)}))}},rt.load=function(t,e){var n=l(e);K(t,n)},rt.resetStatus=function(t){m(t)},e&&function(t,e){if(e)if(e.length)for(var n,i=0;n=e[i];i+=1)s(t,n);else s(t,e)}(rt,window.lazyLoadOptions),rt}()},249:function(t,e,n){"use strict";n(240)},250:function(t,e,n){var o=n(25),r=n(243),l=n(251);e=o(!1);var c=r(l);e.push([t.i,"[data-v-46ad5a64]:root{--color-primary:#305d83;--color-primary-lighter:#5a98d0;--color-accent:orange;--color-white:#fff;--color-text:#080610;--color-gray-dark:#999;--color-gray:#ccc;--header-height:72px;--header-height-mobile:54px;--breakpoint-sm:600px;--breakpoint-md:768px;--breakpoint-lg:1024px;--font-title-1:4.8rem;--font-title-2:2.4rem;--font-title-3:2rem;--font-title-4:1.8rem;--font-text:1.6rem;--font-text-small:1.4rem;--font-caption:1.2rem}html[data-v-46ad5a64]{font-size:10px;overflow-x:hidden;width:100%}body[data-v-46ad5a64]{font-family:Montserrat,Roboto,Segoe UI,Helvetica Neue,sans-serif;font-weight:400;line-height:1.42857rem;text-transform:none;letter-spacing:normal}body *[data-v-46ad5a64]{font-size:1.6rem;font-size:var(--font-text);line-height:1}a[data-v-46ad5a64],button[data-v-46ad5a64],h1[data-v-46ad5a64],h2[data-v-46ad5a64],h3[data-v-46ad5a64],h4[data-v-46ad5a64],h5[data-v-46ad5a64],p[data-v-46ad5a64]{font-family:Montserrat,Roboto,Segoe UI,Helvetica Neue,sans-serif}p[data-v-46ad5a64]{line-height:1.5}*[data-v-46ad5a64],[data-v-46ad5a64]:after,[data-v-46ad5a64]:before{box-sizing:border-box;margin:0}.container[data-v-46ad5a64]{max-width:1024px;margin-left:auto;margin-right:auto}.image[data-v-46ad5a64]{display:block;position:relative}.image img[data-v-46ad5a64]{position:absolute;display:block;width:100%;height:100%;bottom:0;left:0;right:0;top:0}.image.is-4by3[data-v-46ad5a64]{padding-top:75%}.image.is-3by1[data-v-46ad5a64]{padding-top:33.3333%}.image.is-square[data-v-46ad5a64]{padding-top:100%}.image.is-3by2[data-v-46ad5a64]{padding-top:66.6666%}img.loading[data-v-46ad5a64]{background:#ddd}.childpage-header[data-v-46ad5a64]{min-height:200px;background:url("+c+");background-repeat:no-repeat;background-size:cover;display:flex;width:100%;align-items:center;justify-content:space-around;text-align:center}.title[data-v-46ad5a64]{font-size:2.4rem;font-size:var(--font-title-2);font-weight:600;color:#fff;color:var(--color-white)}.subtitle[data-v-46ad5a64]{font-size:1.6rem;font-size:var(--font-text);color:#ccc;color:var(--color-gray)}.page-content[data-v-46ad5a64]{padding:24px 0}",""]),t.exports=e},251:function(t,e,n){t.exports=n.p+"img/child-banner.8404276.jpg"},253:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(248),l=n.n(r),c={elements_selector:".page-content img",threshold:0,class_loaded:"loaded"},d=o.a.extend({props:{background:{type:String}},mounted:function(){new l.a(c)}}),f=(n(249),n(8)),component=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"childpage-header"},[e("div",[e("p",{staticClass:"title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"subtitle"},[this._t("subtitle")],2)])]),this._v(" "),e("div",{staticClass:"container page-content"},[this._t("default")],2)])}),[],!1,null,"46ad5a64",null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({}),r=n(8),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("PageContainer",[e("template",{slot:"title"},[this._v("\n\t\tBlog\n\t")]),this._v(" "),e("template",{slot:"subtitle"},[this._v("\n\t\tCode for food or code for fun :))\n\t")]),this._v(" "),e("div",[e("div",this._l([1,2,3,4,5,6,7],(function(i){return e("ItemList",{key:i,attrs:{link:"/blog/day-one",title:"How the browser renders a web page? — DOM, CSSOM, and Rendering",description:"In this article, we will deep dive into DOM and CSSOM to understand how the browser renders a webpage. The browser blocks some rendering of a webpage until certain resources are loaded first while other resources are loaded asynchronously."}})})),1)])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemList:n(245).default,PageContainer:n(253).default})}}]);