"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2340],{9776:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=i(4848),n=i(8453);const a={sidebar_position:3},r="Offer Microservice",o={id:"milestones/MS3 - Construction/offer_microservice",title:"Offer Microservice",description:"Introduction",source:"@site/docs/milestones/MS3 - Construction/offer_microservice.md",sourceDirName:"milestones/MS3 - Construction",slug:"/milestones/MS3 - Construction/offer_microservice",permalink:"/microsite/docs/milestones/MS3 - Construction/offer_microservice",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"User Microservice",permalink:"/microsite/docs/milestones/MS3 - Construction/user_microservice"},next:{title:"Monitor Microservice",permalink:"/microsite/docs/milestones/MS3 - Construction/monitor_microservice"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Auto-tagging",id:"auto-tagging",level:2},{value:"Feedback Analysis with Vader Sentiment Analysis",id:"feedback-analysis-with-vader-sentiment-analysis",level:2},{value:"API Endpoints",id:"api-endpoints",level:2}];function l(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"offer-microservice",children:"Offer Microservice"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"This microservice is responsible for managing offers, including attractions, accommodations, and activities. It handles offer creation, modification, and deletion, as well as database opera- tions related to offers. Interacts with the User Interface microservice to display offers to users and receive user feedback and communicates with other microservices via RabbitMQ. It was also implemented using FastAPI and PostgreSQL for the database. In this microservice there is also a module for auto-tagging and retrieving feedback from users."}),"\n",(0,s.jsx)(t.h2,{id:"auto-tagging",children:"Auto-tagging"}),"\n",(0,s.jsx)(t.p,{children:"Auto-Tagging plays a crucial role in enhancing the functionality and us- ability of the system by automatically assigning tags to offers based on their content. This process leverages advanced natural language processing (NLP) techniques to extract rele- vant keywords and phrases from offer descriptions and then categorize them into predefined tags. These tags serve multiple purposes, including improving search functionality, enhancing recommendation accuracy, and providing additional information to users about the offers."}),"\n",(0,s.jsx)(t.p,{children:"The heart of the Auto-Tagging system lies in its interaction with the Offer microservice, where it updates offer tags and ensures consistency across the platform. This integration en- ables the system to efficiently manage and organize a large volume of offers while maintaining accuracy and relevance."}),"\n",(0,s.jsx)(t.p,{children:"For the task of auto-tagging, the system utilizes Facebook\u2019s NLI-based Zero-Shot Text Classification Model, powered by the BART (Bidirectional and Auto-Regressive Trans- formers) architecture. BART is a state-of-the-art pretrained model that has been specifically designed for various natural language processing tasks, including natural language inference (NLI). In this context, text classification is achieved by pairing a document (offer description) with a potential label (tag) and feeding it into the NLI model. The label serves as the hypoth- esis, while the text to be classified acts as the premise. The model then evaluates whether the label accurately represents the content of the text."}),"\n",(0,s.jsx)(t.p,{children:"One of the primary advantages of this approach is its ability to handle zero-shot learning, meaning it can classify texts into categories that were not explicitly seen during the model\u2019s training phase. This flexibility is invaluable in real-world scenarios where new categories may emerge or existing ones may evolve over time. It empowers the system to adapt seamlessly to changing requirements and ensures that it remains agile and responsive to user needs."}),"\n",(0,s.jsx)(t.p,{children:"The predefined tags used for categorizing offers encompass a wide range of categories that are pertinent to tourism and hospitality. These include:\nThese tags have been carefully selected to cover diverse aspects of travel and leisure ex- periences, enabling the system to comprehensively categorize offers and facilitate seamless user navigation and searchability. By leveraging these tags, the system can deliver more pre- cise and relevant recommendations to users, thereby enriching their overall experience and satisfaction."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accommodation"}),(0,s.jsx)("td",{children:"Sports"}),(0,s.jsx)("td",{children:"Adventure"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Food"}),(0,s.jsx)("td",{children:"Wellness"}),(0,s.jsx)("td",{children:"Transportation"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Drinks"}),(0,s.jsx)("td",{children:"Cafe"}),(0,s.jsx)("td",{children:"Games"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"feedback-analysis-with-vader-sentiment-analysis",children:"Feedback Analysis with Vader Sentiment Analysis"}),"\n",(0,s.jsx)(t.p,{children:"Feedback Analysis, powered by Vader Sentiment Analysis, is a critical component of the system responsible for compre- hensively understanding user sentiments expressed in their feedback. Leveraging advanced natural language processing techniques, this module meticulously scrutinizes user reviews to discern the underlying sentiments\u2014whether positive, negative, or neutral\u2014embedded within the text."}),"\n",(0,s.jsx)(t.p,{children:"Vader (Valence Aware Dictionary and Sentiment Reasoner) stands out as a powerful rule- based sentiment analysis tool specifically tailored for analyzing social media texts. Unlike traditional sentiment analysis methods, Vader is adept at capturing the nuanced sentiment nuances prevalent in user-generated content, making it well-suited for analyzing feedback within our platform context."}),"\n",(0,s.jsx)(t.p,{children:"The essence of Vader lies in its pre-trained sentiment analysis model, which furnishes sentiment scores indicative of the polarity of the expressed sentiment in the text. These sentiment scores are derived from a meticulously curated dictionary of words and associated valence scores, ranging from -4 (most negative) to +4 (most positive). Additionally, Vader takes into account the intensity of sentiment, factoring in cues such as capitalization and punctuation, which can amplify or attenuate the perceived sentiment intensity."}),"\n",(0,s.jsx)(t.p,{children:"Through the systematic application of Vader Sentiment Analysis, the system is adept at distilling rich sentiment insights from user feedback, thereby enabling a granular understand- ing of user satisfaction levels and sentiment trends associated with various offers."}),"\n",(0,s.jsx)(t.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Offer API",src:i(3182).A+"",width:"2780",height:"976"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Offer API",src:i(8933).A+"",width:"2772",height:"482"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Offer API",src:i(3020).A+"",width:"2784",height:"468"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Offer API",src:i(2915).A+"",width:"2784",height:"588"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Offer API",src:i(5162).A+"",width:"2778",height:"472"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Offer API",src:i(9921).A+"",width:"2782",height:"466"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Offer API",src:i(6056).A+"",width:"2778",height:"592"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3182:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/offer_api_1-87f94937d25e0b49d17413a242a2ef0a.png"},8933:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/offer_api_2-15b995603bc0c98745f877d919cb1992.png"},3020:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/offer_api_3-e2a499ff30cf92bfe73aa6133c965c3e.png"},2915:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/offer_api_4-3f32f7a3dc9faadd5dfffd1a060f0643.png"},5162:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/offer_api_5-9c3f7e028a6462af7aafdf4636b2a67b.png"},9921:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/offer_api_6-bb20f2b4ae46a8bde97ab070356e3a80.png"},6056:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/offer_api_7-e5ef9b5609b05b1613935b3bf0b68909.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var s=i(6540);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);