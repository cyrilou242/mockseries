"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3393],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||y[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9710:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return y}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_label:"period_seasonality",title:"mockseries.seasonality.period_seasonality"},l={unversionedId:"API Reference/mockseries/seasonality/period_seasonality",id:"API Reference/mockseries/seasonality/period_seasonality",isDocsHomePage:!1,title:"mockseries.seasonality.period_seasonality",description:"PeriodSeasonality",source:"@site/docs/API Reference/mockseries/seasonality/period_seasonality.md",sourceDirName:"API Reference/mockseries/seasonality",slug:"/API Reference/mockseries/seasonality/period_seasonality",permalink:"/docs/API Reference/mockseries/seasonality/period_seasonality",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Reference/mockseries/seasonality/period_seasonality.md",version:"current",sidebar_label:"period_seasonality",frontMatter:{sidebar_label:"period_seasonality",title:"mockseries.seasonality.period_seasonality"},sidebar:"tutorialSidebar",previous:{title:"mockseries.seasonality.daily_seasonality",permalink:"/docs/API Reference/mockseries/seasonality/daily_seasonality"},next:{title:"mockseries.seasonality.seasonality",permalink:"/docs/API Reference/mockseries/seasonality/seasonality"}},c=[{value:"PeriodSeasonality",id:"periodseasonality",children:[]}],p={toc:c};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"periodseasonality"},"PeriodSeasonality"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class PeriodSeasonality(Seasonality)\n")),(0,i.kt)("p",null,"Base class for constraints based realistic period seasonalities."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./daily_seasonality"},"DailySeasonality"),", ",(0,i.kt)("a",{parentName:"p",href:"./weekly_seasonality"},"WeeklySeasonality"),", ",(0,i.kt)("a",{parentName:"p",href:"./yearly_seasonality"},"YearlySeasonality"),".\nFinest granularity for constraints and generation is microseconds.\nThe interpolation method is ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html#scipy-interpolate-pchipinterpolator"},"PCHIP"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_value_constraints")," - A dict of ",(0,i.kt)("inlineCode",{parentName:"li"},"{time: value}")," constraints. The curve will pass through these points.\nPass time as a timedelta in the period frame. For instance, for daily seasonality, the timedelta must be between ",(0,i.kt)("inlineCode",{parentName:"li"},"0:00:00")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"23:59:59"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utc_offset")," - The offset from UTC of the time. For instance, if you give constraints with GMT-8 times in mind, pass ",(0,i.kt)("inlineCode",{parentName:"li"},"timedelta(hours=-8)"),".\nDefault behavior considers times are passed as UTC."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"normalize")," - transform constraints to a multiplication factor for easy use in multiplicative interactions. Eg: ","[5, 10, 15]"," --\x3e ","[0.5, 1, 1.5]",".")))}y.isMDXComponent=!0}}]);