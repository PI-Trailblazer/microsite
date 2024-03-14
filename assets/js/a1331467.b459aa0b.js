"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[181],{9870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=n(4848),s=n(8453);const a={sidebar_position:6},o="Architecture",r={id:"milestones/MS2 - Elaboration Phase/architecture",title:"Architecture",description:"Architecture",source:"@site/docs/milestones/MS2 - Elaboration Phase/architecture.md",sourceDirName:"milestones/MS2 - Elaboration Phase",slug:"/milestones/MS2 - Elaboration Phase/architecture",permalink:"/microsite/docs/milestones/MS2 - Elaboration Phase/architecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"Use Cases",permalink:"/microsite/docs/milestones/MS2 - Elaboration Phase/use_cases"},next:{title:"Data Domain Model",permalink:"/microsite/docs/milestones/MS2 - Elaboration Phase/data_domain_model"}},c={},h=[];function d(e){const t={h1:"h1",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Architecture",src:n(2564).A+"",width:"1391",height:"657"})}),"\n",(0,i.jsx)(t.p,{children:"The system in question has two fundamental aspects: one focused on the client-side and another related to data management. The choice of a microservices-based architecture was motivated by the pursuit of independence among various parts of the system, aiming to improve modularity and potential scalability."}),"\n",(0,i.jsx)(t.p,{children:"In the Presentation Layer, only the User Interface microservice is found, responsible for the system's interaction with the user. This microservice facilitates authentication through an external service and forwards various requests to the next layer."}),"\n",(0,i.jsx)(t.p,{children:"Next, we have the Business Layer, where communication with the previous layer is mediated by a Reverse Proxy. This approach allows the implementation of Load Balancing, enhancing scalability, and reinforcing security since no service is directly exposed to the client."}),"\n",(0,i.jsx)(t.p,{children:"Within the Business Layer, various specialized microservices operate. The User CRUD manages all operations in the user database. In turn, the Feedback, Offer CRUD, and Tagging microservices are responsible for auto-tagging offers, database operations, and generating ratings based on user reviews of these offers. The Monitoring and Predictor handle the monitoring of all existing data and the prediction of the same, while the Payment takes care of payment processing using an external service. The Recommender is responsible for providing personalized recommendations to users."}),"\n",(0,i.jsx)(t.p,{children:"To conclude, a Message Queue has been implemented to promote interaction between the various microservices, ensuring complete independence among them. This approach facilitates communication and collaboration among different components of the system, contributing to a flexible architecture adaptable to project needs."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2564:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/architecture-88d7a44eb49a90042e191aeb49a504d1.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);