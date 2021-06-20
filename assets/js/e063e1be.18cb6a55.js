(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6430],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||c;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5461:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),c=(n(7294),n(3905)),o=["components"],a={sidebar_label:"multiplicative_interaction",title:"mockseries.interaction.multiplicative_interaction"},l={unversionedId:"API Reference/mockseries/interaction/multiplicative_interaction",id:"API Reference/mockseries/interaction/multiplicative_interaction",isDocsHomePage:!1,title:"mockseries.interaction.multiplicative_interaction",description:"MultiplicativeInteraction Objects",source:"@site/docs/API Reference/mockseries/interaction/multiplicative_interaction.md",sourceDirName:"API Reference/mockseries/interaction",slug:"/API Reference/mockseries/interaction/multiplicative_interaction",permalink:"/docs/API Reference/mockseries/interaction/multiplicative_interaction",editUrl:"https://github.com/cyrilou242/mockseries/edit/master/website/docs/API Reference/mockseries/interaction/multiplicative_interaction.md",version:"current",sidebar_label:"multiplicative_interaction",frontMatter:{sidebar_label:"multiplicative_interaction",title:"mockseries.interaction.multiplicative_interaction"},sidebar:"tutorialSidebar",previous:{title:"mockseries.interaction.interaction",permalink:"/docs/API Reference/mockseries/interaction/interaction"},next:{title:"mockseries.main",permalink:"/docs/API Reference/mockseries/main"}},s=[{value:"MultiplicativeInteraction Objects",id:"multiplicativeinteraction-objects",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"multiplicativeinteraction-objects"},"MultiplicativeInteraction Objects"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class MultiplicativeInteraction(Interaction)\n")),(0,c.kt)("p",null,"Implementation of the multiplication relation for timeseries."),(0,c.kt)("h4",{id:"generate_component"},"generate","_","component"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"}," | generate_component(samples: np.ndarray, trend_components: np.ndarray) -> np.ndarray\n")),(0,c.kt)("p",null,"Compute components for a multiplicative relationship."))}u.isMDXComponent=!0}}]);