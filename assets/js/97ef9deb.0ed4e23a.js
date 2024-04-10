"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5208],{2445:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=i(4848),n=i(8453);const r={slug:"Sprint 5",title:"Sprint 5",authors:["andre"]},d="Sprint 1",l={permalink:"/microsite/blog/Sprint 5",source:"@site/blog/2024-03-28-sprint_5/sprint_5.md",title:"Sprint 5",description:"From: 2024-03-28",date:"2024-03-28T00:00:00.000Z",formattedDate:"March 28, 2024",tags:[],readingTime:4.185,hasTruncateMarker:!1,authors:[{name:"Andr\xe9 Oliveira",url:"https://github.com/andreaoliveira9",imageURL:"https://github.com/andreaoliveira9.png",key:"andre"}],frontMatter:{slug:"Sprint 5",title:"Sprint 5",authors:["andre"]},unlisted:!1,prevItem:{title:"Sprint 6",permalink:"/microsite/blog/Sprint 6"},nextItem:{title:"Sprint 4",permalink:"/microsite/blog/Sprint 4"}},c={authorsImageUrls:[void 0]},a=[{value:"Sprint Goal",id:"sprint-goal",level:2},{value:"Sprint Backlog",id:"sprint-backlog",level:2},{value:"Task Status (Completed/Not Completed)",id:"task-status-completednot-completed",level:3},{value:"Sprint Review",id:"sprint-review",level:2},{value:"Sprint Retrospective",id:"sprint-retrospective",level:2},{value:"Sprint Burnup Chart",id:"sprint-burnup-chart",level:2}];function o(e){const t={h2:"h2",h3:"h3",img:"img",input:"input",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"From"}),": 2024-03-28"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To"}),": 2024-04-04"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Scrum Master"}),": Duarte Cruz"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Product Owner"}),": Bernardo Figueiredo"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Developers"}),": Andr\xe9 Oliveira, Alexandre Cotorobai, Joaquim Rosa, Duarte Cruz"]}),"\n",(0,s.jsx)(t.h2,{id:"sprint-goal",children:"Sprint Goal"}),"\n",(0,s.jsx)(t.p,{children:"In this sprint, we continued with the implementation of our project code, taking into account the feedback received from the previous sprint. We focused on the implementation of the offer_microservice and recommender_microservice, as well as the integration of the RabbitMQ message queue system. We also worked on the frontend, creating the front page and the navbar, and updating the login and register pages. We also worked on the implementation of the offer list and offer details pages."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Authentication - Clean Code"}),"\n",(0,s.jsx)(t.li,{children:"Function to receive new offers on recommender by rabbitMQ"}),"\n",(0,s.jsx)(t.li,{children:"Implement Offer GET/PUT Endpoints in Offer CRUD Microservice"}),"\n",(0,s.jsx)(t.li,{children:"Create suplementary CRUDs and Offer Endpoints"}),"\n",(0,s.jsx)(t.li,{children:"Update Sprint4 Microsite"}),"\n",(0,s.jsx)(t.li,{children:"Create Queue in RabbitMQ to add new offers to elastic search and add them"}),"\n",(0,s.jsx)(t.li,{children:"Update relevance score in ES recommender when a offer is bought"}),"\n",(0,s.jsx)(t.li,{children:"Create List of Offers Page"}),"\n",(0,s.jsx)(t.li,{children:"Add RabbitMQ Messaging in Offer Creation"}),"\n",(0,s.jsx)(t.li,{children:"Little Visual Update on Login/Registers Page"}),"\n",(0,s.jsx)(t.li,{children:"Fix Microservice dockerfiles"}),"\n",(0,s.jsx)(t.li,{children:"Update APIs to use cors"}),"\n",(0,s.jsx)(t.li,{children:"Create Offer Details Page"}),"\n",(0,s.jsx)(t.li,{children:"Add Offer List Endpoints"}),"\n",(0,s.jsx)(t.li,{children:"Implement message queue to delete offers on recommender"}),"\n",(0,s.jsx)(t.li,{children:"Add Offer Details Endpoints"}),"\n",(0,s.jsx)(t.li,{children:"Add Front Page Endpoints"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Expected"}),(0,s.jsx)(t.th,{children:"Quantity"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tasks"}),(0,s.jsx)(t.td,{children:"17"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Epics"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Story Points"}),(0,s.jsx)(t.td,{children:"51"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"sprint-backlog",children:"Sprint Backlog"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Task (Trail-*)"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Developer"}),(0,s.jsx)(t.th,{children:"State"}),(0,s.jsx)(t.th,{children:"Story Points"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TRAIL-32"}),(0,s.jsx)(t.td,{children:"Authentication - Clean Code"}),(0,s.jsx)(t.td,{children:"Bernardo Figueiredo"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-44"}),(0,s.jsx)(t.td,{children:"Function to receive new offers on recommender by rabbitMQ"}),(0,s.jsx)(t.td,{children:"Andr\xe9 Oliveira"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TRAIL-37"}),(0,s.jsx)(t.td,{children:"Implement Offer GET/PUT Endpoints in Offer CRUD Microservice"}),(0,s.jsx)(t.td,{children:"Joaquim Rosa"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-45"}),(0,s.jsx)(t.td,{children:"Create suplementary CRUDs and Offer Endpoints"}),(0,s.jsx)(t.td,{children:"Alexandre Cotorobai"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-46"}),(0,s.jsx)(t.td,{children:"Update Sprint4 Microsite"}),(0,s.jsx)(t.td,{children:"Andr\xe9 Oliveira"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-47"}),(0,s.jsx)(t.td,{children:"Create Queue in RabbitMQ to add new offers to elastic search and add them"}),(0,s.jsx)(t.td,{children:"Duarte Cruz"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-48"}),(0,s.jsx)(t.td,{children:"Update relevance score in ES recommender when a offer is bought"}),(0,s.jsx)(t.td,{children:"Duarte Cruz"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-49"}),(0,s.jsx)(t.td,{children:"Create List of Offers Page"}),(0,s.jsx)(t.td,{children:"Hugo Correia"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"7"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-51"}),(0,s.jsx)(t.td,{children:"Add RabbitMQ Messaging in Offer Creation"}),(0,s.jsx)(t.td,{children:"Joaquim Rosa"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-52"}),(0,s.jsx)(t.td,{children:"Little Visual Update on Login/Registers Page"}),(0,s.jsx)(t.td,{children:"Hugo Correia"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-53"}),(0,s.jsx)(t.td,{children:"Fix Microservice dockerfiles"}),(0,s.jsx)(t.td,{children:"Bernardo Figueiredo"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-54"}),(0,s.jsx)(t.td,{children:"Update APIs to use cors"}),(0,s.jsx)(t.td,{children:"Bernardo Figueiredo"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-55"}),(0,s.jsx)(t.td,{children:"Create Offer Details Page"}),(0,s.jsx)(t.td,{children:"Hugo Correia"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"7"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-56"}),(0,s.jsx)(t.td,{children:"Add Offer List Endpoints"}),(0,s.jsx)(t.td,{children:"Hugo Correia"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-58"}),(0,s.jsx)(t.td,{children:"Implement message queue to delete offers on recommender"}),(0,s.jsx)(t.td,{children:"Duarte Cruz"}),(0,s.jsx)(t.td,{children:"Done"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-57"}),(0,s.jsx)(t.td,{children:"Add Offer Details Endpoints"}),(0,s.jsx)(t.td,{children:"Hugo Correia"}),(0,s.jsx)(t.td,{children:"Not Done"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trail-50"}),(0,s.jsx)(t.td,{children:"Add Front Page Endpoints"}),(0,s.jsx)(t.td,{children:"Hugo Correia"}),(0,s.jsx)(t.td,{children:"Not Done"}),(0,s.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"task-status-completednot-completed",children:"Task Status (Completed/Not Completed)"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-32 Authentication - Clean Code"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-44 Function to receive new offers on recommender by rabbitMQ"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-37 Implement Offer GET/PUT Endpoints in Offer CRUD Microservice"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-45 Create suplementary CRUDs and Offer Endpoints"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-46 Update Sprint4 Microsite"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-47 Create Queue in RabbitMQ to add new offers to elastic search and add them"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-48 Update relevance score in ES recommender when a offer is bought"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-49 Create List of Offers Page"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-51 Add RabbitMQ Messaging in Offer Creation"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-52 Little Visual Update on Login/Registers Page"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-53 Fix Microservice dockerfiles"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-54 Update APIs to use cors"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-55 Create Offer Details Page"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-56 Add Offer List Endpoints"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","TRAIL-58 Implement message queue to delete offers on recommender"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","TRAIL-57 Add Offer Details Endpoints"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","TRAIL-50 Add Front Page Endpoints"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"sprint-review",children:"Sprint Review"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Completed"}),(0,s.jsx)(t.th,{children:"Quantity"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tasks"}),(0,s.jsx)(t.td,{children:"15"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Epics"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Story Points"}),(0,s.jsx)(t.td,{children:"46"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"sprint-retrospective",children:"Sprint Retrospective"}),"\n",(0,s.jsx)(t.p,{children:"In this sprint, we managed to complete 15 out of 17 tasks, which is a good result. We managed to complete the implementation of the offer_microservice and recommender_microservice, as well as the integration of the RabbitMQ message queue system. We have completed all the tasks that was planned for this sprint, except for two additional tasks that were added and were not part of the goals of this sprint."}),"\n",(0,s.jsx)(t.h2,{id:"sprint-burnup-chart",children:"Sprint Burnup Chart"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Burndown Chart",src:i(9654).A+"",width:"2226",height:"1046"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9654:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/burndown_chart_sprint_5-6074848fdcf0848c50141d00c5be9d3b.png"},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>l});var s=i(6540);const n={},r=s.createContext(n);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);