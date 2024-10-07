"use strict";(self.webpackChunkiam=self.webpackChunkiam||[]).push([[5626],{3120:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(4848),s=i(8453);const o={layout:"post",title:"Identity Model in IdentityIQ"},r=void 0,a={permalink:"/iam/blog/2024/09/20/iiq-identity-model",source:"@site/blog/2024-09-20-iiq-identity-model.md",title:"Identity Model in IdentityIQ",description:"Discussion on Identity Model",date:"2024-09-20T00:00:00.000Z",tags:[],readingTime:3.64,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Identity Model in IdentityIQ"},unlisted:!1,prevItem:{title:"first-post",permalink:"/iam/blog/first-post"},nextItem:{title:"CyberArk SCIM Server Authentication Using Credential Files",permalink:"/iam/blog/2024/09/19/CyberArk SCIM Server Authentication Using Credential Files"}},d={authorsImageUrls:[]},l=[{value:"Discussion on Identity Model",id:"discussion-on-identity-model",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"discussion-on-identity-model",children:"Discussion on Identity Model"}),"\n",(0,n.jsxs)(t.p,{children:["The sources offer a detailed look at the ",(0,n.jsx)(t.strong,{children:"Identity Model"})," within IdentityIQ, a pre-built structure that simplifies how workflows interact with identity data, particularly in forms. Let's explore its significance, structure, and usage."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Why is the Identity Model important?"})}),"\n",(0,n.jsx)(t.p,{children:"Workflows in IdentityIQ often revolve around making changes to identities. Before the Identity Model, managing identity data within workflows, especially when using forms, was cumbersome. Each attribute required separate handling:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Defining individual business process variables for each attribute."}),"\n",(0,n.jsx)(t.li,{children:"Passing each variable to and from the approval workflow."}),"\n",(0,n.jsx)(t.li,{children:"Defining each variable as a form argument."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This approach led to complexity and increased the potential for errors."}),"\n",(0,n.jsx)(t.p,{children:"The Identity Model solves these problems by representing the entire Identity as a single, manageable unit within a workflow. It acts as a container holding all relevant identity data, streamlining how workflows interact with this data, particularly in forms."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"How does the Identity Model work?"})}),"\n",(0,n.jsxs)(t.p,{children:["The Identity Model is essentially a map (a collection of key-value pairs) populated with various identity attributes and related information. You can access this model within workflows through a dedicated library method called ",(0,n.jsx)(t.code,{children:"getIdentityModel"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"What are the key components of the Identity Model?"})}),"\n",(0,n.jsx)(t.p,{children:"The Identity Model includes a comprehensive set of entries representing various facets of an identity:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Standard and Extended Identity Attributes:"}),"  This includes all basic identity attributes like first name, last name, email, manager, etc., along with any custom extended attributes defined in your IdentityIQ installation. Most are stored as strings, with multi-valued attributes represented as lists."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Role Information:"})," Includes lists for both ",(0,n.jsx)(t.code,{children:"detectedRoles"})," and ",(0,n.jsx)(t.code,{children:"assignedRoles"}),", providing insights into the roles associated with the identity."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Manager Details:"})," Stores the manager's name as a string and provides a separate ",(0,n.jsx)(t.code,{children:"info map"})," with additional manager information, including their ID, name, and display name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Time-Related Data:"})," Includes dates for ",(0,n.jsx)(t.code,{children:"lastRefresh"}),", ",(0,n.jsx)(t.code,{children:"lastLogin"}),", and ",(0,n.jsx)(t.code,{children:"passwordExpiration"}),", offering temporal context to the identity's activity."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Flags and Status Information:"})," Contains boolean flags like ",(0,n.jsx)(t.code,{children:"isWorkgroup"}),", ",(0,n.jsx)(t.code,{children:"managerStatus"}),", ",(0,n.jsx)(t.code,{children:"correlated"}),", and ",(0,n.jsx)(t.code,{children:"correlatedOverriden"}),", along with information about assigned scopes and transformer options."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Object Class Information:"})," Stores the class of the object (",(0,n.jsx)(t.code,{children:"sailpoint.object.Identity"}),") and the transformer class (",(0,n.jsx)(t.code,{children:"sailpoint.transformer.IdentityTransformer"}),") used for data manipulation."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"How do I use the Identity Model in my workflows?"})}),"\n",(0,n.jsx)(t.p,{children:"Here's a step-by-step guide on utilizing the Identity Model:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Define Process Variable:"})," Create a process variable within your workflow (e.g., ",(0,n.jsx)(t.code,{children:"identityModel"}),") to store the Identity Model."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Initialize and Populate:"})," In an early workflow step, call the ",(0,n.jsx)(t.code,{children:"getIdentityModel"})," method from the ",(0,n.jsx)(t.code,{children:"IdentityLibrary"})," to initialize and populate the ",(0,n.jsx)(t.code,{children:"identityModel"})," variable. You can pass an identity name or ID as an argument to pre-populate the model with existing identity data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Link to Form:"})," In the approval step containing your form, create an argument (e.g., ",(0,n.jsx)(t.code,{children:"workItemFormBasePath"}),") and set its value to the ",(0,n.jsx)(t.code,{children:"identityModel"})," variable. This creates a bridge between the form and the Identity Model, allowing data exchange."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Reference Attributes:"})," Within the form, directly reference attributes from the ",(0,n.jsx)(t.code,{children:"identityModel"}),' as if they were individual variables (e.g., use "firstname" instead of "identityModel.firstname").']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Process Changes:"})," After form submission, utilize the ",(0,n.jsx)(t.code,{children:"buildPlanFromIdentityModel()"})," method to compare the initial and modified versions of the ",(0,n.jsx)(t.code,{children:"identityModel"}),", identifying differences and automatically generating a provisioning plan to implement changes."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsxs)(t.p,{children:["Consider a scenario where a workflow form needs to display and allow editing of ten identity attributes. Without the Identity Model, you would manage ten separate variables. The Identity Model simplifies this by storing all attributes within a single ",(0,n.jsx)(t.code,{children:"identityModel"})," variable. When the form loads, it accesses and displays these attributes. After the user edits and submits the form, the workflow compares the updated ",(0,n.jsx)(t.code,{children:"identityModel"})," with its original state and provisions any necessary changes to the identity object. This streamlined process reduces complexity and potential errors."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Additional Notes:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"While the sources focus on the Identity Model's role in workflows and forms, its utility may extend to other areas where streamlined identity data management is beneficial."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The sources provide a basic outline and usage pattern for the Identity Model. Further customization and advanced implementations might require deeper exploration of IdentityIQ's API documentation and potentially involve custom coding."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"By incorporating the Identity Model, IdentityIQ empowers organizations to handle identity data within workflows more efficiently, especially when forms are involved. It reduces the complexity of managing individual attributes, simplifies form interactions, and ultimately leads to a more robust and maintainable identity management system."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);