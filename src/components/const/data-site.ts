export const siteInfo = {
    title: "CescDev",
    description: "CescDev | Desarrollador web en Nicaragua. Creo sistemas empresariales, aplicaciones web y sitios profesionales que ayudan a los negocios a digitalizar y optimizar sus procesos."
}

export const TAGS = {
    NEXT: {
        name: "Next.js",
        class: "bg-black dark:text-white",
        icon: "next_js",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "dark:bg-[#003159]/80 bg-[#003159]/35 dark:text-white text-black",
        icon: "tailwindcss",
    },
    REACT: {
        name: "React.js",
        class: "dark:bg-[#61DBFB]/35 bg-[#457b9d]/80 dark:text-white text-black",
        icon: "react",
    },
    ASTRO: {
        name: "Astro",
        class: "bg-[#F75A01]/25 dark:text-white text-black",
        icon: "astroIcon"
    },
    HTML5: {
        name: "Html5",
        class: "bg-[#dc2f02]/35 dark:text-white text-black",
        icon: "html",
    },
    CSS: {
        name: "Css",
        class: "bg-[#168aad]/35 dark:text-white text-black",
        icon: "css",
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "bg-[#ffca3a]/35 dark:text-white text-black",
        icon: "javascript",
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "bg-[#3178C6]/35 dark:text-white text-black",
        icon: "typescript",
    },
    MYSQL: {
        name: "MySql",
        class: "bg-[#0d3b66]/35 dark:text-white text-black",
        icon: "mysql",
    },
    SQL: {
        name: "Sql",
        class: "bg-[#a71e34]/35 dark:text-white text-black",
        icon: "sql",
    },
    NODE: {
        name: "Node",
        class: "bg-[#80b918]/35 text-black",
        icon: "node_js"
    },
};
export const PROJECTS = [
    {
        title: "DISTRIBUIDORA MAJO",
        description: "Sistema contable",
        link: "https://www.cescdev.com",
        github: "",
        image: "/img/sistem-account.webp",
        isTagsBackendAndFrontend: true,
        projectTags: {
            tags: [TAGS.HTML5]
        },
    },
    {
        title: "Clínica Bio Natural Salud",
        description: "Sitio web institucional",
        link: "https://www.bionaturalsalud.clinic",
        github: "",
        image: "/img/bionaturalsalud.webp",
        isTagsBackendAndFrontend: false,
        tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.TYPESCRIPT],
        experienceCustomers:
        {
            name_customer: "Dr. Carlos Ronald Leiva Saballos",
            workstation: "Director / Médico General Naturo-Ortopático",
            company: "Clínica Bio Natural Salud",
            review: "La página web nos permitió fortalecer nuestra presencia digital, presentar nuestros servicios de manera profesional y facilitar el contacto con nuestros pacientes. Destaco la comunicación y atención a los detalles durante el desarrollo."
        }
    },
    {
        title: "Distrifull",
        description: "Sitio web institucional",
        link: "https://www.distrifull.com",
        github: "",
        image: "/img/distrifull.webp",
        isTagsBackendAndFrontend: false,
        tags: [TAGS.HTML5, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Full505",
        description: "Sitio web institucional",
        link: "https://www.full505.com",
        github: "",
        image: "/img/full-505.webp",
        isTagsBackendAndFrontend: false,
        tags: [TAGS.HTML5, TAGS.CSS, TAGS.JAVASCRIPT],
    }
];
