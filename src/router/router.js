import VueRouter from "vue-router";

import BlogsHome from "../page/BlogsHome.vue";
import HomeMainBlog from "../page/HomeMainBlog.vue";
import BlogPage from "../page/BlogPage.vue";

var router = new VueRouter({
    routes:[
        {
            path:'/',
            component:BlogsHome,
            redirect:'/homeMain',
            children: [
                {
                    path: '/homeMain',
                    component: HomeMainBlog
                },{
                    path: '/blogPage/:id',
                    component: BlogPage
                }
            ]
        }
    ]
})
module.exports = router

