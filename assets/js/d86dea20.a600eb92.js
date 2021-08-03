"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7473],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(a,".").concat(m)]||f[m]||p[m]||i;return r?t.createElement(d,s(s({ref:n},u),{},{components:r})):t.createElement(d,s({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7915:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return p}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),s=["components"],c={sidebar_label:"noise",title:"mockseries.noise.noise"},a={unversionedId:"API Reference/mockseries/noise/noise",id:"API Reference/mockseries/noise/noise",isDocsHomePage:!1,title:"mockseries.noise.noise",description:"Noise",source:"@site/docs/API Reference/mockseries/noise/noise.md",sourceDirName:"API Reference/mockseries/noise",slug:"/API Reference/mockseries/noise/noise",permalink:"/docs/API Reference/mockseries/noise/noise",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Reference/mockseries/noise/noise.md",version:"current",sidebar_label:"noise",frontMatter:{sidebar_label:"noise",title:"mockseries.noise.noise"},sidebar:"tutorialSidebar",previous:{title:"mockseries.noise.gaussian_noise",permalink:"/docs/API Reference/mockseries/noise/gaussian_noise"},next:{title:"mockseries.noise.red_noise",permalink:"/docs/API Reference/mockseries/noise/red_noise"}},l=[{value:"Noise",id:"noise",children:[]}],u={toc:l};function p(e){var n=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"noise"},"Noise"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Noise(Signal)\n")),(0,i.kt)("p",null,"Noise interface."))}p.isMDXComponent=!0}}]);