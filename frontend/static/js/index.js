import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";



const navigateTo = url=>{
    history.pushState(null,null,url);
    router();
};

const router = async()=>{
    const routes =[
        // {path:"/",view:()=>console.log("viewing Dashboard")},
        {path:"/",view:Dashboard},
        {path:"/posts",view:Posts},
        {path:"/settings",view:Settings},
    ];

    // Test each route for potential match 
    const potentialMacthes = routes.map(route=>{
        return{
            route:route,
            isMatch:location.pathname === route.path
        };
    });

    let match = potentialMacthes.find(potentialMacth =>potentialMacth.isMatch);

    if(!match){
        match = {
            route:routes[0],
            isMatch:true
        };
    };

    // console.log(match.route.view());

    const view  = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(match.route.view());
};

window.addEventListener("popstate",router);

document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener("click",e=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });


    router();
});