import Home from "./components/Home";
import Agenda from "./components/Agenda";
import Blog from "./components/Blog";
import Partners from "./components/Partners";
import Place from "./components/Place";
import NewsDetail from "./components/NewsDetail";

export default [
    {
        component: Home,
        meta: {
            title: "Aktualności",
        },
        name: "home",
        path: "/",
    },
    {
        component: Agenda,
        meta: {
            title: "Agenda",
        },
        name: "agenda",
        path: "/agenda",
    },
    {
        component: NewsDetail,
        meta: {
            title: "Blog",
        },
        name: "news_detail",
        path: "/blog/:id",
        props: true,
    },
    {
        component: Blog,
        meta: {
            title: "Blog",
        },
        name: "blog",
        path: "/blog",
    },
    {
        component: Partners,
        meta: {
            title: "Partnerzy",
        },
        name: "partners",
        path: "/partners",
    },
    {
        component: Place,
        meta: {
            title: "Miejsce",
        },
        name: "place",
        path: "/place",
    },
];
