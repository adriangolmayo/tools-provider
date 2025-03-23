// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    output: 'static', 
    adapter: github(),
    base: 'tools-provider', 
});
