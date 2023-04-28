import{G as X,v as pe,d as Y,e as ue,l as J,H as be,_ as w,x as R,y as N,a as $e,j as Z}from"./system-5118686d.js";import{_ as u}from"./extends-98964cd2.js";import{r as i,R as a}from"./index-8db94870.js";import{$ as ee,a as me}from"./index.module-6cd25d47.js";import{a as ge,$ as he}from"./index.module-bf67c865.js";import{$ as E,a as te}from"./index.module-3064e7bd.js";import{$ as G,a as oe}from"./index.module-75a565db.js";import{$ as Ce}from"./index.module-27477d06.js";import{$ as ne}from"./index.module-8ba5fb57.js";import{C as I}from"./defs-32db6e6f.js";import{I as _e}from"./index-e0df417c.js";const re="Collapsible",[ve,ae]=ee(re),[xe,H]=ve(re),Ae=i.forwardRef((e,o)=>{const{__scopeCollapsible:t,open:n,defaultOpen:c,disabled:r,onOpenChange:s,...l}=e,[d=!1,f]=G({prop:n,defaultProp:c,onChange:s});return i.createElement(xe,{scope:t,disabled:r,contentId:ne(),open:d,onOpenToggle:i.useCallback(()=>f($=>!$),[f])},i.createElement(E.div,u({"data-state":j(d),"data-disabled":r?"":void 0},l,{ref:o})))}),ye="CollapsibleTrigger",Ee=i.forwardRef((e,o)=>{const{__scopeCollapsible:t,...n}=e,c=H(ye,t);return i.createElement(E.button,u({type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":j(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled},n,{ref:o,onClick:oe(e.onClick,c.onOpenToggle)}))}),ce="CollapsibleContent",Ie=i.forwardRef((e,o)=>{const{forceMount:t,...n}=e,c=H(ce,e.__scopeCollapsible);return i.createElement(Ce,{present:t||c.open},({present:r})=>i.createElement(we,u({},n,{ref:o,present:r})))}),we=i.forwardRef((e,o)=>{const{__scopeCollapsible:t,present:n,children:c,...r}=e,s=H(ce,t),[l,d]=i.useState(n),f=i.useRef(null),$=te(o,f),m=i.useRef(0),_=m.current,C=i.useRef(0),v=C.current,A=s.open||l,x=i.useRef(A),g=i.useRef();return i.useEffect(()=>{const p=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(p)},[]),me(()=>{const p=f.current;if(p){g.current=g.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const b=p.getBoundingClientRect();m.current=b.height,C.current=b.width,x.current||(p.style.transitionDuration=g.current.transitionDuration,p.style.animationName=g.current.animationName),d(n)}},[s.open,n]),i.createElement(E.div,u({"data-state":j(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!A},r,{ref:$,style:{["--radix-collapsible-content-height"]:_?`${_}px`:void 0,["--radix-collapsible-content-width"]:v?`${v}px`:void 0,...e.style}}),A&&c)});function j(e){return e?"open":"closed"}const Re=Ae,Ne=Ee,Pe=Ie,h="Accordion",Te=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[F,Ve,Se]=ge(h),[P,st]=ee(h,[Se,ae]),K=ae(),se=a.forwardRef((e,o)=>{const{type:t,...n}=e,c=n,r=n;return a.createElement(F.Provider,{scope:e.__scopeAccordion},t==="multiple"?a.createElement(qe,u({},r,{ref:o})):a.createElement(De,u({},c,{ref:o})))});se.propTypes={type(e){const o=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof o=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(o)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[ie,ke]=P(h),[le,Oe]=P(h,{collapsible:!1}),De=a.forwardRef((e,o)=>{const{value:t,defaultValue:n,onValueChange:c=()=>{},collapsible:r=!1,...s}=e,[l,d]=G({prop:t,defaultProp:n,onChange:c});return a.createElement(ie,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:d,onItemClose:a.useCallback(()=>r&&d(""),[r,d])},a.createElement(le,{scope:e.__scopeAccordion,collapsible:r},a.createElement(de,u({},s,{ref:o}))))}),qe=a.forwardRef((e,o)=>{const{value:t,defaultValue:n,onValueChange:c=()=>{},...r}=e,[s=[],l]=G({prop:t,defaultProp:n,onChange:c}),d=a.useCallback($=>l((m=[])=>[...m,$]),[l]),f=a.useCallback($=>l((m=[])=>m.filter(_=>_!==$)),[l]);return a.createElement(ie,{scope:e.__scopeAccordion,value:s,onItemOpen:d,onItemClose:f},a.createElement(le,{scope:e.__scopeAccordion,collapsible:!0},a.createElement(de,u({},r,{ref:o}))))}),[Me,T]=P(h),de=a.forwardRef((e,o)=>{const{__scopeAccordion:t,disabled:n,dir:c,orientation:r="vertical",...s}=e,l=a.useRef(null),d=te(l,o),f=Ve(t),m=he(c)==="ltr",_=oe(e.onKeyDown,C=>{var v;if(!Te.includes(C.key))return;const A=C.target,x=f().filter(q=>{var M;return!((M=q.ref.current)!==null&&M!==void 0&&M.disabled)}),g=x.findIndex(q=>q.ref.current===A),p=x.length;if(g===-1)return;C.preventDefault();let b=g;const S=0,k=p-1,O=()=>{b=g+1,b>k&&(b=S)},D=()=>{b=g-1,b<S&&(b=k)};switch(C.key){case"Home":b=S;break;case"End":b=k;break;case"ArrowRight":r==="horizontal"&&(m?O():D());break;case"ArrowDown":r==="vertical"&&O();break;case"ArrowLeft":r==="horizontal"&&(m?D():O());break;case"ArrowUp":r==="vertical"&&D();break}const fe=b%p;(v=x[fe].ref.current)===null||v===void 0||v.focus()});return a.createElement(Me,{scope:t,disabled:n,direction:c,orientation:r},a.createElement(F.Slot,{scope:t},a.createElement(E.div,u({},s,{"data-orientation":r,ref:d,onKeyDown:n?void 0:_}))))}),L="AccordionItem",[Le,W]=P(L),ze=a.forwardRef((e,o)=>{const{__scopeAccordion:t,value:n,...c}=e,r=T(L,t),s=ke(L,t),l=K(t),d=ne(),f=n&&s.value.includes(n)||!1,$=r.disabled||e.disabled;return a.createElement(Le,{scope:t,open:f,disabled:$,triggerId:d},a.createElement(Re,u({"data-orientation":r.orientation,"data-state":f?"open":"closed"},l,c,{ref:o,disabled:$,open:f,onOpenChange:m=>{m?s.onItemOpen(n):s.onItemClose(n)}})))}),Ue="AccordionHeader",Be=a.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,c=T(h,t),r=W(Ue,t);return a.createElement(E.h3,u({"data-orientation":c.orientation,"data-state":Fe(r.open),"data-disabled":r.disabled?"":void 0},n,{ref:o}))}),Q="AccordionTrigger",Ge=a.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,c=T(h,t),r=W(Q,t),s=Oe(Q,t),l=K(t);return a.createElement(F.ItemSlot,{scope:t},a.createElement(Ne,u({"aria-disabled":r.open&&!s.collapsible||void 0,"data-orientation":c.orientation,id:r.triggerId},l,n,{ref:o})))}),He="AccordionContent",je=a.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,c=T(h,t),r=W(He,t),s=K(t);return a.createElement(Pe,u({role:"region","aria-labelledby":r.triggerId,"data-orientation":c.orientation},s,n,{ref:o,style:{["--radix-accordion-content-height"]:"var(--radix-collapsible-content-height)",["--radix-accordion-content-width"]:"var(--radix-collapsible-content-width)",...e.style}}))});function Fe(e){return e?"open":"closed"}const Ke=se,We=X({from:{height:0},to:{height:"var(--radix-accordion-content-height)"}}),Ye=X({from:{height:"var(--radix-accordion-content-height)"},to:{height:0}}),V=pe(I.Accordion,{root:{borderRadius:"$default",maxW:"$full"},content:{overflow:"hidden",background:"transparent",padding:"$4",'&[data-state="open"]':{animation:`${We} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`},'&[data-state="closed"]':{animation:`${Ye} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`}},item:{overflow:"hidden",borderTop:"1px solid $bodyColor","& ~ &":{mt:"$2"},"&:first-child":{marginTop:0,borderTopLeftRadius:"$md",borderTopRightRadius:"$md"},"&:last-child":{borderBottomLeftRadius:"$md",borderBottomRightRadius:"$md"},"&:focus-within":{position:"relative",zIndex:1},[`.${Y.theme} &`]:{backgroundColor:"$cardBg"},[`.${Y.theme} &:has(.fuel_Accordion-trigger:focus-visible)`]:{outline:`2px solid ${ue.gray4}`},[`.${J.theme} &`]:{backgroundColor:"white"},[`.${J.theme} &:has(.fuel_Accordion-trigger:focus-visible)`]:{outline:`2px solid ${be.gray7}`}},trigger:{all:"unset",layer:"layer-card",fontFamily:"$sans",fontWeight:"$normal",px:"$4",height:45,flex:1,display:"flex",alignItems:"center",justifyContent:"space-between",textSize:"base",transition:"color .2s",'&[data-state="closed"]':{color:"$intentsBase12"},'&[data-state="open"]':{color:"$brand"},"&:hover":{color:"$brand"}},header:{all:"unset",display:"flex"},icon:{transition:"transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",'[data-state="open"] &':{transform:"rotate(180deg)"}}}),z=w(I.AccordionContent,e=>{const o=R(V,{},["content"]),t=N(e,o.content);return i.createElement(je,t)});try{z.displayName="AccordionContent",z.__docgenInfo={description:"",displayName:"AccordionContent",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"ThemeUtilsCSS"}}}}}catch{}const U=w(I.AccordionItem,e=>{const o=R(V,{},["item"]),t=N(e,o.item);return i.createElement(ze,t)});try{U.displayName="AccordionItem",U.__docgenInfo={description:"",displayName:"AccordionItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"ThemeUtilsCSS"}}}}}catch{}const B=w(I.AccordionTrigger,({children:e,...o})=>{const t=R(V,{},["header","root","icon","trigger"]),n=N(o,t.trigger);return i.createElement(Be,{className:t.header.className},$e(Ge,{...n,children:[e,Z(_e,{icon:"CaretDown","aria-hidden":!0,className:t.icon.className})]}))});try{B.displayName="AccordionTrigger",B.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"ThemeUtilsCSS"}}}}}catch{}const y=w(I.Accordion,e=>{const o=R(V,e),t=N(e,o.root);return Z(Ke,{...t})});y.Item=U;y.Trigger=B;y.Content=z;try{y.displayName="Accordion",y.__docgenInfo={description:"",displayName:"Accordion",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"ThemeUtilsCSS"}}}}}catch{}export{y as A};
//# sourceMappingURL=Accordion-12283487.js.map
