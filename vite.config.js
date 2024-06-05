import react from '@vitejs/plugin-react'

export default {
    root: 'src/',
    publicDir: '../public/',
    base: './',
    plugins: [
        react(),
    ],
    server: {
        host: true,
        open: true,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
    },
}
