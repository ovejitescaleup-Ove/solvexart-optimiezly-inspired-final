import type { Config } from "tailwindcss";
const config: Config = {
 content:["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
 theme:{extend:{colors:{ink:"#111111",lime:"#C7FF38",cream:"#F5F4EF",muted:"#6B6B6B"}}},
 plugins:[]
}; export default config;