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
        text: "API",
        base: "/3rd-party/python/api/",
        link: ".",
        items: [
            { text: "FastAPI", link: "fastapi" },
        ],
    },
    {
        text: "General Purpose",
        base: "/3rd-party/python/general-purpose/",
        link: ".",
        items: [
            { text: "Better-Exception", link: "better-exceptions" },
        ],
    },
    {
        text: "GUI",
        base: "/3rd-party/python/gui/",
        link: ".",
        items: [

        ],
    },
    {
        text: "HTTP",
        base: "/3rd-party/python/http/",
        link: ".",
        items: [
            { text: "AIOHTTP", link: "aiohttp" },
            { text: "requests", link: "requests" },
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
        text: "Terminal",
        base: "/3rd-party/python/terminal/",
        link: ".",
        items: [

        ],
    },
    {
        text: "Terminal GUI",
        base: "/3rd-party/python/terminal-gui/",
        link: ".",
        items: [
            { text: "PyTermGUI", link: "pytermgui" },
            { text: "Textual", link: "textual" },
        ],
    },
    {
        text: "Video",
        base: "/3rd-party/python/video/",
        link: ".",
        items: [
            { text: "MoviePy", link: "moviepy" },
            { text: "ffmpeg-python", link: "ffmpeg-python" },
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
