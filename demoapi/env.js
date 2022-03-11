const APP_SETTING = { 
    DEV : {
        VERSION : '1.0.0',
        WEBSERVICE : "https://jsonplaceholder.typicode.com/",
        WEBS_CONFIG : {
            POST : "/posts" , 
            COMMENTS : "comments",
            ALBUMS : "/albums" ,
            PHOTOS : "/photos" ,
            TODO : "/todos" , 
            USERS : "/users"
        }
    } , 
    PROD : {
        VERSION : '1.0.0',
        WEBSERVICE : "https://jsonplaceholder.typicode.com/",
        WEBS_CONFIG : {
            POST : "/posts" , 
            COMMENTS : "comments",
            ALBUMS : "/albums" ,
            PHOTOS : "/photos" ,
            TODO : "/todos" , 
            USERS : "/users"
        }
    }
}

module.exports = APP_SETTING;