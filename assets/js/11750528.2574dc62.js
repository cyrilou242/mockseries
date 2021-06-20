(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2449],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4910:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={sidebar_label:"linear_trend",title:"mockseries.trend.linear_trend"},s={unversionedId:"API Reference/mockseries/trend/linear_trend",id:"API Reference/mockseries/trend/linear_trend",isDocsHomePage:!1,title:"mockseries.trend.linear_trend",description:"LinearTrend Objects",source:"@site/docs/API Reference/mockseries/trend/linear_trend.md",sourceDirName:"API Reference/mockseries/trend",slug:"/API Reference/mockseries/trend/linear_trend",permalink:"/docs/API Reference/mockseries/trend/linear_trend",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Reference/mockseries/trend/linear_trend.md",version:"current",sidebar_label:"linear_trend",frontMatter:{sidebar_label:"linear_trend",title:"mockseries.trend.linear_trend"},sidebar:"tutorialSidebar",previous:{title:"mockseries.trend.flat_trend",permalink:"/docs/API Reference/mockseries/trend/flat_trend"},next:{title:"mockseries.utils.dates",permalink:"/docs/API Reference/mockseries/utils/dates"}},l=[{value:"LinearTrend Objects",id:"lineartrend-objects",children:[]}],d={toc:l};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"lineartrend-objects"},"LinearTrend Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class LinearTrend(BaseTrend)\n")),(0,o.kt)("p",null,"y=start_value+at."),(0,o.kt)("h4",{id:"sample_at"},"sample","_","at"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | sample_at(time_points: np.ndarray, start_level: float) -> np.ndarray\n")),(0,o.kt)("p",null,"Sample the trend components."))}u.isMDXComponent=!0}}]);