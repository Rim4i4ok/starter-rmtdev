import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ActiveIdContextProvider from "./contexts/ActiveIdContextProvider.tsx";
import BookmarksContextProvider from "./contexts/BookmarksContextProvider.tsx";
import { JobItemContextProvider } from "./contexts/JobItemContextProvider.tsx";
import { SearchTextContextProvider } from "./contexts/SearchTextContextProvider.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <ActiveIdContextProvider>
          <SearchTextContextProvider>
            <JobItemContextProvider>
              <App />
            </JobItemContextProvider>
          </SearchTextContextProvider>
        </ActiveIdContextProvider>
      </BookmarksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
