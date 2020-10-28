import {DefaultLayout} from "../layouts"

//Route Views
import HomePage from "../views/HomePage"
import AboutPage from "../views/AboutPage"
import DefaultPage from '../views/DefaultPage'
import Error from '../views/Error'
import BlogPage from '../views/BlogPage'
import SinglePostPage from '../views/SinglePostPage'
import ProductsPage from '../views/ProductsPage'

//Routes
export const homeUrl='/'
export const aboutUrl='/about-us'
export const blogUrl='/blog'
export const careerUrl="/careers"
export const policyUrl='/privacy-policy'
export const productsUrl='/products'

export default [
    {
        path: homeUrl,
        exact: true,
        layout: DefaultLayout,
        component: HomePage
    },
    {
        path:aboutUrl,
        exact:true,
        layout: DefaultLayout,
        component: AboutPage
    },
    {
        path:careerUrl,
        exact:true,
        layout: DefaultLayout,
        component: DefaultPage
    },
    {
        path:productsUrl,
        exact:true,
        layout: DefaultLayout,
        component: ProductsPage
    },
    {
        path:policyUrl,
        exact:true,
        layout: DefaultLayout,
        component: DefaultPage
    },
    {
        path:blogUrl,
        exact:true,
        layout: DefaultLayout,
        component: BlogPage
    },
    {
        path:blogUrl+'/:slug',
        exact:true,
        layout: DefaultLayout,
        component: SinglePostPage
    },
    {
        path:"/error",
        exact:false,
        layout: DefaultLayout,
        component: Error
    },
    {
        path:"*",
        exact:false,
        layout: DefaultLayout,
        component: Error
    }
]