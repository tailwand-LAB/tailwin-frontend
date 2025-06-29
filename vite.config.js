import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
})
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'custom-color': '#252641',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// }