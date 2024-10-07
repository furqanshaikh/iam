"use strict";(self.webpackChunkiam=self.webpackChunkiam||[]).push([[944],{7969:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(4848),s=i(8453);const r={layout:"post",title:"Lifecycle Events in SailPoint IdentityIQ"},o=void 0,a={permalink:"/iam/blog/2024/07/16/sailpoint-lifecycle-events",source:"@site/blog/2024-07-16-sailpoint-lifecycle-events.md",title:"Lifecycle Events in SailPoint IdentityIQ",description:"Lifecycle Events in SailPoint IdentityIQ",date:"2024-07-16T00:00:00.000Z",tags:[],readingTime:2.52,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Lifecycle Events in SailPoint IdentityIQ"},unlisted:!1,prevItem:{title:"Two Main Tasks in Configuring a PAM Application",permalink:"/iam/blog/2024/07/19/sailpoint-pam-integration"},nextItem:{title:"Prerequisites for Enabling and Integrating SailPoint AI Services with IdentityIQ",permalink:"/iam/blog/2024/07/13/sailpoint-ai"}},c={authorsImageUrls:[]},l=[{value:"Lifecycle Events in SailPoint IdentityIQ",id:"lifecycle-events-in-sailpoint-identityiq",level:3}];function d(e){const n={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"lifecycle-events-in-sailpoint-identityiq",children:"Lifecycle Events in SailPoint IdentityIQ"}),"\n",(0,t.jsxs)(n.p,{children:["In IdentityIQ, ",(0,t.jsx)(n.strong,{children:"Lifecycle Events"})," represent activities that occur during an employee's tenure at a company, such as joining, changing roles, or leaving. These events, when triggered by specific changes to an identity (like attribute changes or creation), initiate ",(0,t.jsx)(n.strong,{children:"Business Processes"})," (workflows) that can include provisioning actions."]}),"\n",(0,t.jsx)(n.p,{children:"Here's a breakdown of key aspects related to Lifecycle Events:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pre-defined Lifecycle Events:"})," IdentityIQ provides four pre-defined Lifecycle Events, each linked to a specific trigger and default Business Process:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Joiner:"})," Triggered upon identity creation. The default process simply logs the identity's name. Typically customized to provision initial access rights (birthright access)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Leaver:"}),' Triggered when the "Inactive" attribute changes from false to true. The default process disables all the leaving identity\'s accounts.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Manager Transfer:"})," Triggered when an identity's manager changes. The default process logs the old and new managers' names. Commonly customized to initiate a certification for the new manager to review the identity's access or provision access based on the new manager's group memberships."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reinstate:"}),' Triggered when the "Inactive" attribute changes from true to false. The default process enables all previously disabled accounts of a returning identity.']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lifecycle Events and Rapid Setup:"}),"  The ",(0,t.jsx)(n.strong,{children:"Rapid Setup"})," module simplifies the configuration of common Lifecycle Events like Joiner, Mover, and Leaver. It allows administrators to define event triggers, global actions, and per-application actions (like birthright role assignment). Rapid Setup offers a user-friendly interface for configuring these events without requiring in-depth workflow customization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Lifecycle Events:"})," You can create custom Lifecycle Events beyond the pre-defined ones to cater to specific organizational needs. These custom events offer flexibility in defining triggers, target identities, and associated workflows."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lifecycle Events and Provisioning:"}),"  Lifecycle Events are tightly integrated with IdentityIQ's provisioning engine. The Business Processes triggered by these events can contain provisioning actions, such as creating, modifying, enabling, disabling, or deleting accounts and entitlements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lifecycle Events Configuration:"})," You manage Lifecycle Events through the ",(0,t.jsx)(n.strong,{children:"Lifecycle Events"})," page (Setup > Lifecycle Events). Here, you can:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create new Lifecycle Events:"})," Define a name, description, event type (Create, Manager Transfer, Attribute Change, Rule, Native Change, Alert), target identity population, and the triggering business process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Edit pre-defined Lifecycle Events:"})," Customize the default behavior of the provided events by modifying their associated Business Processes."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Monitoring Lifecycle Events:"}),"  You can monitor the execution and outcomes of Lifecycle Events through various methods:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Track My Requests:"})," Provides visibility into the access requests generated by Lifecycle Events, particularly those initiated through Rapid Setup workflows."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Advanced Analytics:"})," Allows you to search and analyze audit data, including events related to Lifecycle Events (action: IdentityLifecycleEvent)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Identity Events:"})," Offers a historical view of past events associated with an identity, including those triggered by Lifecycle Events."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Overall, Lifecycle Events provide a powerful mechanism in IdentityIQ to automate identity management processes based on real-world events throughout an employee's lifecycle. By defining appropriate triggers and associating them with customized workflows, organizations can streamline access provisioning, de-provisioning, and other critical identity management tasks."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);