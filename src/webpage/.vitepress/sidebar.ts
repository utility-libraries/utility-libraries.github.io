import {DefaultTheme} from "vitepress";


const utilityLibrariesSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Shell",
        base: "/utility-libraries/shell/",
        link: ".",
        items: [
            { text: "utilities-sh", link: "utilities-sh" },
        ],
    },
    {
        text: "Python",
        base: "/utility-libraries/python/",
        link: ".",
        items: [
            { text: "configlib-py", link: "configlib-py" },
        ],
    },
]


const thirdPartySidebarPython: DefaultTheme.SidebarItem[] = [
    {
        text: "General Purpose",
        base: "/3rd-party/python/general-purpose/",
        link: ".",
        items: [
            { text: "Better-Exception", link: "better-exceptions" },
        ],
    },
    {
        text: "Image",
        base: "/3rd-party/python/image/",
        link: ".",
        items: [
            { text: "Pillow", link: "pillow" },
        ],
    },
    {
        text: "Services",
        base: "/3rd-party/python/services/",
        link: ".",
        items: [

        ],
    },
    {
        text: "Video",
        base: "/3rd-party/python/video/",
        link: ".",
        items: [
            { text: "MoviePy", link: "moviepy" },
        ],
    },
    {
        text: "Web Frameworks",
        base: "/3rd-party/python/web-frameworks/",
        link: ".",
        items: [

        ],
    },
]
const thirdPartySidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Python",
        base: "/3rd-party/python/",
        link: ".",
        items: thirdPartySidebarPython
    },
]

export default <DefaultTheme.Sidebar>{
    '/utility-libraries/': { base: "/utility-libraries/", items: utilityLibrariesSidebar },
    '/3rd-party/': { base: "/3rd-party/", items: thirdPartySidebar },
}
