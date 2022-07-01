__NUXT_JSONP__("/solutions/ci-cd-like-ac-dc-rock-n-roll-with-continuous-integration-and-continuous-delivery", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an){R[0]={id:S,depth:d,text:U};R[1]={id:V,depth:b,text:X};R[2]={id:Y,depth:b,text:Z};R[3]={id:_,depth:d,text:$};R[4]={id:aa,depth:b,text:ab};R[5]={id:ac,depth:b,text:ad};R[6]={id:ae,depth:b,text:aj};R[7]={id:ak,depth:d,text:al};R[8]={id:y,depth:b,text:z};R[9]={id:A,depth:b,text:B};R[10]={id:C,depth:b,text:D};R[11]={id:E,depth:b,text:F};R[12]={id:G,depth:b,text:H};R[13]={id:x,depth:d,text:J};R[14]={id:K,depth:b,text:L};R[15]={id:M,depth:b,text:N};R[16]={id:O,depth:b,text:P};R[17]={id:u,depth:d,text:v};return {data:[{}],fetch:[{page:{tags:["cicd","ci","cd",T],related_content:[],title:I,short_title:w,header_one:w,header_two:W,icon:Q,cta_header:"Have any questions about CI\u002FCD?",toc:R,body:{type:"root",children:[{type:a,tag:t,props:{id:S},children:[{type:a,tag:e,props:{href:"#what-is-cicd",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:U}]},{type:a,tag:i,props:{},children:[{type:c,value:"CI\u002FCD is an abbreviation for Continuous Integration and Continuous Delivery. It’s a process of delivering your code continuously using an automated pipeline as opposed to doing a manual one "},{type:a,tag:e,props:{href:"https:\u002F\u002Fsvpg.com\u002Fbig-bang-releases\u002F",rel:[o,p,q],target:r,title:"Big bang deployment overview"},children:[{type:c,value:"big bang"}]},{type:c,value:" waterfall deployment."}]},{type:a,tag:m,props:{id:V},children:[{type:a,tag:e,props:{href:"#continuous-integration",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:X}]},{type:a,tag:i,props:{},children:[{type:c,value:"Most of the software teams use a source control system like Git. We’ve several different branching strategies like "},{type:a,tag:e,props:{href:af,rel:[o,p,q],target:r,title:"Git flow branching strategy"},children:[{type:c,value:ag}]},{type:c,value:". All of the strategies have one thing in common. There is a single mainline development branch. Each developer creates his\u002Fher own branch of the mainline and works independently on a feature. Once the feature is ready, the code is reviewed and merged back to the mainline."}]},{type:a,tag:m,props:{id:Y},children:[{type:a,tag:e,props:{href:"#continuous-delivery",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:Z}]},{type:a,tag:i,props:{},children:[{type:c,value:"Now that the code is merged into the mainline, we need to go through the rest of the steps like deploying it, doing QA, and eventually, pushing the new code to production to serve some real users. Each step involves some build process that has to happen to build, test, and deliver the code to the right place. This is where an automated pipeline comes into play where each step is automated following some established conventions everyone on the team follows."}]},{type:a,tag:t,props:{id:_},children:[{type:a,tag:e,props:{href:"#advantages-of-using-cicd",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:$}]},{type:a,tag:m,props:{id:aa},children:[{type:a,tag:e,props:{href:"#speed",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:ab}]},{type:a,tag:i,props:{},children:[{type:c,value:"The main advantage of CI\u002FCD is the increase in velocity. Once you have the process and the pipeline in place, you’ll be able to ship your changes faster. As with any process, it’s just more efficient to do the same steps over and over again rather than shipping changes ad-hoc differently each time. It removes the need for extra communication between the team members and between different teams. Everyone follows the same process. Developers know where to merge to code. QA team knows where to get a new build to test. It’s clear how to deploy to each environment including production and how to troubleshoot some issues."}]},{type:a,tag:m,props:{id:ac},children:[{type:a,tag:e,props:{href:"#quality",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:ad}]},{type:a,tag:i,props:{},children:[{type:c,value:"CI\u002FCD brings some automation allowing you to take advantage of automated tests, having your compiler catch bugs, and your automated deployments exercising your infrastructure. With all the automation in place, you start investing in the health of your system, getting some dividends with each test added instead of playing catchup using some manual testing. Every run of your pipeline runs hundreds (and sometimes even more) of automated tests to make sure your product is rock solid when it comes to production."}]},{type:a,tag:m,props:{id:ae},children:[{type:a,tag:e,props:{href:"#consistency",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:aj}]},{type:a,tag:i,props:{},children:[{type:c,value:"As we all know, humans are inconsistent, and computers are great at doing the same thing over and over again. No human will be able to build, test, and deploy your changes multiple times a day consistently. Automated pipelines, when done right, always work for you. Consistency makes your compliance process easier to maintain. And while the CI server is running your pipeline, you have your developers writing some new features. Which is more fun than building and deploying anyway 😉."}]},{type:a,tag:t,props:{id:ak},children:[{type:a,tag:e,props:{href:"#anatomy-of-a-cicd-pipeline",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:al}]},{type:a,tag:i,props:{},children:[{type:c,value:"Most of the automated pipelines consist of the following major steps:"}]},{type:a,tag:i,props:{},children:[{type:a,tag:"img",props:{alt:"A typical CI\u002FCD pipeline",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fcicd-pipeline.svg"},children:[]}]},{type:a,tag:m,props:{id:y},children:[{type:a,tag:e,props:{href:"#build",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:z}]},{type:a,tag:i,props:{},children:[{type:c,value:"While developers make their changes, we want to make sure the code builds into a runnable product. Here, we run a compiler and\u002For linter for scripting based languages to make sure we’re able to run the code."}]},{type:a,tag:m,props:{id:A},children:[{type:a,tag:e,props:{href:"#test",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:B}]},{type:a,tag:i,props:{},children:[{type:c,value:"The next step is to test your code. We run our automated tests to make sure the code we built does what we expect it to do. At this step, we’ll catch any bugs that happen along the way so the developer can fix them early in the process before they go out to the real world."}]},{type:a,tag:m,props:{id:C},children:[{type:a,tag:e,props:{href:"#deploy",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:D}]},{type:a,tag:i,props:{},children:[{type:c,value:"Now the code is built and tested, let’s go ahead and deploy it to a real environment. We’ll package the code for deployment including the necessary libraries and the configuration. Once it’s ready for us to push, we deploy it directly to the cloud provider using their API."}]},{type:a,tag:m,props:{id:E},children:[{type:a,tag:e,props:{href:"#verify",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:F}]},{type:a,tag:i,props:{},children:[{type:c,value:"Once the code is deployed, we’ll run some comprehensive, non-destructive tests against a deployed environment to make sure the code runs in the cloud the way we expect it to run."}]},{type:a,tag:m,props:{id:G},children:[{type:a,tag:e,props:{href:"#notify",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:H}]},{type:a,tag:i,props:{},children:[{type:c,value:"Once the pipeline is finished running, we notify the developer of the successful deployment. Most of the notifications go to slack or email. Important to note that if failures happen along the way, the pipeline notifies the developer of the failed step so the action can be taken promptly."}]},{type:a,tag:t,props:{id:x},children:[{type:a,tag:e,props:{href:"#how-you-can-implement-cicd",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:J}]},{type:a,tag:m,props:{id:K},children:[{type:a,tag:e,props:{href:"#lock-in-your-branching-strategy",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:L}]},{type:a,tag:i,props:{},children:[{type:c,value:"We recommend following "},{type:a,tag:e,props:{href:af,rel:[o,p,q],target:r,title:"Git Flow Overview"},children:[{type:c,value:ag}]},{type:c,value:" or some variation of it. Making sure everyone follows the same process for branching makes everything easier. If you have multiple environments (like development, staging, and production) you may want to name your branches the same way so it’s easy to map the branches to the environments the code should be deployed to."}]},{type:a,tag:m,props:{id:M},children:[{type:a,tag:e,props:{href:"#build-test-deploy",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:N}]},{type:a,tag:i,props:{},children:[{type:c,value:"Chances are, you either already have a way to build, test, and deploy your code. The goal here is to distill it down to a single command you can run from your terminal. If your build process involves running multiple commands, no problem, we’ll just write a build script running each step. If you don’t have automated tests, the best first step is to set up a testing framework and add it to the CI pipeline. Once tests run automatically, it’s easy to add them one by one gradually. Last but not least, your deployment has to happen using a single command. What we’ve seen in the past is that a lot of software teams end up with a large spreadsheet of steps to run for each release. Worry not, each of those massive spreadsheets can be distilled down to a single command step by step."}]},{type:a,tag:m,props:{id:O},children:[{type:a,tag:e,props:{href:"#pipeline-it",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:P}]},{type:a,tag:i,props:{},children:[{type:c,value:"Now you have all your steps in order, it’s easy to put it together into a pipeline. There are numerous technology choices starting from self-hosted options like "},{type:a,tag:e,props:{href:"https:\u002F\u002Fjenkins.io\u002F",rel:[o,p,q],target:r,title:"Jenkins Website"},children:[{type:c,value:"Jenkins"}]},{type:c,value:" all the way to some hosted solutions like "},{type:a,tag:e,props:{href:"https:\u002F\u002Fcircleci.com\u002F",rel:[o,p,q],target:r,title:"CircleCI website"},children:[{type:c,value:"CircleCI"}]},{type:c,value:" and "},{type:a,tag:e,props:{href:"https:\u002F\u002Fazure.microsoft.com\u002Fen-us\u002Fservices\u002Fdevops\u002Fpipelines\u002F",rel:[o,p,q],target:r,title:"Azure Pipelines - CI\u002FCD from Azure"},children:[{type:c,value:"Azure Pipelines"}]},{type:c,value:". It all depends on your system and your current technology stack. At this point, it comes down to either creating an account for a hosted CI provider or standing up Jenkins inside your infrastructure and wiring the steps together with some configuration files using YAML or similar configuration language. Yes, we want our infrastructure to "},{type:a,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FInfrastructure_as_code",rel:[o,p,q],target:r,title:"IAC overview"},children:[{type:c,value:"run as code"}]},{type:c,value:" so we can stand it up at any time."}]},{type:a,tag:t,props:{id:u},children:[{type:a,tag:e,props:{href:"#conclusion",ariaHidden:k,tabIndex:g},children:[{type:a,tag:h,props:{className:[j,f]},children:[]}]},{type:c,value:v}]},{type:a,tag:i,props:{},children:[{type:c,value:"CI\u002FCD is key to increasing velocity, developer productivity, and it’s just more fun to focus on features. Which in turn drives the business forward. If you’re in a manual world without the pipeline or perhaps even without the automated tests in place, starting on CI\u002FCD route might seem like an overwhelming task. Worry not, with the right processes in place and some persistence, you’ll get to a place where all you do is push some new code and let the pipeline do the rest of the magic."}]},{type:a,tag:i,props:{},children:[{type:c,value:"If you would like to get some help with implementing CI\u002FCD into your organization, don’t hesitate to reach out. We’ve done numerous automated CI\u002FCD pipelines for mobile apps, websites, API services, ETL, Serverless systems, and more."}]}]},dir:"\u002Fsolutions",path:ah,extension:".md",slug:ai,createdAt:new Date(1656639278807),updatedAt:new Date(1656639278811)},ctaHref:"https:\u002F\u002Fairtable.com\u002Fshr9h6C35G3nLuwoQ",contentPages:[{draft:n,headerOne:"Backend",headerTwo:"API",headerThree:l,imageUrl:l,icon:"cloud-tags",icons:l,shortTitle:"Backend API Development",slug:"api-development-scale-to-millions-of-users-with-a-robust-backend",tablesOfContent:[{id:"what-is-backend-api",depth:d,text:"What is Backend API"},{id:"api-anatomy",depth:d,text:"API Anatomy"},{id:"api-gateway",depth:b,text:"API Gateway"},{id:"service-layer",depth:b,text:"Service Layer"},{id:"how-to-build-apis-right",depth:d,text:"How to Build APIs Right"},{id:"architecture",depth:b,text:"Architecture"},{id:"scalability",depth:b,text:"Scalability"},{id:"cost-efficiency",depth:b,text:"Cost Efficiency"},{id:u,depth:d,text:v}],isOpen:n,title:"API Development: Scale to Millions of Users With a Robust Backend",to:"\u002Fsolutions\u002Fapi-development-scale-to-millions-of-users-with-a-robust-backend",cta:s},{draft:n,headerOne:am,headerTwo:"",headerThree:l,imageUrl:l,icon:"flask-outline",icons:l,shortTitle:am,slug:"automated-tests-get-dividends-with-every-test-run",tablesOfContent:[{id:"what-is-automated-testing",depth:d,text:"What Is Automated Testing"},{id:"advantages-of-automated-testing",depth:d,text:"Advantages of Automated Testing"},{id:"write-robust-and-modular-code",depth:b,text:"Write Robust and Modular Code"},{id:"refactor",depth:b,text:"Refactor"},{id:"minimize-bugs",depth:b,text:"Minimize Bugs"},{id:"tests-are-your-documentation",depth:b,text:"Tests are Your Documentation"},{id:"tests-prove-that-your-system-works",depth:b,text:"Tests Prove That Your System Works"},{id:"get-dividends-with-each-test-run",depth:b,text:"Get Dividends With Each Test Run"},{id:"disadvantages-of-automated-testing",depth:d,text:"Disadvantages of Automated Testing"},{id:"efficient-testing-strategy",depth:d,text:"Efficient Testing Strategy"},{id:"anatomy-of-automated-testing",depth:d,text:"Anatomy of Automated Testing"},{id:"unit-tests",depth:b,text:"Unit Tests"},{id:"integration-tests",depth:b,text:"Integration Tests"},{id:"ui--api-tests",depth:b,text:"UI \u002F API Tests"},{id:"test-suite",depth:b,text:"Test Suite"},{id:"load-tests",depth:b,text:"Load Tests"},{id:"how-to-start-with-automated-testing",depth:d,text:"How To Start With Automated Testing"},{id:"advanced-topics",depth:d,text:"Advanced Topics"},{id:"book-references",depth:d,text:"Book References"},{id:u,depth:d,text:v}],isOpen:n,title:"Automated Tests: Get Dividends With Every Test Run",to:"\u002Fsolutions\u002Fautomated-tests-get-dividends-with-every-test-run",cta:s},{draft:n,headerOne:w,headerTwo:W,headerThree:l,imageUrl:l,icon:Q,icons:l,shortTitle:w,slug:ai,tablesOfContent:R,isOpen:true,title:I,to:ah,cta:s},{draft:n,headerOne:"Client-Side",headerTwo:an,headerThree:l,imageUrl:l,icon:"devices",icons:l,shortTitle:"Client-Side Development",slug:"client-side-development-enlighten-your-users-with-the-best-user-experience",tablesOfContent:[{id:"what-is-client-side",depth:d,text:"What is Client-Side"},{id:"client-side-application-architecture",depth:d,text:"Client-Side Application Architecture"},{id:"user-interface",depth:b,text:"User Interface"},{id:"networking-layer",depth:b,text:"Networking Layer"},{id:"data-store",depth:b,text:"Data Store"},{id:"focus-areas",depth:d,text:"Focus areas"},{id:"look-and-feel",depth:b,text:"Look and Feel"},{id:"performance",depth:b,text:"Performance"},{id:"resiliency",depth:b,text:"Resiliency"},{id:"automated-testing-and-cicd",depth:d,text:"Automated Testing and CI\u002FCD"},{id:u,depth:d,text:v}],isOpen:n,title:"Client-Side Development: Enlighten Your Users With the Best User Experience",to:"\u002Fsolutions\u002Fclient-side-development-enlighten-your-users-with-the-best-user-experience",cta:s},{draft:n,headerOne:"Serverless",headerTwo:an,headerThree:l,imageUrl:l,icon:"lambda",icons:l,shortTitle:"Serverless Software Development",slug:"serverless-software-development-focus-on-features-instead-of-the-infrastructure",tablesOfContent:[{id:"what-is-serverless",depth:d,text:"What is Serverless"},{id:"why-serverless-matters",depth:d,text:"Why Serverless Matters"},{id:"pay-per-use",depth:b,text:"Pay per use"},{id:"all-major-cloud-providers-support-serverless",depth:b,text:"All major cloud providers support Serverless"},{id:"infinitely-scalable",depth:b,text:"Infinitely Scalable"},{id:"be-at-the-forefront-of-technology",depth:b,text:"Be At the Forefront of Technology"},{id:"business-problems-serverless-solves",depth:d,text:"Business Problems Serverless Solves"},{id:"power-your-websites-mobile-apps-and-iot-devices",depth:b,text:"Power your Websites, Mobile Apps, and IoT Devices"},{id:"deliver-relevant-data-to-stakeholders",depth:b,text:"Deliver relevant data to stakeholders"},{id:"reduce-infrastructure-cost",depth:b,text:"Reduce Infrastructure Cost"},{id:"increase-development-velocity",depth:b,text:"Increase Development Velocity"},{id:"handle-traffic-spikes-seamlessly",depth:b,text:"Handle Traffic Spikes Seamlessly"},{id:T,depth:d,text:"Solution"},{id:"strong-architecture",depth:b,text:"Strong Architecture"},{id:"efficient-monitoring-and-alerting",depth:b,text:"Efficient Monitoring and Alerting"},{id:"automated-testing",depth:b,text:"Automated Testing"},{id:"execution",depth:d,text:"Execution"},{id:"gradual-integration",depth:b,text:"Gradual Integration"},{id:"system-rewrite",depth:b,text:"System Rewrite"}],isOpen:n,title:"Serverless Software Development: Focus on Features, instead of the Infrastructure",to:"\u002Fsolutions\u002Fserverless-software-development-focus-on-features-instead-of-the-infrastructure",cta:s}]}],mutations:l}}("element",3,"text",2,"a","icon-link",-1,"span","p","icon","true",void 0,"h3",false,"nofollow","noopener","noreferrer","_blank","solution_read","h2","conclusion","Conclusion","CI \u002F CD","how-you-can-implement-cicd","build","Build","test","Test","deploy","Deploy","verify","Verify","notify","Notify","CI\u002FCD like AC⚡️DC: Rock’n’Roll with Continuous Integration and Continuous Delivery","How You Can Implement CI\u002FCD","lock-in-your-branching-strategy","Lock in Your Branching Strategy","build-test-deploy","Build, Test, Deploy","pipeline-it","Pipeline it","pipe-disconnected",Array(18),"what-is-cicd","solution","What is CI\u002FCD","continuous-integration","Pipelines","Continuous Integration","continuous-delivery","Continuous Delivery","advantages-of-using-cicd","Advantages of using CI\u002FCD","speed","Speed","quality","Quality","consistency","https:\u002F\u002Fnvie.com\u002Fposts\u002Fa-successful-git-branching-model\u002F","Git Flow","\u002Fsolutions\u002Fci-cd-like-ac-dc-rock-n-roll-with-continuous-integration-and-continuous-delivery","ci-cd-like-ac-dc-rock-n-roll-with-continuous-integration-and-continuous-delivery","Consistency","anatomy-of-a-cicd-pipeline","Anatomy of a CI\u002FCD Pipeline","Automated Tests","Development")));