## What are Azure functions?

Azure functions are one of the serverless offerings from Microsoft's Azure cloud platform. Serverless here means that these offerings completely abstract the infrastructure from the users availaing them. So, the developer only needs to worry about writing the code and upload them to serverless app and the Azure takes care of chosing the server resources, runtime, scaling, configurations, maintenance and everything that is needed for your code to run smoothly. These are perfect for when you need a small piece of code that's stateless for the most part and when you don't have enough time to deal with the problems of deciding the infrastructure/scaling or any deployment related problems really that you might face with traditional (somewhat) platforms like a VM, containers or App Service.

All you need is your code, an Azure subscription and you are good to go with Azure functions. Within minutes you get:
1. Up and running app with your choice of trigger and coding language (Azure function has [wide enough list](https://docs.microsoft.com/en-in/azure/azure-functions/functions-overview#what-can-i-do-with-functions) for you to chose from)
2. "Unlimited" automatically scalable infrastructure
3. Secure prototcols (like Https for Http Trigger)
4. Authentication (functions level, Azure active directory etc)
5. CORS settings (again for Http triggered functions)
6. Some additional features depending upon the Azure functions app plan you chose

## Why should you consider Azure functions?

I have found the most attractive feature of these functions to be their pricing, which is fairly affordable for small to medium scale applications. Their are no fixed costs for reserved resources as there are none, the resources are allocated and charged only if the functions are executed, Microsoft markets it as `pay-per-use pricing`. Your bill depends on the number of executions and the time and resources the functions takes per execution.

Along with pricing, there definitely is huge convenience in terms of getting the app up and running, you only have to care about writing code and that's pretty much all. These functions are fairly easy to setup and are able to handle any traffic smoothly. You don't have to give any criteria for scaling out/in or maintaining any of the server/runtime configurations.

## When to chose/avoid Azure functions?

This is an important question considering that while these functions are great, they are not fit for all situations. One needs to carefully assess the nature of their application and chose the right platform accordingly. In my experience, I found the functions to be most useful when you need a small piece of code that doesn't require persistent state and is meant to do a small task, a task that maybe required to be performed very frequently and concurrently with varying load at different times.

I would go with these functions when, my code is meant to be:
1. Used as a processing utility for messages in a queue
2. Used for serving very volatile number of requests that may require easy and frequent scaling out and then back in
3. Used for running a scheduled task (e.g. trigger some events, send out notifications etc.)
4. Used for a non-user facing API (as functions are known to have _cold start_ problems, especially when the functions goes idle a lot)

The situations where I try to avoid these functions are when I'm trying to use these functions as:
1. Stateful applications
2. Applications requiring no/low response times (like a user facing API, due to cold start problems)
3. Applications where scalability is not a priority at all

### Cold start problem
Azure functions are only up when they are being used, more than 20 minutes of inactivity on these functions leads to deallocation of resources attached to these functions instances. When functions instances are up and have resources allocated, this state of instances is known as `hot` or `warm`, and when the resources are deallocated (due to either inactivity or scale in) these instances are called to be in `cold` state. Whenever a new instance is required to be prepared (state going from `cold` to `warm`) then a certain time is required to prepare the instance (for steps like installation of runtime and applications code etc). This time (AKA _cold start_ time) affects the requests coming towards these instances and can be as high as 7-10 seconds.

E.g. An azure app that has been idle for a while goes to `cold` state, now when an execution for the function is requested, a new instance is prepared to execute it, causing the delay in the request processing due to time taken by instance to get to `warm` state.

## Important Links

* [Azure functions overview documentation](https://docs.microsoft.com/en-in/azure/azure-functions/functions-overview)
* [Azure functions introduction](https://azure.microsoft.com/en-in/blog/introducing-azure-functions/)
* [Serverless computing](https://azure.microsoft.com/en-in/overview/serverless-computing/)