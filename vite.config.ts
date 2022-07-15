import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                "comp": path.resolve(__dirname, 'src/components')
            }
        },
        server: {
            proxy: {
                '^/api': {
                    target: 'http://192.168.72.104:3000',
                    changeOrigin: true,
                }
            }
        }
    }
})
