"use strict";(self.webpackChunkiam=self.webpackChunkiam||[]).push([[7957],{9588:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=i(4848),t=i(8453);const s={},c="Certification Percent Complete",o={id:"queries/cert-report-with-percent-complete",title:"Certification Percent Complete",description:"Oracle Identity Management (OIM) helps organizations manage user access and ensure security through regular certifications. Certification queries allow you to track the progress of user access reviews. Here's a quick breakdown of a certification query in OIM and how it works.",source:"@site/docs/queries/cert-report-with-percent-complete.md",sourceDirName:"queries",slug:"/queries/cert-report-with-percent-complete",permalink:"/iam/docs/queries/cert-report-with-percent-complete",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Certification Actions Taken by Managers",permalink:"/iam/docs/queries/certification-queries"}},a={},l=[{value:"Sample Certification Query",id:"sample-certification-query",level:3},{value:"Key Points of the Query",id:"key-points-of-the-query",level:3},{value:"Why This Query Matters",id:"why-this-query-matters",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"certification-percent-complete",children:"Certification Percent Complete"})}),"\n",(0,r.jsx)(n.p,{children:"Oracle Identity Management (OIM) helps organizations manage user access and ensure security through regular certifications. Certification queries allow you to track the progress of user access reviews. Here's a quick breakdown of a certification query in OIM and how it works."}),"\n",(0,r.jsx)(n.h3,{id:"sample-certification-query",children:"Sample Certification Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT DISTINCT\r\n  cc.ID AS ID,\r\n  cd.cert_name,\r\n  cc.CERT_NAME AS CERTIFICATE_NAME,\r\n  CS.PERCENT_COMPLETE AS COMPLETION_PERCENT,\r\n  CDU.USR_LOGIN AS MANAGER,\r\n  CDU.USR_DISPLAY_NAME AS MANAGER_USERNAME,\r\n  CDU.USR_EMAIL AS MANAGER_EMAIL,\r\n  COALESCE(CS.LID2_COMPL, 0) AS ACCOUNT_COMPLETED,\r\n  COALESCE(CS.LID2_TOT, 0) AS ACCOUNT_TOTAL,\r\n  COALESCE(CS.LID3_COMPL, 0) AS ENTITLEMENT_COMPLETED,\r\n  COALESCE(CS.LID3_TOT, 0) AS ENTITLEMENT_TOTAL\r\nFROM\r\n  cert_certs CC\r\nLEFT OUTER JOIN PRODOIM_OIM.CERTD_STATS CS ON CC.ID = CS.CERT_ID\r\nLEFT OUTER JOIN USR CDU ON CDU.USR_KEY = CC.CERTIFIER_ID\r\nLEFT OUTER JOIN CERT_DEFN cd ON UPPER(cc.CERT_NAME) LIKE '%' || UPPER(cd.cert_name) || '%'\r\nWHERE\r\n  cc.CREATEDATE > sysdate - 90\r\n  AND LINE_ITEM_TYPE = 0\r\nORDER BY ID DESC;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"key-points-of-the-query",children:"Key Points of the Query"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Certification Details:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ID"}),": Unique certification ID."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Certificate Name"}),": Name of the certification."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Completion Percentage"}),": How much of the certification process is done."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Certifier (Manager) Information:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Manager Login/Name/Email"}),": Details of the manager responsible for the certification."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Progress on Accounts and Entitlements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Accounts Certified"}),": The number of certified user accounts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Entitlements Certified"}),": The number of certified permissions (entitlements) granted to users."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Filtering and Sorting:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The query filters certifications created in the last 90 days (",(0,r.jsx)(n.code,{children:"cc.CREATEDATE > sysdate - 90"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"Results are sorted by certification ID in descending order."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"why-this-query-matters",children:"Why This Query Matters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Audit & Compliance"}),": This query helps track the status of certifications, which is crucial for regulatory compliance (e.g., SOX, GDPR)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Real-time Monitoring"}),": Managers can easily see which certifications need attention and follow up on incomplete certifications."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Customizable"}),": The query can be adapted to focus on specific certifications, timeframes, or managers."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"This certification query in OIM provides a simple way to track progress on access reviews, ensuring timely completion and supporting compliance efforts. You can modify this query to suit your organization\u2019s specific certification reporting needs."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);