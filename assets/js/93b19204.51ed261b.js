(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6629],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),y=o,f=m["".concat(c,".").concat(y)]||m[y]||p[y]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4419:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={sidebar_label:"seasonality",title:"mockseries.seasonality.seasonality"},c={unversionedId:"API Documentation/mockseries/seasonality/seasonality",id:"API Documentation/mockseries/seasonality/seasonality",isDocsHomePage:!1,title:"mockseries.seasonality.seasonality",description:"Seasonality Objects",source:"@site/docs/API Documentation/mockseries/seasonality/seasonality.md",sourceDirName:"API Documentation/mockseries/seasonality",slug:"/API Documentation/mockseries/seasonality/seasonality",permalink:"/docs/API Documentation/mockseries/seasonality/seasonality",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Documentation/mockseries/seasonality/seasonality.md",version:"current",sidebar_label:"seasonality",frontMatter:{sidebar_label:"seasonality",title:"mockseries.seasonality.seasonality"},sidebar:"tutorialSidebar",previous:{title:"mockseries.noise.red_noise",permalink:"/docs/API Documentation/mockseries/noise/red_noise"},next:{title:"mockseries.seasonality.sinusoidal_seasonality",permalink:"/docs/API Documentation/mockseries/seasonality/sinusoidal_seasonality"}},l=[{value:"Seasonality Objects",id:"seasonality-objects",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"seasonality-objects"},"Seasonality Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Seasonality()\n")),(0,a.kt)("p",null,"Seasonality interface."),(0,a.kt)("h4",{id:"sample_at"},"sample","_","at"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"}," | sample_at(time_points: np.ndarray, trend_components: np.ndarray) -> np.ndarray\n")),(0,a.kt)("p",null,"Samples the seasonality components of the timeseries."))}p.isMDXComponent=!0}}]);