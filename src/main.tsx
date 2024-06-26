import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { QueryClientProvider } from "react-query";
import queryClient from "./lib/query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
