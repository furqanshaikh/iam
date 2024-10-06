"use strict";(self.webpackChunkiam=self.webpackChunkiam||[]).push([[8412],{3037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(4848),s=i(8453);const a={sidebar_position:1},r="Retrieving Certification Actions Taken by Managers",o={id:"queries/certification-queries",title:"Retrieving Certification Actions Taken by Managers",description:"When working with identity governance systems like Oracle Identity Manager (OIM), generating reports that detail certification actions is a critical part of ensuring compliance. In this post, we'll demonstrate how to retrieve information about certifications handled by managers, enriched with data from the CERT_DEFN table.",source:"@site/docs/queries/certification-queries.md",sourceDirName:"queries",slug:"/queries/certification-queries",permalink:"/iam/docs/queries/certification-queries",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/queries/certification-queries.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"IAM Queries",permalink:"/iam/docs/category/iam-queries"}},c={},l=[{value:"Scenario Overview",id:"scenario-overview",level:2},{value:"Key Data Points:",id:"key-data-points",level:2},{value:"SQL Query Explanation",id:"sql-query-explanation",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"retrieving-certification-actions-taken-by-managers",children:"Retrieving Certification Actions Taken by Managers"})}),"\n",(0,t.jsxs)(n.p,{children:["When working with identity governance systems like Oracle Identity Manager (OIM), generating reports that detail certification actions is a critical part of ensuring compliance. In this post, we'll demonstrate how to retrieve information about certifications handled by managers, enriched with data from the ",(0,t.jsx)(n.code,{children:"CERT_DEFN"})," table."]}),"\n",(0,t.jsx)(n.h2,{id:"scenario-overview",children:"Scenario Overview"}),"\n",(0,t.jsxs)(n.p,{children:["Our goal is to pull records for certifications processed in the last X days, where managers have taken some action on accounts or entitlements. We want to display not only the details of the certification and the actions taken but also information about the corresponding certification definition, as stored in the ",(0,t.jsx)(n.code,{children:"CERT_DEFN"})," table."]}),"\n",(0,t.jsx)(n.h2,{id:"key-data-points",children:"Key Data Points:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Certification Details"}),": ID, Certification Name, Creation Date."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Manager Details"}),": Username, Email."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Action Details"}),": Last decision made, Sign-off date."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User Details"}),": First name, Last name, Manager, Employee type."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Account Details"}),": Entitlement or account-related attribute value and glossary definition."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Certification Definition"}),": The name of the certification definition, which allows for grouping and analysis of related certifications."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sql-query-explanation",children:"SQL Query Explanation"}),"\n",(0,t.jsx)(n.p,{children:"To achieve this, we join the following tables:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"cert_certs"})," (CC)"]}),": This table holds the core certification details, including the certificate name and ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"CERT_LAST_DECISION"})," (CLD)"]}),": Stores the most recent actions taken by managers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"CERTS_USER"})," (CDU)"]}),": Contains user and manager details like usernames and email addresses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"CERTS_ACCOUNT"})," (CA)"]}),": Holds account-related information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"CERTS_ACCT_ENT_ASGN"})," (CAEA)"]}),": Stores additional account attributes, such as entitlement assignments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"CERT_DEFN"})," (CD)"]}),": We join this table to map each certification to its definition, using a case-insensitive ",(0,t.jsx)(n.code,{children:"LIKE"})," condition to match certificate names."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The updated query looks like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT DISTINCT\n    cc.ID AS ID, \n    cc.CREATEDATE, \n    cc.CERT_NAME AS CERT_NAME, \n    CDU.USERNAME AS MANAGER_USERNAME, \n    CDU.PRIMARYEMAIL AS MANAGER_EMAIL, \n    CLD.LAST_DECISION AS LAST_DECISION, \n    CLD.SIGN_OFF_DATE AS SIGN_OFF_DATE, \n    CDU.USERNAME AS USERNAME, \n    CDU.FIRSTNAME AS FIRSTNAME, \n    CDU.LASTNAME AS LASTNAME, \n    CDU.MIDDLENAME AS MIDDLENAME, \n    CDU.PRIMARYEMAIL AS PRIMARYEMAIL, \n    CDU.EMPLOYEETYPE AS EMPLOYEETYPE, \n    CDU.MANAGER AS MANAGER, \n    CAEA.ATTRIBUTE_VALUE AS ATTRIBUTE_VALUE, \n    CAEA.GLOSSARY_DEF AS GLOSSARY_DEF,\n    cd.cert_name AS CERT_DEFN_NAME \nFROM\n    cert_certs cc\nLEFT OUTER JOIN CERT_LAST_DECISION CLD\n    ON cc.ID = CLD.CERT_ID\nLEFT OUTER JOIN CERTS_USER CDU\n    ON CDU.IAM_USER_ID = CLD.IAM_USER_ID\nLEFT OUTER JOIN CERTS_ACCOUNT CA\n    ON CLD.IAM_ACCOUNT_ID = CA.IAM_ACCOUNT_ID\nLEFT OUTER JOIN CERTS_ACCT_ENT_ASGN CAEA\n    ON CLD.IAM_ATTR_VAL_ID = CAEA.IAM_ATTR_VAL_ID\nLEFT OUTER JOIN CERT_DEFN cd\n    ON UPPER(cc.CERT_NAME) LIKE '%' || UPPER(cd.cert_name) || '%' \nWHERE \n    cc.CREATEDATE > sysdate - 5\n    AND ATTRIBUTE_VALUE is not null\nORDER BY CERT_NAME;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"With this query, you can effectively generate detailed reports on certifications processed by managers, while also pulling in the certification definition name for added clarity and analysis. This approach can help compliance teams understand trends in certification handling and ensure that certification processes align with organizational policies."}),"\n",(0,t.jsxs)(n.p,{children:["By joining with the ",(0,t.jsx)(n.code,{children:"CERT_DEFN"})," table, the query allows you to group certifications by definition, which can help in auditing and monitoring certification campaigns."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);