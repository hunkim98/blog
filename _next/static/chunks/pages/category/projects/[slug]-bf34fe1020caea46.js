(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{3258:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/projects/[slug]",function(){return n(5693)}])},2950:function(e,t,n){"use strict";var s=n(5893);n(7294),t.Z=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"container mx-auto px-5 max-w-5xl flex-col md:flex-row flex",children:t})}},165:function(e,t,n){"use strict";var s=n(5893),i=n(3855),r=n(2298),a=n(2809),c=n(1436),l=n(9345);n(7294),t.Z=e=>{let{dateString:t}=e,n=(0,i.Z)(t),o=(0,a.Z)(t,"P",new Date,{locale:l.Z}),m=(0,c.Z)(o);return m?(0,s.jsx)("time",{dateTime:t,children:(0,r.Z)(n,"LLLL	d, yyyy")}):(0,s.jsx)("div",{children:t})}},4885:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(5893);n(7294);let i={mail:"/assets/icons/mail.svg",github:"/assets/icons/github.svg",linkedin:"/assets/icons/linkedin.svg",twitter:"/assets/icons/twitter.svg"};var r=e=>{let{kind:t,href:n,size:r=8}=e;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;let a=i[t];return(0,s.jsxs)("a",{className:"opacity-20 transition hover:opacity-100",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,s.jsx)("span",{className:"sr-only",children:t}),(0,s.jsx)("img",{src:a,width:25,height:25})]})},a=n(1163),c=()=>{let e=(0,a.useRouter)();return(0,s.jsxs)("section",{className:"flex-col flex md:justify-between mt-16 mb-6 md:mb-10",children:[(0,s.jsx)("h1",{className:"cursor-pointer text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8",onClick:()=>{e.push("/")},children:"Donghun Kim"}),(0,s.jsx)("h4",{className:"md:text-left text-md mt-5 pr-6",children:"I am a developer interested in building technologies that encourage people to create creative contents"}),(0,s.jsxs)("div",{className:"mt-[15px] flex space-x-1.5",children:[(0,s.jsx)(r,{kind:"github",href:"https://github.com/hunkim98",size:6}),(0,s.jsx)(r,{kind:"twitter",href:"https://twitter.com/hunkim98",size:6}),(0,s.jsx)(r,{kind:"mail",href:"mailto:hunkim98@gmail.com",size:6})]})]})}},1272:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(5893),i=n(9008),r=n.n(i);n(7294);var a=()=>(0,s.jsxs)(r(),{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,s.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("meta",{name:"og:sitename",content:"Donghun Kim | Developer"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"google-site-verification",content:"l9pNikVAOmXekB00LXYnclf9f_nyVIIjDvu4s2DdYtQ"})]}),c=e=>{let{preview:t,children:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{}),(0,s.jsx)("div",{className:"min-h-screen text-[#000000]",children:(0,s.jsx)("main",{children:n})})]})}},6611:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),i=n(165);n(7294);var r=e=>{let{title:t,src:n,slug:i}=e,r=(0,s.jsx)("img",{src:n,alt:"Cover Image for ".concat(t),className:"rounded-t-lg w-full max-h-[200px] min-h-[200px] object-cover"});return(0,s.jsx)("div",{className:"sm:mx-0",children:r})},a=n(1664),c=n.n(a),l=e=>{let{title:t,date:n,excerpt:a,slug:l,coverImg:o}=e;return(0,s.jsx)(c(),{as:"/projects/".concat(l),href:"/projects/[slug]",children:(0,s.jsxs)("div",{className:"bg-white rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md h-[500px] overflow-hidden",children:[(0,s.jsx)("div",{className:"mb-5",children:(0,s.jsx)(r,{slug:l,title:t,src:o})}),(0,s.jsx)("h3",{className:"text-2xl mb-3 leading-snug font-bold px-5",children:(0,s.jsx)("div",{className:"font-bold",children:t})}),(0,s.jsx)("div",{className:"text-lg mb-4 opacity-50 px-5",children:(0,s.jsx)(i.Z,{dateString:n})}),(0,s.jsx)("p",{className:"text-md leading-relaxed mb-4 opacity-40 px-5 line-clamp-5",children:a}),(0,s.jsx)("div",{className:"bottom-0 h-[100px] absolute bg-gradient-to-t from-white to-transparent w-full"})]})})},o=e=>{let{projects:t,category:n,isTitleShown:i}=e;return(0,s.jsxs)("section",{className:"md:ml-[300px]",children:[(i||n)&&(0,s.jsxs)("h2",{className:"mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:mt-[70px]",children:["Projects ",n&&"on #".concat(n)]}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 gird-cols-1 md:gap-x-10 gap-y-16 md:gap-y-16 mb-32",children:t.map(e=>(0,s.jsx)(l,{title:e.title,date:e.date,slug:e.slug,excerpt:e.excerpt,coverImg:e.coverImg},e.slug))})]})}},5693:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return x}});var s=n(5893);n(7294);var i=n(2950),r=n(1272),a=n(9008),c=n.n(a),l=n(6611),o=n(4885),m=!0;function x(e){let{categoryProjects:t,category:n,projectCategories:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsxs)("title",{children:["Projects on ",n]}),(0,s.jsx)("meta",{name:"title",content:"My projects on ".concat(n)})]}),(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)("div",{className:"md:min-w-[300px] md:fixed md:max-w-[300px]",children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)("div",{className:"mb-6 flex flex-wrap",children:a.map((e,t)=>(0,s.jsxs)("a",{className:"pr-2",href:"/category/projects/".concat(e),children:["#",e]},t))})]}),(0,s.jsx)("div",{className:"container mx-auto px-5 max-w-5xl",children:t.length>0&&(0,s.jsx)(l.Z,{category:n,projects:t})})]})]})})}}},function(e){e.O(0,[814,661,774,888,179],function(){return e(e.s=3258)}),_N_E=e.O()}]);