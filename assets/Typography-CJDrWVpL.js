import{g as B,b as T,s as C,d as y,_ as s,r as W,e as M,C as R,a as P,j,c as U,f as _}from"./index-BQuGqfQh.js";function N(t){return B("MuiTypography",t)}T("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const D=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=t=>{const{align:a,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:p}=t,e={root:["root",o,t.align!=="inherit"&&`align${y(a)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return _(e,N,p)},L=C("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${y(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>s({margin:0},a.variant==="inherit"&&{font:"inherit"},a.variant!=="inherit"&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},$={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=t=>$[t]||t,J=W.forwardRef(function(a,r){const n=M({props:a,name:"MuiTypography"}),i=z(n.color),o=R(s({},n,{color:i})),{align:p="inherit",className:e,component:g,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:h="body1",variantMapping:c=u}=o,x=P(o,D),m=s({},o,{align:p,color:i,className:e,component:g,gutterBottom:d,noWrap:f,paragraph:l,variant:h,variantMapping:c}),v=g||(l?"p":c[h]||u[h])||"span",b=E(m);return j.jsx(L,s({as:v,ref:r,ownerState:m,className:U(b.root,e)},x))});export{J as T};
