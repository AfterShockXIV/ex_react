// AUTH_ROUTE_MODEL
//Login , regis , consent , PDPA
import Homepage from "../Home/Homepage"
import Registerpage from "../Pages/Auth/Registerpage"
import Albumpage from "../Pages/Albumpage"
import Commentpage from "../Pages/Commentpage"
import Photopage from "../Pages/Photopage"
import Todopage from "../Pages/Todopage"
import Userpage from "../Pages/Userpage"
import Postpage from "../Pages/Postpage"
import Loginpage from "../Pages/Auth/Loginpage"
export const AUTH_ROUTE_MODEL = [
    {
        ID : 1 , 
        PAGENAME : "Login",
        PAGEPATH : "/",
        PAGECOMPONENT : <Loginpage/> ,
        ISACTION : true
    },
    {
        ID : 2 , 
        PAGENAME : "Register",
        PAGEPATH : "/Register",
        PAGECOMPONENT : <Registerpage/> ,
        ISACTION : true
    }
]

//ROUTE_MODEL
export const ROUTE_MODEL = [
    {
        ID : 1 , 
        PAGENAME : "Homepage",
        PAGEPATH : "/user/home",
        PAGECOMPONENT : <Homepage/> ,
        ISACTION : true
    },
    {
        ID : 2 , 
        PAGENAME : "Todo",
        PAGEPATH : "/user/todopage",
        PAGECOMPONENT : <Todopage/> ,
        ISACTION : true
    },
    {
        ID : 3 , 
        PAGENAME : "Comment",
        PAGEPATH : "/user/commentpage",
        PAGECOMPONENT : <Commentpage/> ,
        ISACTION : true
    },
    {
        ID : 4 , 
        PAGENAME : "Albumpage",
        PAGEPATH : "/user/albumpage",
        PAGECOMPONENT : <Albumpage/> ,
        ISACTION : true
    },
    {
        ID : 5 , 
        PAGENAME : "Postpage",
        PAGEPATH : "/user/postpage",
        PAGECOMPONENT : <Postpage/> ,
        ISACTION : true
    },

    {
        ID : 6, 
        PAGENAME : "Photopage",
        PAGEPATH : "/user/[photopage",
        PAGECOMPONENT : <Photopage/> ,
        ISACTION : true
    },
]