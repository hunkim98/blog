(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(371)}])},165:function(e,t,n){"use strict";var i=n(5893),s=n(3855),r=n(2298),a=n(2809),o=n(1436),l=n(9345);n(7294),t.Z=e=>{let{dateString:t}=e,n=(0,s.Z)(t),c=(0,a.Z)(t,"P",new Date,{locale:l.Z}),d=(0,o.Z)(c);return d?(0,i.jsx)("time",{dateTime:t,children:(0,r.Z)(n,"LLLL	d, yyyy")}):(0,i.jsx)("div",{children:t})}},5923:function(e,t,n){"use strict";var i=n(5893),s=n(1664),r=n.n(s);n(7294),t.Z=e=>{let{link:t,title:n}=e;return(0,i.jsx)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:(0,i.jsx)(r(),{href:t,children:(0,i.jsx)("div",{className:"hover:underline",children:n})})})}},1272:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(5893),s=n(9008),r=n.n(s);n(7294);var a=()=>(0,i.jsxs)(r(),{children:[(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,i.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,i.jsx)("meta",{name:"theme-color",content:"#000"}),(0,i.jsx)("meta",{name:"og:sitename",content:"Donghun Kim | Developer"}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,i.jsx)("meta",{name:"google-site-verification",content:"l9pNikVAOmXekB00LXYnclf9f_nyVIIjDvu4s2DdYtQ"})]}),o=e=>{let{preview:t,children:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{}),(0,i.jsx)("div",{className:"min-h-screen text-[#000000]",children:(0,i.jsx)("main",{children:n})})]})}},674:function(e,t,n){"use strict";var i=n(5893);n(7294),t.Z=function(e){let{prevTitle:t,nextTitle:n,prevPath:s,nextPath:r}=e;return(0,i.jsxs)("div",{className:"flex justify-between w-full mb-20 flex-wrap",children:[t&&(0,i.jsxs)("a",{href:s,className:"bg-white rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md p-3 mb-3",children:[(0,i.jsx)("div",{children:"Previous"}),(0,i.jsxs)("div",{className:"text-sm font-bold text-left",children:["← ",t]})]}),n&&(0,i.jsxs)("a",{href:r,className:"ml-auto bg-white rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md p-3 mb-3",children:[(0,i.jsx)("div",{className:"text-right",children:"Next"}),(0,i.jsxs)("div",{className:"text-sm font-bold text-right",children:[n," →"]})]})]})}},3602:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(5893),s=n(8549),r=n.n(s),a=n(1760),o=n(7294),l=n(9365),c=n(5079),d=n(9477);class h{initialize(){this.scene=new d.xsS,this.camera=new d.cPb(this.fov,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=48;let e=document.getElementById(this.canvasId);this.renderer=new d.CP7({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.clock=new d.SUY,this.controls=new l.z(this.camera,this.renderer.domElement),this.stats=(0,c.Z)(),document.body.appendChild(this.stats.dom),this.ambientLight=new d.Mig(16777215,.5),this.ambientLight.castShadow=!0,this.scene.add(this.ambientLight),this.directionalLight=new d.Ox3(16777215,1),this.directionalLight.position.set(0,32,64),this.scene.add(this.directionalLight),window.addEventListener("resize",()=>this.onWindowResize(),!1)}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.render(),this.stats.update(),this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}constructor(e){this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.fov=45,this.nearPlane=1,this.farPlane=1e3,this.canvasId=e,this.clock=void 0,this.stats=void 0,this.controls=void 0,this.ambientLight=void 0,this.directionalLight=void 0}}var m=n(8093);let x={DottingComponent:()=>(0,i.jsx)(a.gW,{width:"100%",height:300}),Test3D:()=>((0,o.useEffect)(()=>{let e=new h("myThreeJsCanvas");e.initialize(),e.animate();let t=new d.y8_(16);e.scene.add(t);let n=new d.DvJ(16,16,16,16,16,16),i=new d.jyz({wireframe:!0,vertexShader:"\n      void main()	{\n        // projectionMatrix, modelViewMatrix, position -> passed in from Three.js\n        gl_Position = projectionMatrix\n          * modelViewMatrix\n          * vec4(position.x, position.y, position.z, 1.0);\n      }\n      ",fragmentShader:"\n      void main() {\n        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n      }\n      "}),s=new d.Kj0(n,i);e.scene.add(s)},[]),(0,i.jsx)("div",{children:(0,i.jsx)("canvas",{id:"myThreeJsCanvas"})}))};var u=e=>{let{content:t,isMdx:n}=e;return(0,i.jsx)("div",{className:"max-w-3xl mx-auto",children:n?(0,i.jsx)("div",{className:r().markdown,children:(0,i.jsx)(m.R,{...t,components:x})}):(0,i.jsx)("div",{className:r().markdown,dangerouslySetInnerHTML:{__html:t}})})}},8817:function(e,t,n){"use strict";var i=n(5893);n(7294),t.Z=e=>{let{children:t}=e;return(0,i.jsx)("h1",{className:"max-w-3xl mx-auto text-5xl md:text-6xl lg:text-6xl font-bold tracking-normal leading-10 md:leading-none mb-12 text-center md:text-left",children:t})}},9958:function(e,t,n){"use strict";var i=n(5893);n(7294),t.Z=()=>(0,i.jsx)("section",{ref:e=>{if(!e)return;let t=document.createElement("script");t.src="https://utteranc.es/client.js",t.async=!0,t.setAttribute("repo","hunkim98/hunkim98.github.io"),t.setAttribute("issue-term","title"),t.setAttribute("theme","github-light"),t.setAttribute("label","blog-comment"),t.crossOrigin="anonymous",e.appendChild(t)}})},7447:function(e,t,n){"use strict";n.d(t,{Ql:function(){return s},vC:function(){return i}});let i="https://donghunkim.dev/assets/profile/cover_image.png",s="https://donghunkim.dev"},371:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return j}});var i=n(5893),s=n(674),r=n(165),a=n(8817);n(7294);var o=e=>{let{title:t,date:n,author:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{children:t}),(0,i.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,i.jsxs)("div",{className:"mb-6 text-lg",children:[(0,i.jsxs)("div",{children:["Written by ",s.name]}),(0,i.jsx)(r.Z,{dateString:n})]})})]})},l=n(3602),c=n(9958),d=n(7447),h=n(5923),m=n(1272),x=n(1163),u=n(2918),v=n.n(u),g=n(9008),p=n.n(g),f=!0;function j(e){let{post:t,morePosts:n,preview:r}=e,u=(0,x.useRouter)(),g=t.isMdx;return u.isFallback||(null==t?void 0:t.slug)?(0,i.jsx)(m.Z,{preview:r,children:(0,i.jsxs)("div",{className:"container mx-auto px-5 max-w-5xl",children:[(0,i.jsx)(h.Z,{title:"← More Posts",link:"/posts"}),u.isFallback?(0,i.jsx)(a.Z,{children:"Loading…"}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("article",{className:"mb-32",children:[(0,i.jsxs)(p(),{children:[(0,i.jsx)("title",{children:t.title}),(0,i.jsx)("meta",{name:"description",content:t.excerpt}),(0,i.jsx)("meta",{name:"title",content:t.title}),(0,i.jsx)("meta",{property:"og:image",content:d.Ql+t.thumbnail})]}),(0,i.jsx)(o,{title:t.title,date:t.date,author:t.author}),(0,i.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,i.jsx)("div",{className:"mb-6 text-lg",children:(0,i.jsxs)("div",{children:["Category:"," ",t.categories.map((e,t)=>(0,i.jsxs)("span",{onClick:()=>u.push("/category/posts/".concat(e)),children:["#",e," "]},t))]})})}),(0,i.jsx)(l.Z,{isMdx:g,content:t.content}),(0,i.jsx)("div",{className:"max-w-3xl mx-auto mt-16 mb-16",children:(0,i.jsx)(s.Z,{prevPath:t.prevPath,nextPath:t.nextPath,prevTitle:t.prevTitle,nextTitle:t.nextTitle})}),(0,i.jsx)(c.Z,{})]})})]})}):(0,i.jsx)(v(),{statusCode:404})}},8549:function(e){e.exports={markdown:"markdown-styles_markdown__4D8Bm"}}},function(e){e.O(0,[737,911,814,661,835,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);