/**
 * Configuration for Streamlit apps that need to be kept alive
 * Add your Streamlit app URLs here to prevent them from going to sleep
 */
export const STREAMLIT_APPS = [
  {
    name: "AMP: Algorithmic Market Predictor",
    url: "https://tyblue18-automated-trading-app-9dse9i.streamlit.app",
    slug: "amp-algorithmic-market-predictor",
  },
  {
    name: "Password Security Enhancement System",
    url: "https://password-security-enhancements-okygcudyad9pxk3tpbryb6.streamlit.app",
    slug: "password-security-enhancement",
  },
] as const;

/**
 * Extract base URLs (without query params) for keep-alive pings
 */
export function getStreamlitUrls(): string[] {
  return STREAMLIT_APPS.map((app) => app.url);
}



