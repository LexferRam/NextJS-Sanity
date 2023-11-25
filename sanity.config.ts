
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './src/sanity/schemas'

const config = defineConfig({
    projectId: "vrmd1yl0",
    dataset: "production",
    title: "My personal website",
    apiVersion: "2023-11-24",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;