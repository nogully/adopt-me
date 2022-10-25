import { defineConfig } from "vite"; // vite is like parcel for building
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], 
  root: "src", // finds index.html and crawls your graph from there
});
