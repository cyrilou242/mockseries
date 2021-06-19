(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4702],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3407:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],c={sidebar_label:"additive_interaction",title:"mockseries.interaction.additive_interaction"},s={unversionedId:"API Documentation/mockseries/interaction/additive_interaction",id:"API Documentation/mockseries/interaction/additive_interaction",isDocsHomePage:!1,title:"mockseries.interaction.additive_interaction",description:"AdditiveInteraction Objects",source:"@site/docs/API Documentation/mockseries/interaction/additive_interaction.md",sourceDirName:"API Documentation/mockseries/interaction",slug:"/API Documentation/mockseries/interaction/additive_interaction",permalink:"/docs/API Documentation/mockseries/interaction/additive_interaction",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Documentation/mockseries/interaction/additive_interaction.md",version:"current",sidebar_label:"additive_interaction",frontMatter:{sidebar_label:"additive_interaction",title:"mockseries.interaction.additive_interaction"},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"},next:{title:"mockseries.interaction.interaction",permalink:"/docs/API Documentation/mockseries/interaction/interaction"}},u=[{value:"AdditiveInteraction Objects",id:"additiveinteraction-objects",children:[]}],d={toc:u};function l(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"additiveinteraction-objects"},"AdditiveInteraction Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class AdditiveInteraction(Interaction)\n")),(0,o.kt)("p",null,"Implementation of the additive relation for timeseries."),(0,o.kt)("h4",{id:"generate_component"},"generate","_","component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | generate_component(samples: np.ndarray, trend_components: np.ndarray) -> np.ndarray\n")),(0,o.kt)("p",null,"Compute components for an additive relationship."))}l.isMDXComponent=!0}}]);