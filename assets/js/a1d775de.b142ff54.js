"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2931],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1656:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_label:"signal",title:"mockseries.signal.signal"},s={unversionedId:"API Reference/mockseries/signal/signal",id:"API Reference/mockseries/signal/signal",isDocsHomePage:!1,title:"mockseries.signal.signal",description:"Signal",source:"@site/docs/API Reference/mockseries/signal/signal.md",sourceDirName:"API Reference/mockseries/signal",slug:"/API Reference/mockseries/signal/signal",permalink:"/docs/API Reference/mockseries/signal/signal",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Reference/mockseries/signal/signal.md",version:"current",sidebar_label:"signal",frontMatter:{sidebar_label:"signal",title:"mockseries.signal.signal"},sidebar:"tutorialSidebar",previous:{title:"mockseries.signal.composed_signal",permalink:"/docs/API Reference/mockseries/signal/composed_signal"},next:{title:"mockseries.transition.direct_transition",permalink:"/docs/API Reference/mockseries/transition/direct_transition"}},p=[{value:"Signal",id:"signal",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"signal"},"Signal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Signal()\n")),(0,i.kt)("p",null,"Interface representing any type of signal."),(0,i.kt)("h4",{id:"generate"},"generate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | generate(time_points: Union[List[datetime], np.ndarray]) -> np.ndarray\n")),(0,i.kt)("p",null,"Generate a signal from a list of times."),(0,i.kt)("h4",{id:"preview_year"},"preview","_","year"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | preview_year(num_years: int = 1, start_time: Optional[datetime] = None) -> None\n")),(0,i.kt)("p",null,"Plot one year of signal with a day granularity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_years")," - Number of years to plot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time")," - Time from which to start. If None, defaults to current datetime.")),(0,i.kt)("h4",{id:"preview_month"},"preview","_","month"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | preview_month(num_months: int = 1, start_time: Optional[datetime] = None) -> None\n")),(0,i.kt)("p",null,"Plot one month of signal with an hour granularity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_months")," - Number of months to plot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time")," - Time from which to start. If None, defaults to current datetime.")),(0,i.kt)("h4",{id:"preview_week"},"preview","_","week"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | preview_week(num_weeks: int = 1, start_time: Optional[datetime] = None) -> None\n")),(0,i.kt)("p",null,"Plot one week of signal with an hour granularity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_weeks")," - Number of weeks to plot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time")," - Time from which to start. If None, defaults to current datetime.")),(0,i.kt)("h4",{id:"preview_day"},"preview","_","day"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | preview_day(num_days: int = 1, start_time: Optional[datetime] = None) -> None\n")),(0,i.kt)("p",null,"Plot one day of signal with a minute granularity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_days")," - Number of days to plot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time")," - Time from which to start. If None, defaults to current datetime.")),(0,i.kt)("h4",{id:"preview_hour"},"preview","_","hour"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | preview_hour(num_hours: int = 1, start_time: Optional[datetime] = None) -> None\n")),(0,i.kt)("p",null,"Plot one hour of signal with a second granularity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_hours")," - Number of hours to plot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time")," - Time from which to start. If None, defaults to current datetime.")),(0,i.kt)("h4",{id:"preview_minute"},"preview","_","minute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | preview_minute(num_minutes: int = 1, start_time: Optional[datetime] = None) -> None\n")),(0,i.kt)("p",null,"Plot one minute of signal with a centisecond granularity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_minutes")," - Number of hours to plot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time")," - Time from which to start. If None, defaults to current datetime.")),(0,i.kt)("h4",{id:"__add__"},"_","_","add","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},' | __add__(other: Union["Signal", int, float]) -> "Signal"\n')),(0,i.kt)("p",null,"Add two signals."),(0,i.kt)("h4",{id:"__mul__"},"_","_","mul","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},' | __mul__(other: Union["Signal", int, float]) -> "Signal"\n')),(0,i.kt)("p",null,"Multiply two signals."),(0,i.kt)("h4",{id:"__sub__"},"_","_","sub","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},' | __sub__(other: Union["Signal", int, float]) -> "Signal"\n')),(0,i.kt)("p",null,"Subtract one signal from another."),(0,i.kt)("h4",{id:"__neg__"},"_","_","neg","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},' | __neg__() -> "Signal"\n')),(0,i.kt)("p",null,"Get the opposite of a signal."),(0,i.kt)("h4",{id:"__rmul__"},"_","_","rmul","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},' | __rmul__(other: Union[float, int]) -> "Signal"\n')),(0,i.kt)("p",null,"Multiplies by a constant."),(0,i.kt)("h4",{id:"__radd__"},"_","_","radd","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},' | __radd__(other: Union[float, int]) -> "Signal"\n')),(0,i.kt)("p",null,"Adds a flat component."))}m.isMDXComponent=!0}}]);