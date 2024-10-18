(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{9771:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/posts/[slug]",function(){return s(3593)}])},2950:function(e,t,s){"use strict";var n=s(5893);s(7294),t.Z=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"container mx-auto px-5 max-w-5xl flex-col md:flex-row flex",children:t})}},165:function(e,t,s){"use strict";var n=s(5893),i=s(3855),l=s(2298),a=s(2809),r=s(1436),c=s(9345);s(7294),t.Z=e=>{let{dateString:t}=e,s=(0,i.Z)(t),o=(0,a.Z)(t,"P",new Date,{locale:c.Z}),m=(0,r.Z)(o);return m?(0,n.jsx)("time",{dateTime:t,children:(0,l.Z)(s,"LLLL	d, yyyy")}):(0,n.jsx)("div",{children:t})}},4885:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(5893);s(7294);let i={mail:"/assets/icons/mail.svg",github:"/assets/icons/github.svg",linkedin:"/assets/icons/linkedin.svg",twitter:"/assets/icons/twitter.svg"};var l=e=>{let{kind:t,href:s,size:l=8}=e;if(!s||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(s))return null;let a=i[t];return(0,n.jsxs)("a",{className:"opacity-20 transition hover:opacity-100",target:"_blank",rel:"noopener noreferrer",href:s,children:[(0,n.jsx)("span",{className:"sr-only",children:t}),(0,n.jsx)("img",{src:a,width:25,height:25})]})},a=s(1163),r=()=>{let e=(0,a.useRouter)();return(0,n.jsxs)("section",{className:"flex-col flex md:justify-between mt-16 mb-6 md:mb-10",children:[(0,n.jsx)("h1",{className:"cursor-pointer text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8",onClick:()=>{e.push("/")},children:"Donghun Kim"}),(0,n.jsx)("h4",{className:"md:text-left text-md mt-5 pr-6",children:"I am a developer interested in building technologies that encourage people to create creative contents"}),(0,n.jsxs)("div",{className:"mt-[15px] flex space-x-1.5",children:[(0,n.jsx)(l,{kind:"github",href:"https://github.com/hunkim98",size:6}),(0,n.jsx)(l,{kind:"twitter",href:"https://twitter.com/hunkim98",size:6}),(0,n.jsx)(l,{kind:"mail",href:"mailto:hunkim98@gmail.com",size:6})]})]})}},1272:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(5893),i=s(9008),l=s.n(i);s(7294);var a=()=>(0,n.jsxs)(l(),{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,n.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000"}),(0,n.jsx)("meta",{name:"og:sitename",content:"Donghun Kim | Developer"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,n.jsx)("meta",{name:"google-site-verification",content:"l9pNikVAOmXekB00LXYnclf9f_nyVIIjDvu4s2DdYtQ"})]}),r=e=>{let{preview:t,children:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{}),(0,n.jsx)("div",{className:"min-h-screen text-[#000000]",children:(0,n.jsx)("main",{children:s})})]})}},2673:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(5893),i=s(165),l=s(1664),a=s.n(l);s(7294);var r=e=>{let{title:t,date:s,excerpt:l,author:r,slug:c,coverImg:o}=e;return(0,n.jsxs)("div",{className:"flex sm:flex-row flex-col",children:[(0,n.jsx)(a(),{as:"/posts/".concat(c),href:"/posts/[slug]",children:(0,n.jsx)("img",{src:o,alt:"Cover Image for ".concat(t),className:"sm:min-h-full sm:max-h-full mb-5 sm:mr-5 sm:min-w-[200px] sm:max-w-[200px] max-w-full min-w-0 object-cover min-h-[200px] max-h-[200px] w-full rounded-lg cursor-pointer hover:scale-[1.01] transition hover:shadow-lg duration-200"})}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("h3",{className:"text-2xl mb-3 leading-snug font-bold",children:(0,n.jsx)(a(),{as:"/posts/".concat(c),href:"/posts/[slug]",children:(0,n.jsx)("div",{className:"hover:underline",children:t})})}),(0,n.jsx)("div",{className:"text-lg mb-4 opacity-50",children:(0,n.jsx)(i.Z,{dateString:s})}),(0,n.jsx)("p",{className:"text-md leading-relaxed mb-4 opacity-40 line-clamp-5",children:l})]})]})},c=e=>{let{posts:t,category:s,isTitleShown:i}=e;return(0,n.jsxs)("section",{className:"md:ml-[300px]",children:[(i||s)&&(0,n.jsxs)("h2",{className:"mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:mt-[70px]",children:["Posts ",s&&"on #".concat(s)]}),(0,n.jsx)("div",{className:"grid grid-cols-1 lg:gap-x-64 gap-y-16 md:gap-y-16 mb-32",children:t.map(e=>(0,n.jsx)(r,{title:e.title,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt,coverImg:e.thumbnail},e.slug))})]})}},3593:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return m},default:function(){return x}});var n=s(5893);s(7294);var i=s(2673),l=s(2950),a=s(1272),r=s(4885),c=s(9008),o=s.n(c),m=!0;function x(e){let{categoryPosts:t,category:s,postCategories:c}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsxs)("title",{children:["Posts on ",s]}),(0,n.jsx)("meta",{name:"title",content:"My posts on ".concat(s)})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)("div",{className:"md:min-w-[300px] md:fixed md:max-w-[300px]",children:[(0,n.jsx)(r.Z,{}),(0,n.jsx)("div",{className:"mb-6 flex flex-wrap",children:c.map((e,t)=>(0,n.jsxs)("a",{className:"pr-2",href:"/category/posts/".concat(e),children:["#",e]},t))})]}),(0,n.jsx)("div",{className:"container mx-auto px-5 max-w-5xl",children:t.length>0&&(0,n.jsx)(i.Z,{category:s,posts:t})})]})]})})}}},function(e){e.O(0,[814,661,774,888,179],function(){return e(e.s=9771)}),_N_E=e.O()}]);