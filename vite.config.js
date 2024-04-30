import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		include: ["./__tests__/*.js"],
		reporters: ["default", "html"],
		globals: true,
		coverage: {
			enabled: true,
			include: ["src/components/**/*.jsx"],
			reporter: ["text", "html"],
		},
	},
});
