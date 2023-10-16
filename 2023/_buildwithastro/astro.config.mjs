import { defineConfig } from 'astro/config';
const productionBuild = import.meta.env.PROD;

export default defineConfig({
    site: 'https://www.frontinpoa.com.br/',
    compressHTML: true,
    // trailingSlash: 'always', // for server
    output: 'static',
    vite: {
        ssrBuild: true,
        server: {
            // https://stackoverflow.com/questions/41553291/can-you-import-nodes-path-module-using-import-path-from-path
            fs: {
                // Allow serving files from one level up to the project root
                allow: ['..'],
            }
        },
        ssr: {
            noExternal: productionBuild ? true : [],
            external: [],
        }
    }
});
