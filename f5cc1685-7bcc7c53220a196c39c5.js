"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[6530],{85193:function(e,t,a){a.d(t,{j:function(){return S}});var i=a(15785),s=a(4942),r=a(35776),n=a(67293),o=a(63184),l=a(18870),c=a(46085),d=a(40590),m=a(94184),p=a.n(m),u=a(95459),g=a(75472),v=a.n(g);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}const h=[{title:"Last updated",value:"last_updated",filter:e=>e.sort(((e,t)=>{let{lastUpdated:a}=e,{lastUpdated:i}=t;return new Date(i)>new Date(a)?1:new Date(i)<new Date(a)?-1:0}))},{title:"Name",value:"name",filter:e=>e.sort(((e,t)=>{let{name:a}=e,{name:i}=t;return a.localeCompare(i)}))},{title:"Custom",value:"id",filter:function(e,t){void 0===t&&(t=[]);const a=[];return t.forEach((t=>{const i=e.find((e=>{let{id:a}=e;return a===t}));i&&a.push(i)})),a}}];var f={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},y={name:"1gtmncz",styles:"border-color:#4b4b4b!important;border-width:2px"},w={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},x={name:"jfisvt",styles:"height:auto;margin-bottom:0!important"},z={name:"10385fy",styles:"font-size:var(--spectrum-global-dimension-size-200);padding-right:0"},Z={name:"11ck1mg",styles:"height:var(--spectrum-global-dimension-size-600);justify-content:center;align-items:center;margin-top:0!important;margin-bottom:var(\n                          --spectrum-global-dimension-size-100\n                        )!important"},j={name:"hsewg1",styles:"height:var(--spectrum-global-dimension-size-4000);overflow:auto;padding-top:0;padding-bottom:0;align-items:center;display:flex;flex-direction:column"},O={name:"82a6rk",styles:"flex:1"},k={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},C={name:"16hp6jg",styles:"margin-top:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column"},N={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},q={name:"1e17bzi",styles:"display:flex;align-items:flex-start;flex-direction:column"},D={name:"wyj2j9",styles:"display:flex;align-items:flex-end;width:var(--spectrum-global-dimension-size-3000);flex-direction:column"},P={name:"1xl5zih",styles:"display:flex;align-items:center;height:var(--spectrum-global-dimension-size-800);justify-content:flex-end;margin-right:var(--spectrum-global-dimension-size-400)"};const S=e=>{let{clouds:t=[],products:a=[],interaction:m=!1,orderBy:g="last_updated",filterByCloud:S=[],filterByIds:A=[],buttonName:B="Learn more",showName:_=!0,showDescription:E=!0,showBorder:H=!0,imgHeight:M="1000",isCentered:L=!1,className:U,containerWidth:X=u.Av,theme:Y="light",enablePicker:F=!1}=e;A.length&&(g="id");const Q=h.find((e=>{let{value:t}=e;return t===g}));Q.ids=A;const{0:I,1:V}=(0,r.useState)(Q.value),{0:W,1:$}=(0,r.useState)(Q.filter(a,Q.ids)),{0:G,1:J}=(0,r.useState)(S);(0,r.useEffect)((()=>{((e,t,a,i)=>{const s=e.filter((e=>{let{cloud:a}=e;return t.some((e=>a===e))}));i(v()(s,["id"],["asc"]))})(a,G.length?G:t,0,$)}),[G,I,a,t]);const K="calc(var(--spectrum-global-dimension-size-5000) - var(--spectrum-global-dimension-size-600))",R="calc(var(--spectrum-global-dimension-size-3600) - var(--spectrum-global-dimension-size-900))",T=F?"":"padding-top: var(--spectrum-global-dimension-size-1000)";return(0,n.tZ)("section",{className:p()(U,`spectrum--${Y}`),css:(0,n.iv)("background:var(--spectrum-global-color-gray-100);padding-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.q9,"){width:",(0,u.MY)(2),"!important;background:var(--spectrum-global-color-gray-100);padding-bottom:0;}@media screen and (max-width: ",u.LU,") and (min-width: ",u.q9,"){width:100%!important;background:var(--spectrum-global-color-gray-100);padding-bottom:0;}","")},(0,n.tZ)("div",{css:(0,n.iv)("max-width:",X,";margin:auto;@media screen and (max-width: ",u.q9,"){width:",(0,u.MY)(3),"!important;background:var(--spectrum-global-color-gray-100);}",T,";","")},m&&F&&(0,n.tZ)("div",{css:P},(0,n.tZ)(c.c,{isQuiet:!0,items:h.slice(0,2).map((e=>e.value===g?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({selected:!0},e):e)),"aria-label":"Filter by name or last updated product",onChange:e=>{V(h[e].value)}})),(0,n.tZ)("div",{css:(0,n.iv)("display:flex;@media screen and (max-width: ",u.Av,"){align-items:flex-start;flex-wrap:wrap;}","")},m&&(0,n.tZ)("div",{css:D},(0,n.tZ)("div",{css:q},(0,n.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:N},"Filter by"),(0,n.tZ)("div",{css:C},t.map(((e,t)=>(0,n.tZ)(l.X,{key:t,value:e,onChange:t=>{J(t?[].concat((0,i.Z)(G),[e]):G.filter((t=>t!==e)))},css:k},e)))))),(0,n.tZ)("div",{css:O},(0,n.tZ)("div",{css:(0,n.iv)("display:grid;grid-template-columns:repeat(auto-fit, ",R,");grid-auto-rows:",K,";justify-content:center;gap:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-400);display:flex;flex-wrap:wrap;}@media screen and (max-width: ",u.q9,"){overflow:hidden;width:",(0,u.MY)(3),";background:var(--spectrum-global-color-gray-100);}","")},W.map((e=>(0,n.tZ)("div",{key:e.id,className:"spectrum-Card spectrum-Card--sizeM",css:(0,n.iv)("width:",R,";height:",K,";border:",H?"none":"var(--spectrum-global-color-gray-200)",";background:var(--spectrum-global-color-gray-100);align-items:center;&:hover{border-color:var(--spectrum-global-color-gray-200);}@media screen and (max-width: ",u.Av,"){width:0;}@media screen and (max-width: ",u.q9,"){height:calc(var(--spectrum-global-dimension-size-5000) - var(--spectrum-global-dimension-size-1700));}","")},(0,n.tZ)("div",{className:"spectrum-Card-body",css:j},e.icon&&(0,n.tZ)("div",{css:(0,n.iv)("height:var(\n                          --spectrum-global-dimension-size-",M,"\n                        );width:140px;margin-bottom:var(\n                          --spectrum-global-dimension-size-200\n                        );","")},(0,n.tZ)(d.E,{src:e.icon,"aria-hidden":"true",alt:"",title:""})),_&&(0,n.tZ)("div",{className:"spectrum-Card-header spectrum-Heading spectrum-Heading--sizeXS",css:Z},(0,n.tZ)("div",{className:"spectrum-Card-title",css:z},(0,n.tZ)("strong",null,e.name))),E&&(0,n.tZ)("div",{className:"spectrum-Card-content spectrum-Body spectrum-Body--sizeS",css:x},e.description)),(0,n.tZ)("div",{className:H?"spectrum-Card-footer":"",css:(0,n.iv)("display:flex;justify-content:",L?"center":"flex-end",";flex-wrap:wrap;@media screen and (max-width: ",u.Av,"){justify-content:center;}padding-top:0;padding-bottom:0;","")},e.discover&&(0,n.tZ)("div",{css:w},(0,n.tZ)(o.A,{isQuiet:!0,href:e.discover,variant:"primary",css:y},B)),e.docs&&(0,n.tZ)("div",{css:f},(0,n.tZ)(o.A,{href:e.docs,variant:"primary"},"View docs")))))))))))}}}]);
//# sourceMappingURL=f5cc1685-7bcc7c53220a196c39c5.js.map