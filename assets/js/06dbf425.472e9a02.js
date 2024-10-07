"use strict";(self.webpackChunkiam=self.webpackChunkiam||[]).push([[8338],{3929:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=e(4848),s=e(8453);const o={layout:"post",title:"Two Main Tasks in Configuring a PAM Application"},a=void 0,r={permalink:"/iam/blog/2024/07/19/sailpoint-pam-integration",source:"@site/blog/2024-07-19-sailpoint-pam-integration.md",title:"Two Main Tasks in Configuring a PAM Application",description:"Two Main Tasks in Configuring a PAM Application",date:"2024-07-19T00:00:00.000Z",tags:[],readingTime:1.365,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Two Main Tasks in Configuring a PAM Application"},unlisted:!1,prevItem:{title:"Configuring a Private Server for IdentityIQ's Microsoft Teams Service Code",permalink:"/iam/blog/2024/07/22/sailpoint-teams-integration"},nextItem:{title:"Lifecycle Events in SailPoint IdentityIQ",permalink:"/iam/blog/2024/07/16/sailpoint-lifecycle-events"}},l={authorsImageUrls:[]},c=[{value:"Two Main Tasks in Configuring a PAM Application",id:"two-main-tasks-in-configuring-a-pam-application",level:2}];function d(n){const i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"two-main-tasks-in-configuring-a-pam-application",children:"Two Main Tasks in Configuring a PAM Application"}),"\n",(0,t.jsx)(i.p,{children:"The two main tasks for configuring a Privileged Account Management (PAM) application in IdentityIQ are:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Configuring a PAM Application:"})," This task involves setting up a connection between IdentityIQ and your PAM vendor's system to aggregate data on PAM accounts, groups, vaults, and permissions."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'This process utilizes a PAM-specific application (connector) type called "Privileged Account Management".'}),"\n",(0,t.jsxs)(i.li,{children:["You need to configure the application to include both a ",(0,t.jsx)(i.strong,{children:"connector"})," and a ",(0,t.jsx)(i.strong,{children:"target collector"}),":","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.strong,{children:"connector"})," is responsible for aggregating users, groups, and containers into IdentityIQ."]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.strong,{children:"target collector"})," reads in permissions users have on containers, and can write permissions back to the target system."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"The PAM connector, based on IdentityIQ's SCIM 2.0 connector, requires configuration details like Base URL and authentication methods (OAuth2.0, API Token, or Basic Authentication)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Configuring PAM Global Settings:"})," This task focuses on setting up global options for the PAM module within IdentityIQ."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"These settings control aspects like how PAM containers can be modified within IdentityIQ."}),"\n",(0,t.jsx)(i.li,{children:"You can define whether to allow adding/removing identities and privileged items in PAM containers, and whether to enable owners to modify PAM containers."}),"\n",(0,t.jsx)(i.li,{children:"Global settings also dictate the business process used for provisioning PAM identities. You can either utilize the standard LCMManage Passwords business process or define a custom workflow of type LCMProvisioning."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"These two tasks are essential for setting up the PAM module in IdentityIQ. While these tasks establish the foundation for PAM integration, the sources also highlight additional configurations related to credential cycling, Rapid Setup processes, and task management for aggregation, indexing, and refreshing PAM data."})]})}function g(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>a,x:()=>r});var t=e(6540);const s={},o=t.createContext(s);function a(n){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(o.Provider,{value:i},n.children)}}}]);