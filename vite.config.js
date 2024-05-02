import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		setupFiles: "./__tests__/setupTests.js",
		include: ["./__tests__/*.{js,jsx,ts,tsx}"],
		exclude: ["./__tests__/setupTests.js"],
		reporters: ["default", "html"],
		css: true,
		globals: true,
		coverage: {
			include: ["src/components/**/*.jsx"],
			reporter: ["text", "html"],
		},
	},
});
