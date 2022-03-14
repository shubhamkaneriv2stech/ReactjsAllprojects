import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Basic from "./components/Pricing/Basic";
import Corporate from "./components/Pricing/Corporate";
import Users from "./components/Users";



export const routes = [

    {
        path: "/",
        label: "Home",
        component: Home,
        routes: [
            {
                path: "/about",
                label: "About",
                component: About, 
                routes: [
                    {

                    }
                ]
            },

            {
                path: "/users",
                label: "Users",
                component: Users
            },

            {
                path: "/pricing",
                label: "Pricing",
                component: Pricing,
                routes: [
                    {
                        path: "/basic",
                        label: "Basic",
                        component: Basic
                    },

                    {
                        path: "/corporate",
                        label: "Corporate",
                        component: Corporate
                    }
                ]
            }
        ]
    }



]