"use strict";(self.webpackChunkiam=self.webpackChunkiam||[]).push([[53],{2318:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(4848),t=i(8453);const s={layout:"post",title:"Integrating SailPoint with CyberArk Using SCIM Server Without AIM Credential Provider"},l=void 0,o={permalink:"/iam/blog/2024/09/19/Sailpoint-CyberArk-Integration",source:"@site/blog/2024-09-19-Sailpoint-CyberArk-Integration.md",title:"Integrating SailPoint with CyberArk Using SCIM Server Without AIM Credential Provider",description:"Introduction",date:"2024-09-19T00:00:00.000Z",tags:[],readingTime:3.215,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Integrating SailPoint with CyberArk Using SCIM Server Without AIM Credential Provider"},unlisted:!1,prevItem:{title:"CyberArk SCIM Server Authentication Using Credential Files",permalink:"/iam/blog/2024/09/19/CyberArk SCIM Server Authentication Using Credential Files"},nextItem:{title:"Configuring a Private Server for IdentityIQ's Microsoft Teams Service Code",permalink:"/iam/blog/2024/07/22/sailpoint-teams-integration"}},a={authorsImageUrls:[]},c=[{value:"Introduction",id:"introduction",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"CyberArk Requirements:",id:"cyberark-requirements",level:4},{value:"SailPoint Requirements:",id:"sailpoint-requirements",level:4},{value:"System Requirements:",id:"system-requirements",level:4},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:3},{value:"1. <strong>Download and Set Up SCIM Server</strong>",id:"1-download-and-set-up-scim-server",level:4},{value:"2. <strong>Install Java</strong>",id:"2-install-java",level:4},{value:"3. <strong>Pre-installation Configuration</strong>",id:"3-pre-installation-configuration",level:4},{value:"4. <strong>Install and Configure SCIM Server</strong>",id:"4-install-and-configure-scim-server",level:4},{value:"5. <strong>Configure SailPoint to Communicate with SCIM Server</strong>",id:"5-configure-sailpoint-to-communicate-with-scim-server",level:4},{value:"6. <strong>Testing the SCIM Server</strong>",id:"6-testing-the-scim-server",level:4},{value:"7. <strong>Configure OAuth for Secure Authentication (Optional)</strong>",id:"7-configure-oauth-for-secure-authentication-optional",level:4},{value:"Conclusion",id:"conclusion",level:3},{value:"Additional Resources",id:"additional-resources",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Integrating SailPoint with CyberArk allows for streamlined identity governance and privileged access management (PAM). With CyberArk's SCIM (System for Cross-domain Identity Management) server, organizations can manage privileged accounts and users in SailPoint without relying on the AIM Credential Provider. This post will walk you through the steps of setting up a SailPoint-CyberArk integration using the SCIM server, enabling you to query, modify, and manage privileged data without the AIM Credential Provider."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before starting the integration, ensure the following components are installed:"}),"\n",(0,r.jsx)(n.h4,{id:"cyberark-requirements",children:"CyberArk Requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CyberArk SCIM Server v1.3.5 or above"}),"\n",(0,r.jsx)(n.li,{children:"CyberArk Vault (with PACLI for querying and managing privileged data)"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"sailpoint-requirements",children:"SailPoint Requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SailPoint IdentityIQ v7.1 patch 2 or above"}),"\n",(0,r.jsx)(n.li,{children:"SailPoint PAM Module"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"system-requirements",children:"System Requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Windows Server 2016 or 2019"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Java Version 1.8 (64-bit OpenJDK recommended)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"8-core Processor, 32 GB RAM"})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),"\n",(0,r.jsxs)(n.h4,{id:"1-download-and-set-up-scim-server",children:["1. ",(0,r.jsx)(n.strong,{children:"Download and Set Up SCIM Server"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Download the CyberArk SCIM distribution from the CyberArk Marketplace."}),"\n",(0,r.jsxs)(n.li,{children:["Extract the contents from the zip file and move the ",(0,r.jsx)(n.code,{children:"CyberArk-SCIM"})," folder to your ",(0,r.jsx)(n.code,{children:"C:\\"})," drive."]}),"\n",(0,r.jsxs)(n.li,{children:["Verify that the folder contains essential files:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"CAScimServer-<version>.jar"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"PACLI"})}),"\n",(0,r.jsxs)(n.li,{children:["Configuration files (e.g., ",(0,r.jsx)(n.code,{children:"config.yml"}),", ",(0,r.jsx)(n.code,{children:"globalConfig.yml"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"2-install-java",children:["2. ",(0,r.jsx)(n.strong,{children:"Install Java"})]}),"\n",(0,r.jsx)(n.p,{children:"SCIM server requires Java to function. Follow these steps to install and configure Java:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download Java 1.8 (64-bit version) from ",(0,r.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase-downloads.html",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["After installing Java, set the ",(0,r.jsx)(n.code,{children:"%JAVA_HOME%"})," environment variable:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.strong,{children:"System Properties > Advanced > Environment Variables"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"C:\\Program Files\\Java\\bin"})," to the system's path."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"3-pre-installation-configuration",children:["3. ",(0,r.jsx)(n.strong,{children:"Pre-installation Configuration"})]}),"\n",(0,r.jsx)(n.p,{children:"Before proceeding with the SCIM installation, configure the environment variables and ensure system readiness:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Configure PACLI Path"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the system environment variables, append the PACLI path to the system's ",(0,r.jsx)(n.code,{children:"Path"})," variable: ",(0,r.jsx)(n.code,{children:"C:\\CyberArk-SCIM\\PACLI"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Enable CyberArk Vault Platform"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Log in to the CyberArk PVWA as an admin."}),"\n",(0,r.jsxs)(n.li,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"Administration > Platform Management"})," and activate the CyberArk Vault platform."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"4-install-and-configure-scim-server",children:["4. ",(0,r.jsx)(n.strong,{children:"Install and Configure SCIM Server"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open a command prompt as an administrator and navigate to the ",(0,r.jsx)(n.code,{children:"C:\\CyberArk-SCIM"})," directory."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the SCIM installation command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"SCIMInstaller.exe -SailPoint\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": The ",(0,r.jsx)(n.code,{children:"-SailPoint"})," flag is case-sensitive."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Follow the installation prompts, including entering the necessary Vault and SCIM configuration parameters from your pre-installation checklist."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"5-configure-sailpoint-to-communicate-with-scim-server",children:["5. ",(0,r.jsx)(n.strong,{children:"Configure SailPoint to Communicate with SCIM Server"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a privileged account in the CyberArk Vault for SailPoint integration."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This account will be used by SailPoint to authenticate against the CyberArk SCIM server."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the ",(0,r.jsx)(n.code,{children:"globalConfig.yml"})," in the CyberArk-SCIM folder to reflect the SailPoint-specific configurations."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In SailPoint, configure a new CyberArk application in ",(0,r.jsx)(n.strong,{children:"IdentityIQ"})," using the following information:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SCIM Server URL"}),": ",(0,r.jsx)(n.code,{children:"http://<SCIM_Server_IP>:8080/CyberArk/scim/v2/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentication"}),": Use basic authentication with the SailPoint-user account created in CyberArk."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"6-testing-the-scim-server",children:["6. ",(0,r.jsx)(n.strong,{children:"Testing the SCIM Server"})]}),"\n",(0,r.jsx)(n.p,{children:"Test the SCIM server by accessing the Swagger UI:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open a browser and navigate to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"http://<SCIM_Server_IP>:8080/swagger\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Test basic SCIM operations, such as querying users and groups, to ensure the server is operational and configured correctly."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Alternatively, use the following ",(0,r.jsx)(n.code,{children:"curl"})," command to test connectivity:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -u SailPoint-user:<password> http://<SCIM_SERVER_IP>:8080/CyberArk/scim/v2/ResourceTypes\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"7-configure-oauth-for-secure-authentication-optional",children:["7. ",(0,r.jsx)(n.strong,{children:"Configure OAuth for Secure Authentication (Optional)"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to integrate OAuth for additional security, configure it in the ",(0,r.jsx)(n.code,{children:"globalConfig.yml"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In SailPoint, generate the required client ID and secret for OAuth authentication."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Update the ",(0,r.jsx)(n.code,{children:"globalConfig.yml"})," with your OAuth provider's details (e.g., Azure AD or Okta):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'oauth2:\r\n  jwksURI: "https://login.microsoftonline.com/<tenant-id>/discovery/v2.0/keys"\r\n  issuer: "https://login.microsoftonline.com/<tenant-id>/v2.0"\r\n  usernameField: "preferred_username"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restart the SCIM server to apply the changes."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"By following these steps, you can integrate SailPoint IdentityIQ with CyberArk using the SCIM server without relying on the AIM Credential Provider. This setup allows you to manage privileged accounts and users seamlessly through SailPoint's PAM module, ensuring secure and efficient access management."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://cyberark.com",children:"CyberArk SCIM Server Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://sailpoint.com",children:"SailPoint IdentityIQ PAM Integration Guide"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);