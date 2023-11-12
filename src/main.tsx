import { createRoot } from "react-dom/client";
// import KeepAlive from 'react-fiber-keep-alive';
import * as Sentry from "@sentry/react";

import "./index.css";
import App from "./App";

Sentry.init({
  dsn: "https://2158ba8d47b4f17fee841750387e26b6@o4506146621554688.ingest.sentry.io/4506146622472192",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [/^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const container = document.getElementById("root");
if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);
root.render(
  // <KeepAlive.Provider value={container}>
    <App />
  // </KeepAlive.Provider>
);

