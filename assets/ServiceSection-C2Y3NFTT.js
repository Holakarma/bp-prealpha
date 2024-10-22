import{t as O,v as ge,w as ne,x as ve,T as je,y as ke,z as be,s as R,e as W,r as m,g as re,b as se,_ as f,C as Se,a as oe,j as s,c as ie,D as $,E as I,f as ae,F as ce,G as D,H as le,S as L,B as H,l as Z,R as we}from"./index-BQuGqfQh.js";import{T as v}from"./Typography-CJDrWVpL.js";function Me(e,t=0,r=1){return ge(e,t,r)}function ye(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,o)=>o<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function de(e){if(e.type)return e;if(e.charAt(0)==="#")return de(ye(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(O(9,e));let n=e.substring(t+1,e.length-1),o;if(r==="color"){if(n=n.split(" "),o=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(O(10,o))}else n=n.split(",");return n=n.map(i=>parseFloat(i)),{type:r,values:n,colorSpace:o}}function $e(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function Ve(e,t){return e=de(e),t=Me(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,$e(e)}const Le=()=>{const e=ne(),t=[...e.breakpoints.keys],r=new Map;return t.forEach(n=>{const o=ve(e.breakpoints.up(n));r.set(n,o)}),Object.fromEntries(r)},z=[{name:"НДС",date:"05.05.2010",total:1e4},{name:"УСН",date:"05.05.2011",total:5e3},{name:"НДФЛ",date:"05.05.2012",total:2500},{name:"ФОМС",date:"05.05.2013",total:1250},{name:"ФОМС2",date:"05.05.2014",total:1250}];function Te(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function _e(e){return parseFloat(e)}function Be(){const e=ne(ke);return e[je]||e}const T=be({createStyledComponent:R("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>W({props:e,name:"MuiStack"})}),U=m.createContext();function He(e){return re("MuiGrid",e)}const Ne=[0,1,2,3,4,5,6,7,8,9,10],Re=["column-reverse","column","row-reverse","row"],We=["nowrap","wrap-reverse","wrap"],k=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=se("MuiGrid",["root","container","item","zeroMinWidth",...Ne.map(e=>`spacing-xs-${e}`),...Re.map(e=>`direction-xs-${e}`),...We.map(e=>`wrap-xs-${e}`),...k.map(e=>`grid-xs-${e}`),...k.map(e=>`grid-sm-${e}`),...k.map(e=>`grid-md-${e}`),...k.map(e=>`grid-lg-${e}`),...k.map(e=>`grid-xl-${e}`)]),Ie=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function j(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function Ee({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((n,o)=>{let i={};if(t[o]&&(r=t[o]),!r)return n;if(r===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=$({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof a=="object"?a[o]:a;if(l==null)return n;const c=`${Math.round(r/l*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const d=e.spacing(t.columnSpacing);if(d!=="0px"){const C=`calc(${c} + ${j(d)})`;u={flexBasis:C,maxWidth:C}}}i=f({flexBasis:c,flexGrow:0,maxWidth:c},u)}return e.breakpoints.values[o]===0?Object.assign(n,i):n[e.breakpoints.up(o)]=i,n},{})}function Pe({theme:e,ownerState:t}){const r=$({values:t.direction,breakpoints:e.breakpoints.values});return I({theme:e},r,n=>{const o={flexDirection:n};return n.indexOf("column")===0&&(o[`& > .${S.item}`]={maxWidth:"none"}),o})}function ue({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(o=>{r===""&&t[o]!==0&&(r=o)});const n=Object.keys(e).sort((o,i)=>e[o]-e[i]);return n.slice(0,n.indexOf(r))}function Fe({theme:e,ownerState:t}){const{container:r,rowSpacing:n}=t;let o={};if(r&&n!==0){const i=$({values:n,breakpoints:e.breakpoints.values});let a;typeof i=="object"&&(a=ue({breakpoints:e.breakpoints.values,values:i})),o=I({theme:e},i,(l,c)=>{var u;const d=e.spacing(l);return d!=="0px"?{marginTop:`-${j(d)}`,[`& > .${S.item}`]:{paddingTop:j(d)}}:(u=a)!=null&&u.includes(c)?{}:{marginTop:0,[`& > .${S.item}`]:{paddingTop:0}}})}return o}function Ae({theme:e,ownerState:t}){const{container:r,columnSpacing:n}=t;let o={};if(r&&n!==0){const i=$({values:n,breakpoints:e.breakpoints.values});let a;typeof i=="object"&&(a=ue({breakpoints:e.breakpoints.values,values:i})),o=I({theme:e},i,(l,c)=>{var u;const d=e.spacing(l);return d!=="0px"?{width:`calc(100% + ${j(d)})`,marginLeft:`-${j(d)}`,[`& > .${S.item}`]:{paddingLeft:j(d)}}:(u=a)!=null&&u.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${S.item}`]:{paddingLeft:0}}})}return o}function Ge(e,t,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const n=[];return t.forEach(o=>{const i=e[o];Number(i)>0&&n.push(r[`spacing-${o}-${String(i)}`])}),n}const Oe=R("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:n,direction:o,item:i,spacing:a,wrap:l,zeroMinWidth:c,breakpoints:u}=r;let d=[];n&&(d=Ge(a,u,t));const C=[];return u.forEach(h=>{const x=r[h];x&&C.push(t[`grid-${h}-${String(x)}`])}),[t.root,n&&t.container,i&&t.item,c&&t.zeroMinWidth,...d,o!=="row"&&t[`direction-xs-${String(o)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...C]}})(({ownerState:e})=>f({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Pe,Fe,Ae,Ee);function De(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return t.forEach(n=>{const o=e[n];if(Number(o)>0){const i=`spacing-${n}-${String(o)}`;r.push(i)}}),r}const Ze=e=>{const{classes:t,container:r,direction:n,item:o,spacing:i,wrap:a,zeroMinWidth:l,breakpoints:c}=e;let u=[];r&&(u=De(i,c));const d=[];c.forEach(h=>{const x=e[h];x&&d.push(`grid-${h}-${String(x)}`)});const C={root:["root",r&&"container",o&&"item",l&&"zeroMinWidth",...u,n!=="row"&&`direction-xs-${String(n)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...d]};return ae(C,He,t)},p=m.forwardRef(function(t,r){const n=W({props:t,name:"MuiGrid"}),{breakpoints:o}=Be(),i=Se(n),{className:a,columns:l,columnSpacing:c,component:u="div",container:d=!1,direction:C="row",item:h=!1,rowSpacing:x,spacing:g=0,wrap:pe="wrap",zeroMinWidth:he=!1}=i,V=oe(i,Ie),Ce=x||g,me=c||g,xe=m.useContext(U),P=d?l||12:xe,F={},A=f({},V);o.keys.forEach(w=>{V[w]!=null&&(F[w]=V[w],delete A[w])});const G=f({},i,{columns:P,container:d,direction:C,item:h,rowSpacing:Ce,columnSpacing:me,wrap:pe,zeroMinWidth:he,spacing:g},F,{breakpoints:o.keys}),fe=Ze(G);return s.jsx(U.Provider,{value:P,children:s.jsx(Oe,f({ownerState:G,className:ie(fe.root,a),as:u,ref:r},A))})});function ze(e){return re("MuiSkeleton",e)}se("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Ue=["animation","className","component","height","style","variant","width"];let y=e=>e,K,X,q,Q;const Ke=e=>{const{classes:t,variant:r,animation:n,hasChildren:o,width:i,height:a}=e;return ae({root:["root",r,n,o&&"withChildren",o&&!i&&"fitContent",o&&!a&&"heightAuto"]},ze,t)},Xe=ce(K||(K=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),qe=ce(X||(X=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),Qe=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.animation!==!1&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const r=Te(e.shape.borderRadius)||"px",n=_e(e.shape.borderRadius);return f({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:Ve(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&D(q||(q=y`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Xe),({ownerState:e,theme:t})=>e.animation==="wave"&&D(Q||(Q=y`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),qe,(t.vars||t).palette.action.hover)),J=m.forwardRef(function(t,r){const n=W({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:i,component:a="span",height:l,style:c,variant:u="text",width:d}=n,C=oe(n,Ue),h=f({},n,{animation:o,component:a,variant:u,hasChildren:!!C.children}),x=Ke(h);return s.jsx(Qe,f({as:a,ref:r,className:ie(x.root,i),ownerState:h},C,{style:f({width:d,height:l},c)}))}),Je=({width:e,height:t,color:r,status:n,theme:o,...i})=>{const a=o==="dark"?{defaultStroke:"white",hover:"white",active:"white"}:{defaultStroke:"#3D3F4C",hover:"#3D3F4C",active:"#3D3F4C"},l=c=>{switch(c){case"hover":return s.jsxs(s.Fragment,{children:[s.jsx("path",{opacity:"0.4",d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z",fill:r||a.hover,stroke:"none"}),s.jsx("path",{d:"M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z",fill:r||a.hover,stroke:"none"})]});case"active":return s.jsx("path",{d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z",fill:r||a.active,stroke:"none"});default:return s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M8 12H16",stroke:r||a.defaultStroke,strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 16V8",stroke:r||a.defaultStroke,strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",stroke:r||a.defaultStroke,strokeLinecap:"round",strokeLinejoin:"round"})]})}};return s.jsx("svg",{width:e||"24",height:t||"24",fill:"none",viewBox:"0 0 24 24",...i,children:l(n)})},Ye="_Card_1n8xb_1",et="_ServiceCard_1n8xb_9",Y={Card:Ye,ServiceCard:et},E=({children:e,className:t,variant:r,serviceColor:n,serviceTitle:o,style:i,...a})=>{const c=Object.assign({},i,{"--service-color":n||"var(--secondary)"});return s.jsxs(le,{className:`${Y.Card} ${r?Y[r]:""} ${t||""}`,style:c,...a,children:[o?s.jsx(v,{variant:"M24",sx:{mb:"24px"},children:o}):"",e]})},tt={booker:{title:"Бухгалтерское обслуживание",isAvailable:!0,promoContent:null},legal:{title:"Юридическое обслуживание",isAvailable:!1,promoContent:{title:"Подключить юридическое обслуживание",tagList:[{name:"Управление персоналом",description:"Консультации, подготовка документов, представительство в судах."},{name:"Эффективный персонал",description:"Описание тега эффективный персонал"},{name:"Законодательная поддержка",description:"Описание тега Законодательная поддержка"},{name:"Гибкие решения",description:"Описание тега Гибкие решения"}]}},personnel:{title:"Кадровое обслуживание",isAvailable:!1,component:null,promoContent:{title:"Подключить кадровое обслуживание",tagList:[{name:"Управление персоналом",description:"Консультации, подготовка документов, представительство в судах."},{name:"Эффективный персонал",description:"Описание тега эффективный персонал"},{name:"Законодательная поддержка",description:"Описание тега Законодательная поддержка"},{name:"Гибкие решения",description:"Описание тега Гибкие решения"}]}},marketing:{title:"Услуги маркетинга",isAvailable:!1,promoContent:{title:"Подключить услуги маркетинга",tagList:[{name:"Управление персоналом",description:"Консультации, подготовка документов, представительство в судах."},{name:"Эффективный персонал",description:"Описание тега эффективный персонал"},{name:"Законодательная поддержка",description:"Описание тега Законодательная поддержка"},{name:"Гибкие решения",description:"Описание тега Гибкие решения"}]}}},_={},ee=({serviceTitle:e,children:t})=>s.jsxs(p,{container:!0,columns:6,className:_.ServiceBlock,columnSpacing:{xs:"16px"},marginBottom:"54px",children:[s.jsx(p,{item:!0,xl:6,className:_.ServiceTitle,marginBottom:"32px",children:s.jsx(v,{variant:"M24",children:e||s.jsx(J,{variant:"rounded",height:"60px"})})}),s.jsx(p,{item:!0,xs:6,xl:5,className:_.serviceContent,children:t||s.jsx(J,{variant:"rounded",height:"310px"})})]}),nt="_Promo_hlhr6_1",rt="_Tag_hlhr6_5",st="_pickedTag_hlhr6_12",ot="_Tip_hlhr6_17",it="_PromoIcon_hlhr6_24",b={Promo:nt,Tag:rt,pickedTag:st,Tip:ot,PromoIcon:it},at=({title:e,tagList:t,icon:r})=>{const[n,o]=m.useState(0),{xl:i,lg:a,md:l}=Le(),c=r&&m.cloneElement(r,{className:b.PromoIcon,style:{top:i?"-15px":0,right:i?"350px":"200px",height:i?void 0:"100%"}}),[u,d]=m.useState(!1),[C,h]=m.useState(!1);return s.jsxs(E,{className:b.Promo,children:[c,s.jsxs(p,{container:!0,justifyContent:"space-between",sx:{position:"relative",zIndex:1},children:[s.jsx(p,{item:!0,lg:6,children:s.jsxs(L,{justifyContent:"space-between",height:"100%",children:[s.jsxs(v,{variant:"R48",component:"div",children:["Подключить ",e.toLowerCase()]}),s.jsx(L,{direction:"row",spacing:"9px",useFlexGap:!0,flexWrap:"wrap",children:t.map((x,g)=>s.jsx(v,{variant:"R20",className:`${b.Tag} ${g===n?b.pickedTag:""}`,sx:{width:i?"auto":"100%"},onClick:()=>o(g),children:x.name},x.name))})]})}),s.jsx(p,{item:!0,lg:6,md:12,children:s.jsxs(L,{direction:i||!a?"row":"column",spacing:"13px",alignItems:a?"end":"center",justifyContent:"space-between",minHeight:"100%",children:[s.jsx(v,{variant:"R16",className:b.Tip,width:l&&!a?"350px":"auto",children:t[n].description}),s.jsx(H,{variant:"unStyled",style:{width:l&&!a?"150px":"257px",marginBlock:i?"auto":void 0,marginTop:i?void 0:"auto"},onMouseEnter:()=>{d(!0)},onMouseDown:()=>h(!0),onTouchStart:()=>h(!0),onMouseLeave:()=>{d(!1),h(!1)},onMouseUp:()=>{h(!1)},onTouchEnd:()=>{h(!1),d(!1)},children:s.jsx(Je,{width:"100%",style:{filter:"drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2))"},theme:"dark",status:C?"active":u&&"hover"})})]})})]})]})},ct=({children:e})=>s.jsx(v,{variant:"M40",sx:{mb:"54px"},children:e});function B(e){return e&&typeof e=="object"&&!Array.isArray(e)}function N(e,...t){if(!t.length)return e;const r=t.shift();if(B(e)&&B(r))for(const n in r)B(r[n])?(e[n]||Object.assign(e,{[n]:{}}),N(e[n],r[n])):Object.assign(e,{[n]:r[n]});return N(e,...t)}const te=({width:e,height:t,fill:r,stroke:n,variant:o,...i})=>{function a(l){switch(l){case"hover":return s.jsxs(s.Fragment,{children:[s.jsx("path",{opacity:"0.4",d:"M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z",fill:r||"#3D3F4C"}),s.jsx("path",{d:"M8.16 6.6499H15.83C16.47 6.6499 16.99 7.1699 16.99 7.8099V9.0899C16.99 9.5599 16.7 10.1399 16.41 10.4299L13.91 12.6399C13.56 12.9299 13.33 13.5099 13.33 13.9799V16.4799C13.33 16.8299 13.1 17.2899 12.81 17.4699L12 17.9799C11.24 18.4499 10.2 17.9199 10.2 16.9899V13.9099C10.2 13.4999 9.97 12.9799 9.73 12.6899L7.52 10.3599C7.23 10.0799 7 9.5499 7 9.1999V7.8699C7 7.1699 7.52 6.6499 8.16 6.6499Z",fill:r||"#3D3F4C"})]});case"active":return s.jsx("path",{d:"M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM8.46 10.68L7.97 10.17C7.71 9.91 7.5 9.44 7.5 9.12V7.92C7.5 7.29 7.97 6.82 8.55 6.82H10.69C11.1 6.82 11.35 7.27 11.13 7.62L9.28 10.6C9.1 10.89 8.69 10.93 8.46 10.68ZM16.5 9.02C16.5 9.44 16.24 9.96 15.98 10.22L13.73 12.21C13.42 12.47 13.21 12.99 13.21 13.41V15.66C13.21 15.97 13 16.39 12.74 16.55L12 17.02C11.32 17.44 10.38 16.97 10.38 16.13V13.36C10.38 12.99 10.17 12.52 9.96 12.26L9.72 12C9.56 11.83 9.53 11.57 9.65 11.36L12.33 7.06C12.43 6.91 12.59 6.81 12.77 6.81H15.45C16.03 6.81 16.5 7.28 16.5 7.86V9.02Z",fill:r||"#3D3F4C"});default:return s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M8.16 6.65039H15.83C16.47 6.65039 16.99 7.17039 16.99 7.81039V9.09039C16.99 9.56039 16.7 10.1404 16.41 10.4304L13.91 12.6404C13.56 12.9304 13.33 13.5104 13.33 13.9804V16.4804C13.33 16.8304 13.1 17.2904 12.81 17.4704L12 17.9804C11.24 18.4504 10.2 17.9204 10.2 16.9904V13.9104C10.2 13.5004 9.97 12.9804 9.73 12.6904L7.52 10.3604C7.23 10.0804 7 9.55039 7 9.20039V7.87039C7 7.17039 7.52 6.65039 8.16 6.65039Z",stroke:n||"#3D3F4C",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",stroke:n||"#3D3F4C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}}return s.jsx("svg",{width:e||"24",height:t||"24",fill:r||"none",...i,children:a(o)})},lt="_BookerServiceContent_1sg98_1",dt="_TableHeader_1sg98_4",ut="_TableScrollableBody_1sg98_11",pt="_TableRow_1sg98_23",M={BookerServiceContent:lt,TableHeader:dt,TableScrollableBody:ut,TableRow:pt},ht=()=>{const[e,t]=m.useState("total"),[r,n]=m.useState(z);return m.useEffect(()=>{const o=[...r];e==="total"&&n(o.sort((i,a)=>i.total>a.total?-1:1)),e==="date"&&n(o.sort((i,a)=>new Date(a.date)>new Date(i.date)?1:-1))},[e]),s.jsx(E,{variant:"ServiceCard",style:{paddingBottom:0},serviceTitle:"Мои текущие налоги",children:s.jsxs(Z,{className:M.BookerServiceContent,children:[s.jsxs(p,{className:M.TableHeader,container:!0,columns:3,children:[s.jsx(p,{item:!0,xs:1,children:"Налог"}),s.jsx(p,{item:!0,xs:1,children:s.jsxs(T,{direction:"row",alignItems:"center",gap:"8px",children:["Дата упллаты"," ",s.jsx(H,{variant:"unStyled",style:{height:"24px"},onClick:()=>t("date"),children:s.jsx(te,{variant:e==="date"?"active":""})})]})}),s.jsx(p,{item:!0,xs:1,children:s.jsxs(T,{direction:"row",alignItems:"center",justifyContent:"end",gap:"8px",children:["Сумма"," ",s.jsx(H,{variant:"unStyled",style:{height:"24px"},onClick:()=>t("total"),children:s.jsx(te,{variant:e==="total"?"active":""})})]})})]}),s.jsx(T,{className:`${M.TableScrollableBody} scrollable`,children:s.jsx(Z,{children:r.map((o,i)=>s.jsxs(we.Fragment,{children:[s.jsxs(p,{className:M.TableRow,container:!0,columns:3,children:[s.jsx(p,{item:!0,xs:1,children:o.name}),s.jsx(p,{item:!0,xs:1,children:o.date}),s.jsx(p,{item:!0,xs:1,children:Intl.NumberFormat("ru").format(o.total)})]}),i!==z.length-1&&s.jsx("hr",{})]},o.name))})})]})})},Ct=({children:e})=>s.jsx(E,{serviceTitle:"Рекомендации",border:"2px solid var(--secondary)",children:e}),mt=()=>s.jsx(Ct,{}),xt=()=>s.jsxs(p,{container:!0,columns:5,spacing:{xs:"16px"},children:[s.jsx(p,{item:!0,xl:2,children:s.jsx(mt,{})}),s.jsx(p,{item:!0,xl:2,children:s.jsx(ht,{})})]}),ft=({width:e,height:t,stroke:r,...n})=>s.jsx("svg",{width:e||"428",height:t||"337",viewBox:"0 0 428 337",fill:"none",...n,children:s.jsx("path",{d:"M234.833 22.1667C234.833 45.1785 183.533 63.8333 120.25 63.8333C56.9673 63.8333 5.66663 45.1785 5.66663 22.1667M234.833 22.1667C234.833 -0.845196 183.533 -19.5 120.25 -19.5C56.9673 -19.5 5.66663 -0.845196 5.66663 22.1667M234.833 22.1667V53.4167M5.66663 22.1667V272.167C5.66663 295.179 56.9673 313.833 120.25 313.833M120.25 147.167C116.739 147.167 113.264 147.109 109.833 146.997C51.4322 145.083 5.66663 127.235 5.66663 105.5M120.25 230.5C56.9673 230.5 5.66663 211.845 5.66663 188.833M422.333 157.583C422.333 180.595 371.033 199.25 307.75 199.25C244.467 199.25 193.167 180.595 193.167 157.583M422.333 157.583C422.333 134.571 371.033 115.917 307.75 115.917C244.467 115.917 193.167 134.571 193.167 157.583M422.333 157.583V313.833C422.333 336.845 371.033 355.5 307.75 355.5C244.467 355.5 193.167 336.845 193.167 313.833V157.583M422.333 235.708C422.333 258.72 371.033 277.375 307.75 277.375C244.467 277.375 193.167 258.72 193.167 235.708",stroke:r||"white",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})}),gt=({width:e,height:t,fill:r,stroke:n,...o})=>s.jsx("svg",{width:e||"428",height:t||"328",viewBox:"0 0 428 328",fill:r||"none",...o,children:s.jsx("path",{d:"M5.66663 239.167V236.038C5.66663 229.444 5.66663 226.147 6.17094 222.935C6.61872 220.084 7.36165 217.286 8.38776 214.588C9.54342 211.549 11.1791 208.686 14.4504 202.962L88.9999 72.5M5.66663 239.167C5.66663 285.19 42.9762 322.5 88.9999 322.5C135.024 322.5 172.333 285.19 172.333 239.167M5.66663 239.167V235C5.66663 229.166 5.66663 226.249 6.80197 224.021C7.80066 222.061 9.3942 220.467 11.3542 219.469C13.5825 218.333 16.4994 218.333 22.3333 218.333H155.667C161.5 218.333 164.417 218.333 166.646 219.469C168.606 220.467 170.199 222.061 171.198 224.021C172.333 226.249 172.333 229.166 172.333 235V239.167M88.9999 72.5L163.549 202.962C166.821 208.686 168.456 211.549 169.612 214.588C170.638 217.286 171.381 220.084 171.829 222.935C172.333 226.147 172.333 229.444 172.333 236.038V239.167M88.9999 72.5L339 30.8333M255.667 197.5V194.371C255.667 187.777 255.667 184.481 256.171 181.269C256.619 178.417 257.362 175.619 258.388 172.921C259.543 169.882 261.179 167.02 264.45 161.295L339 30.8333M255.667 197.5C255.667 243.524 292.976 280.833 339 280.833C385.024 280.833 422.333 243.524 422.333 197.5M255.667 197.5V193.333C255.667 187.499 255.667 184.583 256.802 182.354C257.801 180.394 259.394 178.801 261.354 177.802C263.582 176.667 266.499 176.667 272.333 176.667H405.667C411.5 176.667 414.417 176.667 416.646 177.802C418.606 178.801 420.199 180.394 421.198 182.354C422.333 184.583 422.333 187.499 422.333 193.333V197.5M339 30.8333L413.549 161.295C416.821 167.02 418.456 169.882 419.612 172.921C420.638 175.619 421.381 178.417 421.829 181.269C422.333 184.481 422.333 187.777 422.333 194.371V197.5M214 -52.5V51.6667",stroke:n||"white",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})}),vt=({width:e,height:t,stroke:r,...n})=>s.jsx("svg",{width:e||"434",height:t||"337",viewBox:"0 0 434 337",...n,fill:"none",children:s.jsx("path",{d:"M345.232 232.567C376.296 248.21 402.929 273.314 422.368 304.706C426.218 310.922 428.143 314.031 428.808 318.335C430.161 327.082 424.194 337.835 416.068 341.297C412.069 343 407.57 343 398.573 343M302.56 140.495C334.174 124.745 355.9 92.0412 355.9 54.25C355.9 16.4588 334.174 -16.2454 302.56 -31.9951M259.887 54.25C259.887 107.407 216.9 150.5 163.873 150.5C110.846 150.5 67.8596 107.407 67.8596 54.25C67.8596 1.09259 110.846 -42 163.873 -42C216.9 -42 259.887 1.09259 259.887 54.25ZM15.7825 298.903C49.7992 247.703 103.478 214.667 163.873 214.667C224.268 214.667 277.947 247.703 311.964 298.903C319.416 310.12 323.142 315.728 322.713 322.893C322.379 328.471 318.731 335.3 314.285 338.671C308.575 343 300.721 343 285.013 343H42.733C27.0255 343 19.1717 343 13.4612 338.671C9.01495 335.3 5.36729 328.471 5.03328 322.893C4.6043 315.728 8.33035 310.12 15.7825 298.903Z",stroke:r||"white",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})}),jt=({width:e,height:t,stroke:r,...n})=>s.jsx("svg",{width:e||"399",height:t||"337",viewBox:"0 0 399 337",fill:"none",...n,children:s.jsx("path",{d:"M307.556 88L190.114 205.743C185.835 210.034 183.695 212.179 181.228 212.982C179.058 213.689 176.72 213.689 174.55 212.982C172.083 212.179 169.943 210.034 165.664 205.743L125.281 165.257C121.001 160.966 118.862 158.821 116.395 158.018C114.224 157.311 111.887 157.311 109.716 158.018C107.249 158.821 105.11 160.966 100.83 165.257L5 261.333M307.556 88H221.111M307.556 88V174.667M108.733 348H290.267C326.577 348 344.732 348 358.6 340.915C370.8 334.684 380.718 324.74 386.934 312.509C394 298.605 394 280.403 394 244V62C394 25.5966 394 7.39488 386.934 -6.50938C380.718 -18.7399 370.8 -28.6837 358.6 -34.9154C344.732 -42 326.577 -42 290.267 -42H108.733C72.4233 -42 54.2682 -42 40.3996 -34.9154C28.2004 -28.6837 18.2822 -18.7399 12.0664 -6.50938C5 7.39488 5 25.5966 5 62V244C5 280.403 5 298.605 12.0664 312.509C18.2822 324.74 28.2004 334.684 40.3996 340.915C54.2682 348 72.4233 348 108.733 348Z",stroke:r||"white",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})}),St=({...e})=>{const[t,r]=m.useState();m.useEffect(()=>{r(N({booker:{component:s.jsx(xt,{}),promoContent:{icon:s.jsx(ft,{})}},legal:{component:null,promoContent:{icon:s.jsx(gt,{})}},personnel:{component:null,promoContent:{icon:s.jsx(vt,{})}},marketing:{component:null,promoContent:{icon:s.jsx(jt,{})}}},tt))},[]);const n=i=>{const a=[];for(let[l,c]of Object.entries(i))a.push(s.jsx(ee,{serviceTitle:c.title,children:c.isAvailable?c.component:s.jsx(at,{title:c.title,tagList:c.promoContent.tagList,icon:c.promoContent.icon})},l));return a},o=()=>Array.from({length:4}).map((i,a)=>s.jsx(ee,{},a));return s.jsxs(le,{component:"section",...e,children:[s.jsx(ct,{children:"Мои услуги"}),t?n(t):o()]})};export{Je as A,E as C,p as G,St as S,Be as u};
