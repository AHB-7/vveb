/** @type {import('next').NextConfig} */
import { fileURLToPath } from "url";
import path from "path";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

export default nextConfig;
