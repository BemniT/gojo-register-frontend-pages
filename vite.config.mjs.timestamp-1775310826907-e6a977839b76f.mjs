// vite.config.mjs
import { defineConfig } from "file:///C:/Users/BT/Desktop/Projects/Gojo-Study-Web/gojo-register-web/frontend/school-register/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/BT/Desktop/Projects/Gojo-Study-Web/gojo-register-web/frontend/school-register/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
            return "react-vendor";
          }
          if (id.includes("firebase/database") || id.includes("@firebase/database")) {
            return "firebase-database-vendor";
          }
          if (id.includes("firebase/storage") || id.includes("@firebase/storage")) {
            return "firebase-storage-vendor";
          }
          if (id.includes("firebase") || id.includes("@firebase")) {
            return "firebase-vendor";
          }
          if (id.includes("recharts")) {
            return "charts-vendor";
          }
          if (id.includes("exceljs")) {
            return "excel-vendor";
          }
          if (id.includes("jspdf") || id.includes("jspdf-autotable")) {
            return "pdf-vendor";
          }
          if (id.includes("html2canvas") || id.includes("file-saver") || id.includes("dompurify")) {
            return "document-vendor";
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQlRcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxHb2pvLVN0dWR5LVdlYlxcXFxnb2pvLXJlZ2lzdGVyLXdlYlxcXFxmcm9udGVuZFxcXFxzY2hvb2wtcmVnaXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEJUXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcR29qby1TdHVkeS1XZWJcXFxcZ29qby1yZWdpc3Rlci13ZWJcXFxcZnJvbnRlbmRcXFxcc2Nob29sLXJlZ2lzdGVyXFxcXHZpdGUuY29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQlQvRGVza3RvcC9Qcm9qZWN0cy9Hb2pvLVN0dWR5LVdlYi9nb2pvLXJlZ2lzdGVyLXdlYi9mcm9udGVuZC9zY2hvb2wtcmVnaXN0ZXIvdml0ZS5jb25maWcubWpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA1MTczLFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICBpZiAoIWlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSByZXR1cm47XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJyZWFjdFwiKSB8fCBpZC5pbmNsdWRlcyhcInJlYWN0LWRvbVwiKSB8fCBpZC5pbmNsdWRlcyhcInJlYWN0LXJvdXRlci1kb21cIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwicmVhY3QtdmVuZG9yXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJmaXJlYmFzZS9kYXRhYmFzZVwiKSB8fCBpZC5pbmNsdWRlcyhcIkBmaXJlYmFzZS9kYXRhYmFzZVwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJmaXJlYmFzZS1kYXRhYmFzZS12ZW5kb3JcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcImZpcmViYXNlL3N0b3JhZ2VcIikgfHwgaWQuaW5jbHVkZXMoXCJAZmlyZWJhc2Uvc3RvcmFnZVwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJmaXJlYmFzZS1zdG9yYWdlLXZlbmRvclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwiZmlyZWJhc2VcIikgfHwgaWQuaW5jbHVkZXMoXCJAZmlyZWJhc2VcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiZmlyZWJhc2UtdmVuZG9yXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJyZWNoYXJ0c1wiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJjaGFydHMtdmVuZG9yXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJleGNlbGpzXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImV4Y2VsLXZlbmRvclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwianNwZGZcIikgfHwgaWQuaW5jbHVkZXMoXCJqc3BkZi1hdXRvdGFibGVcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwicGRmLXZlbmRvclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwiaHRtbDJjYW52YXNcIikgfHwgaWQuaW5jbHVkZXMoXCJmaWxlLXNhdmVyXCIpIHx8IGlkLmluY2x1ZGVzKFwiZG9tcHVyaWZ5XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImRvY3VtZW50LXZlbmRvclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdjLFNBQVMsb0JBQW9CO0FBQ3JlLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGFBQWEsSUFBSTtBQUNmLGNBQUksQ0FBQyxHQUFHLFNBQVMsY0FBYyxFQUFHO0FBQ2xDLGNBQUksR0FBRyxTQUFTLE9BQU8sS0FBSyxHQUFHLFNBQVMsV0FBVyxLQUFLLEdBQUcsU0FBUyxrQkFBa0IsR0FBRztBQUN2RixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLEdBQUcsU0FBUyxtQkFBbUIsS0FBSyxHQUFHLFNBQVMsb0JBQW9CLEdBQUc7QUFDekUsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxHQUFHLFNBQVMsa0JBQWtCLEtBQUssR0FBRyxTQUFTLG1CQUFtQixHQUFHO0FBQ3ZFLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksR0FBRyxTQUFTLFVBQVUsS0FBSyxHQUFHLFNBQVMsV0FBVyxHQUFHO0FBQ3ZELG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksR0FBRyxTQUFTLFVBQVUsR0FBRztBQUMzQixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDMUIsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxHQUFHLFNBQVMsT0FBTyxLQUFLLEdBQUcsU0FBUyxpQkFBaUIsR0FBRztBQUMxRCxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLEdBQUcsU0FBUyxhQUFhLEtBQUssR0FBRyxTQUFTLFlBQVksS0FBSyxHQUFHLFNBQVMsV0FBVyxHQUFHO0FBQ3ZGLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
