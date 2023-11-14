(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6192:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(1667)}])},7518:function(e,t,n){"use strict";var s=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,s.jsx)("div",{className:"container mx-auto px-5 max-w-5xl flex-col md:flex-row flex",children:t})}},3797:function(e,t,n){"use strict";var s=n(5893),r=(n(7294),n(3855)),i=n(5337),c=n(1436),o=n(2298),a=n(9345);t.Z=function(e){var t=e.dateString,n=(0,r.Z)(t),l=(0,i.Z)(t,"P",new Date,{locale:a.Z});return(0,c.Z)(l)?(0,s.jsx)("time",{dateTime:t,children:(0,o.Z)(n,"LLLL\td, yyyy")}):(0,s.jsx)("div",{children:t})}},2992:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),r=(n(7294),{mail:"/assets/icons/mail.svg",github:"/assets/icons/github.svg",linkedin:"/assets/icons/linkedin.svg",twitter:"/assets/icons/twitter.svg"}),i=function(e){var t=e.kind,n=e.href;e.size;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=r[t];return(0,s.jsxs)("a",{className:"opacity-20 transition hover:opacity-100",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,s.jsx)("span",{className:"sr-only",children:t}),(0,s.jsx)("img",{src:i,width:25,height:25})]})},c=n(1163),o=function(){var e=(0,c.useRouter)();return(0,s.jsxs)("section",{className:"flex-col flex md:justify-between mt-16 mb-6 md:mb-10",children:[(0,s.jsx)("h1",{className:"cursor-pointer text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8",onClick:function(){e.push("/")},children:"Donghun Kim"}),(0,s.jsx)("h4",{className:"md:text-left text-md mt-5 pr-6",children:"I am developer interested in building technologies that encourage people to create creative contents"}),(0,s.jsxs)("div",{className:"mt-[15px] flex space-x-1.5",children:[(0,s.jsx)(i,{kind:"github",href:"https://github.com/hunkim98",size:6}),(0,s.jsx)(i,{kind:"twitter",href:"https://twitter.com/hunkim98",size:6}),(0,s.jsx)(i,{kind:"mail",href:"mailto:hunkim98@gmail.com",size:6})]})]})}},251:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),r=(n(7294),n(9008)),i=n.n(r),c=function(){return(0,s.jsxs)(i(),{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,s.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"google-site-verification",content:"l9pNikVAOmXekB00LXYnclf9f_nyVIIjDvu4s2DdYtQ"})]})},o=function(e){e.preview;var t=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)("div",{className:"min-h-screen text-[#000000]",children:(0,s.jsx)("main",{children:t})})]})}},9823:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893),r=(n(7294),n(3797)),i=n(1664),c=n.n(i),o=function(e){var t=e.title,n=e.src,r=e.slug,i=(0,s.jsx)("img",{src:n,alt:"Cover Image for ".concat(t),className:"rounded-t-lg w-full max-h-[200px] min-h-[200px] object-cover"});return(0,s.jsx)("div",{className:"sm:mx-0",children:r?(0,s.jsx)(c(),{as:"/projects/".concat(r),href:"/projects/[slug]",children:(0,s.jsx)("a",{"aria-label":t,children:i})}):i})},a=function(e){var t=e.title,n=e.date,i=e.excerpt,a=e.slug,l=e.coverImg;return(0,s.jsx)(c(),{as:"/projects/".concat(a),href:"/projects/[slug]",children:(0,s.jsxs)("div",{className:"bg-white rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md",children:[(0,s.jsx)("div",{className:"mb-5",children:(0,s.jsx)(o,{slug:a,title:t,src:l})}),(0,s.jsx)("h3",{className:"text-2xl mb-3 leading-snug font-bold px-5",children:(0,s.jsx)("a",{className:"font-bold",children:t})}),(0,s.jsx)("div",{className:"text-lg mb-4 opacity-50 px-5",children:(0,s.jsx)(r.Z,{dateString:n})}),(0,s.jsx)("p",{className:"text-md leading-relaxed mb-4 opacity-40 px-5 line-clamp-5",children:i})]})})},l=function(e){var t=e.projects,n=e.category,r=e.isTitleShown;return(0,s.jsxs)("section",{className:"md:ml-[300px]",children:[(r||n)&&(0,s.jsxs)("h2",{className:"mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:mt-[70px]",children:["Projects ",n&&"on #".concat(n)]}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 gird-cols-1 md:gap-x-10 gap-y-16 md:gap-y-16 mb-32",children:t.map((function(e){return(0,s.jsx)(a,{title:e.title,date:e.date,slug:e.slug,excerpt:e.excerpt,coverImg:e.coverImg},e.slug)}))})]})}},6094:function(e,t,n){"use strict";var s=n(5893),r=(n(7294),n(1664)),i=n.n(r);t.Z=function(e){var t=e.selectedCategory;return(0,s.jsxs)("div",{className:"md:ml-[300px] flex mt-16 mb-6 md:mb-7 md:gap-10 gap-6 overflow-auto select-none",children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("div",{className:"cursor-pointer md:px-5 py-1 "+("about"===t?"font-bold border-b-lightGreen border-b-2":""),children:"About"})}),(0,s.jsx)(i(),{href:"/projects",children:(0,s.jsx)("div",{className:"cursor-pointer md:px-5 py-1 "+("projects"===t?"font-bold border-b-lightGreen border-b-2":""),children:"Projects"})}),(0,s.jsx)(i(),{href:"/posts",children:(0,s.jsx)("div",{className:"cursor-pointer md:px-5 py-1 "+("posts"===t?"font-bold border-b-lightGreen border-b-2":""),children:"Posts"})}),(0,s.jsx)(i(),{href:"assets/blog/cv/HunKim_CV.pdf",children:(0,s.jsx)("div",{className:"cursor-pointer md:px-5 py-1",children:"CV"})})]})}},3624:function(e,t,n){"use strict";var s=n(5893),r=(n(7294),n(2992));t.Z=function(e){var t=e.projectCategories;return(0,s.jsxs)("div",{className:"md:min-w-[300px] md:fixed md:max-w-[300px]",children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("div",{className:"mb-6 flex flex-wrap text-sm",children:t.map((function(e,t){return(0,s.jsxs)("a",{className:"pr-2 opacity-30 hover:opacity-100 transition-opacity",href:"/category/projects/".concat(e),children:["#",e]},t)}))})]})}},9953:function(e,t,n){"use strict";n.d(t,{Ql:function(){return r},vC:function(){return s}});var s="https://hunkim98.github.io/assets/profile/cover_image.png",r="https://hunkim98.github.io"},1667:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return h}});var s=n(5893),r=(n(7294),n(7518)),i=n(251),c=n(6094),o=n(3624),a=n(9953),l=n(9008),d=n.n(l),m=n(9823),x=!0;function h(e){e.allPosts,e.postCategories;var t=e.allProjects,n=e.projectCategories;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(d(),{children:[(0,s.jsx)("title",{children:"Donghun Kim | Projects"}),(0,s.jsx)("meta",{property:"og:image",content:a.vC}),(0,s.jsx)("meta",{name:"description",content:"This is my collection of projects that I have worked on to learn new technologies and to solve problems that I have encountered in my daily life"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(o.Z,{projectCategories:n}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.Z,{selectedCategory:"projects"}),(0,s.jsx)(m.Z,{projects:t})]})]})]})})}},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[996,566,774,888,179],(function(){return t=6192,e(e.s=t);var t}));var t=e.O();_N_E=t}]);