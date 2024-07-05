"useClient";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GrafanaFaroWebSdk: unknown;
    GrafanaFaroWebTracing: unknown;
  }
}

const GrafanaFaroSdk = () => {
  useEffect(() => {
    // Function to check if a script is already loaded
    const isScriptLoaded = (src: any) => {
      return document.querySelector(`script[src="${src}"]`) !== null;
    };

    // Function to load a script
    const loadScript = (
      src: string,
      onLoadCallback: ((this: GlobalEventHandlers, ev: Event) => any) | null
    ) => {
      if (isScriptLoaded(src)) {
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.onload = onLoadCallback;
      document.head.appendChild(script);
    };

    // Load the Faro Web SDK
    loadScript(
      "https://unpkg.com/@grafana/faro-web-sdk@^1.0.0/dist/bundle/faro-web-sdk.iife.js",
      () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.GrafanaFaroWebSdk as any).initializeFaro({
          // eslint-disable-next-line turbo/no-undeclared-env-vars
          url: `https://faro-collector-prod-au-southeast-1.grafana.net/collect/${process.env.NEXT_PUBLIC_GRAFANA_API_KEY}`,
          app: {
            name: "Jaycar storefront UAT",
            version: "1.0.0",
            environment: "UAT",
          },
        });

        // Load the Faro Web Tracing after initializing the SDK
        loadScript(
          "https://unpkg.com/@grafana/faro-web-tracing@^1.0.0/dist/bundle/faro-web-tracing.iife.js",
          () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window.GrafanaFaroWebSdk as any).faro?.instrumentations?.add(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              new (window.GrafanaFaroWebTracing as any).TracingInstrumentation()
            );
          }
        );
      }
    );
  }, []);

  return null;
};

export default GrafanaFaroSdk;
