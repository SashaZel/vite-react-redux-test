import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/"
// })

// export default defineConfig(({ command }) => {
//   if (command === "serve"){
//     return {
//     plugins: [react()],
//     base: "/",
//   };
//   }
//   if (command === "build") {
//     return {
//       plugins: [react()],
//       base: "",
//     };
//   }
  
// });

export default defineConfig({
  plugins: [react()],
  base: "/malo_bot/"
})
