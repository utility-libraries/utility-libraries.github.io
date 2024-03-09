import {DefaultTheme} from "vitepress";


const utilityLibrariesSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Shell",
        base: "/utility-libraries/shell/",
        link: "index",
        items: [
            { text: "utilities-sh", link: "utilities-sh" },
        ],
    },
    {
        text: "Python",
        base: "/utility-libraries/python/",
        link: "index",
        items: [
            { text: "configlib-py", link: "configlib-py" },
        ],
    },
]


const thirdPartySidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Image",
        base: "/3rd-party/image/",
        link: "index",
        items: [
            { text: "Pillow", link: "pillow" },
        ],
    },
    {
        text: "Services",
        base: "/3rd-party/services/",
        link: "index",
        items: [

        ],
    },
    {
        text: "Video",
        base: "/3rd-party/video/",
        link: "index",
        items: [
            { text: "MoviePy", link: "moviepy" },
        ],
    },
    {
        text: "Web Frameworks",
        base: "/3rd-party/web-frameworks/",
        link: "index",
        items: [

        ],
    },
]


export default <DefaultTheme.Sidebar>{
    '/utility-libraries/': { base: "/utility-libraries/", items: utilityLibrariesSidebar },
    '/3rd-party/': { base: "/3rd-party/", items: thirdPartySidebar },
}
