(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,r=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,l=e.unoptimized,c=void 0!==l&&l,p=e.priority,h=void 0!==p&&p,S=e.loading,j=e.lazyRoot,I=void 0===j?null:j,R=e.lazyBoundary,L=e.className,_=e.quality,C=e.width,q=e.height,O=e.style,N=e.objectFit,P=e.objectPosition,M=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,Z=e.blurDataURL,U=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=u.useContext(m.ImageConfigContext),V=u.useMemo((function(){var e=b||D||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:i})}),[D]),F=U,H=i?"responsive":"intrinsic";"layout"in F&&(F.layout&&(H=F.layout),delete F.layout);var G=x;if("loader"in F){if(F.loader){var T=F.loader;G=function(e){e.config;var t=s(e,["config"]);return T(t)}}delete F.loader}var J="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=z(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(Z=Z||Q.blurDataURL,J=Q.src,(!H||"fill"!==H)&&(q=q||Q.height,C=C||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var $=!h&&("lazy"===S||"undefined"===typeof S);((t="string"===typeof t?t:J).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,$=!1);v.has(t)&&($=!1);y&&(c=!0);var K,X=o(u.useState(!1),2),Y=X[0],ee=X[1],te=o(g.useIntersection({rootRef:I,rootMargin:R||"200px",disabled:!$}),3),ie=te[0],ne=te[1],oe=te[2],re=!$||ne,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:P},ue=k(C),de=k(q),fe=k(_);0;var ge=Object.assign({},O,se),me="blur"!==B||Y?{}:{backgroundSize:N||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(Z,'")')};if("fill"===H)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var pe=de/ue,he=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===H?(ae.display="block",ae.position="relative",ce=!0,le.paddingTop=he):"intrinsic"===H?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,le.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===H&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var ye={src:w,srcSet:void 0,sizes:void 0};re&&(ye=A({config:V,src:t,unoptimized:c,layout:H,width:ue,quality:fe,sizes:i,loader:G}));var be=t;0;var ve,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var ze=(n(ve={},we,ye.srcSet),n(ve,Se,ye.sizes),ve),Ae=u.default.useLayoutEffect,ke=u.useRef(M),xe=u.useRef(t);u.useEffect((function(){ke.current=M}),[M]),Ae((function(){xe.current!==t&&(oe(),xe.current=t)}),[oe,t]);var je=a({isLazy:$,imgAttributes:ye,heightInt:de,widthInt:ue,qualityInt:fe,layout:H,className:L,imgStyle:ge,blurStyle:me,loading:S,config:V,unoptimized:c,placeholder:B,loader:G,srcString:be,onLoadingCompleteRef:ke,setBlurComplete:ee,setIntersection:ie,isVisible:re,noscriptSizes:i},F);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ae},ce?u.default.createElement("span",{style:le},K?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,u.default.createElement(E,Object.assign({},je))),h?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},ze))):null)};var a=i(6495).Z,l=i(2648).Z,c=i(1598).Z,s=i(7273).Z,u=c(i(7294)),d=l(i(5443)),f=i(9309),g=i(7190),m=i(9977),p=(i(3794),i(2392));var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1}||{},y=h.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1},v=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=new URL("".concat(t.path).concat(I(i))),a=r.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return r.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(I(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(I(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function A(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var o=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,r(s));return{widths:a.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:d[g]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=S.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function j(e,t,i,n,o,r){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===n&&r(!0),null==o?void 0:o.current)){var i=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))}var E=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,r=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,p=e.config,h=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,z=e.onError,k=(e.isVisible,e.noscriptSizes),x=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,{decoding:"async","data-nimg":o,className:r,style:a({},l,c),ref:u.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&j(e,m,0,f,b,v)}),[w,m,o,f,b,v]),onLoad:function(e){j(e.currentTarget,m,0,f,b,v),S&&S(e)},onError:function(e){"blur"===f&&v(!0),z&&z(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},x,A({config:p,src:m,unoptimized:h,layout:o,width:i,quality:n,sizes:k,loader:y}),{decoding:"async","data-nimg":o,style:l,className:r,loading:g}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,i){e.exports=i(8045)},1163:function(e,t,i){e.exports=i(387)},603:function(e,t,i){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.d(t,{Z:function(){return o}})}}]);