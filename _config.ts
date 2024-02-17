import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";

const site = lume({
    server: {
        port: 8000
    },
    dest: "public"
});
site.use(sass());
site.use(jsx());
site.use(mdx());
site.copy("images");

export default site;
