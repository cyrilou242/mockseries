"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3580],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},436:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_label:"exponential_trend",title:"mockseries.trend.exponential_trend"},l={unversionedId:"API Reference/mockseries/trend/exponential_trend",id:"API Reference/mockseries/trend/exponential_trend",isDocsHomePage:!1,title:"mockseries.trend.exponential_trend",description:"ExponentialTrend",source:"@site/docs/API Reference/mockseries/trend/exponential_trend.md",sourceDirName:"API Reference/mockseries/trend",slug:"/API Reference/mockseries/trend/exponential_trend",permalink:"/docs/API Reference/mockseries/trend/exponential_trend",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Reference/mockseries/trend/exponential_trend.md",version:"current",sidebar_label:"exponential_trend",frontMatter:{sidebar_label:"exponential_trend",title:"mockseries.trend.exponential_trend"},sidebar:"tutorialSidebar",previous:{title:"mockseries.transition.transition",permalink:"/docs/API Reference/mockseries/transition/transition"},next:{title:"mockseries.trend.flat_trend",permalink:"/docs/API Reference/mockseries/trend/flat_trend"}},s=[{value:"ExponentialTrend",id:"exponentialtrend",children:[]}],p={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"exponentialtrend"},"ExponentialTrend"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class ExponentialTrend(Signal)\n")),(0,i.kt)("p",null,"y=base_value+(a**t)."))}d.isMDXComponent=!0}}]);