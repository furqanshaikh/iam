"use strict";(self.webpackChunkiam=self.webpackChunkiam||[]).push([[2650],{7642:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(4848),t=i(8453);const o={layout:"post",title:"Key Capabilities and Functionality Extensions of SailPoint's Plugin Framework"},r=void 0,a={permalink:"/iam/blog/2024/07/04/Key-Capabilities",source:"@site/blog/2024-07-04-Key-Capabilities.md",title:"Key Capabilities and Functionality Extensions of SailPoint's Plugin Framework",description:"Key Capabilities and Functionality Extensions of SailPoint's Plugin Framework",date:"2024-07-04T00:00:00.000Z",tags:[],readingTime:2.375,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Key Capabilities and Functionality Extensions of SailPoint's Plugin Framework"},unlisted:!1,prevItem:{title:"Special Considerations in IdentityIQ",permalink:"/iam/blog/2024/07/07/iiq-special-considerations"},nextItem:{title:"Initial Operations for a Fresh Production IIQ Deployment",permalink:"/iam/blog/2024/07/01/Initial-Operations"}},l={authorsImageUrls:[]},c=[{value:"Key Capabilities and Functionality Extensions of SailPoint&#39;s Plugin Framework",id:"key-capabilities-and-functionality-extensions-of-sailpoints-plugin-framework",level:2}];function d(e){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"key-capabilities-and-functionality-extensions-of-sailpoints-plugin-framework",children:"Key Capabilities and Functionality Extensions of SailPoint's Plugin Framework"}),"\n",(0,s.jsx)(n.p,{children:"The SailPoint Plugin Framework offers several key capabilities that allow you to extend the functionality of IdentityIQ. Here's a breakdown:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Extensibility:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Class path isolation on the server side:"})," This allows developers to leverage any third-party libraries or technologies for REST endpoints, background services, or Java classes called from scripts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JavaScript isolation on the client side:"}),"  Plugin developers can utilize any third-party client-side libraries without conflicts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Core code protection:"})," The framework ensures that plugins cannot override or modify the behavior of IdentityIQ's backend code, ensuring security and facilitating smooth upgrades."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Integration:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Web service extensions:"}),"  Developers can create custom REST endpoints to exchange data between their plugins and the IdentityIQ data model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Plugin database access:"})," Plugins can create and manage their own database tables within IdentityIQ, providing persistent storage for plugin-specific data."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"UI Enhancements:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Plugin installation and removal:"})," Plugins can be dynamically installed and removed, offering a user-friendly drag-and-drop experience or requiring installation before IdentityIQ starts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UI Customization:"})," Plugins can include user interface elements like:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-page applications:"})," Create entirely new pages within IdentityIQ."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Snippets:"})," Inject small pieces of code to modify existing IdentityIQ user interface pages, such as adding menu options or buttons."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Widgets:"})," Develop reusable UI components that users can add to their IdentityIQ home pages."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SailPoint Angular components:"})," Plugins can leverage the SailPoint Angular library to implement UI elements consistent with the IdentityIQ design, providing a seamless user experience."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Business Logic Implementation:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Plugin Java Classes:"})," Developers can write Java classes to implement custom logic, including:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"REST Classes:"}),"  Extend IdentityIQ's REST API by creating custom endpoints to handle specific actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Plugin Executors:"}),"  Implement background tasks, services, or policies that can be invoked within IdentityIQ."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Security and Permissions:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Plugin authorization:"})," Control access to plugin functionality by defining custom Capabilities and SPRights.  This allows you to restrict access to UI components and secure REST endpoints."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples of Plugin Use Cases:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Integrating with a third-party service desk system (e.g., BMC Remedyforce) to create and track tickets for provisioning requests."})," The sources mention several Service Desk Integration Modules, including ones for BMC Helix Remedyforce, a generic one, and one for Cherwell. This indicates that creating plugins to interact with service desk solutions is a common use case."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Building a custom reporting dashboard to visualize IdentityIQ data in a specific way."})," While not explicitly mentioned, the sources provide extensive information on customizing reports in IdentityIQ, suggesting that plugins could be used to extend reporting capabilities even further."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Developing a custom workflow to automate a specific business process related to identity management."})," The sources highlight the use of plugins for custom tasks and executors, which can be used to create and manage custom workflows within IdentityIQ."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This response draws exclusively from the provided sources."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);