"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[432],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3236:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var t=r(7462),o=r(3366),s=(r(7294),r(3905)),i=["components"],a={sidebar_label:"composed_signal",title:"mockseries.signal.composed_signal"},c={unversionedId:"API Reference/mockseries/signal/composed_signal",id:"API Reference/mockseries/signal/composed_signal",isDocsHomePage:!1,title:"mockseries.signal.composed_signal",description:"ComposedSignal",source:"@site/docs/API Reference/mockseries/signal/composed_signal.md",sourceDirName:"API Reference/mockseries/signal",slug:"/API Reference/mockseries/signal/composed_signal",permalink:"/docs/API Reference/mockseries/signal/composed_signal",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Reference/mockseries/signal/composed_signal.md",version:"current",sidebar_label:"composed_signal",frontMatter:{sidebar_label:"composed_signal",title:"mockseries.signal.composed_signal"},sidebar:"tutorialSidebar",previous:{title:"mockseries.seasonality.yearly_seasonality",permalink:"/docs/API Reference/mockseries/seasonality/yearly_seasonality"},next:{title:"mockseries.signal.signal",permalink:"/docs/API Reference/mockseries/signal/signal"}},l=[{value:"ComposedSignal",id:"composedsignal",children:[]}],p={toc:l};function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"composedsignal"},"ComposedSignal"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class ComposedSignal(Signal)\n")),(0,s.kt)("p",null,"Combines multiple signals."))}m.isMDXComponent=!0}}]);