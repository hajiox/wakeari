/**
 * Meta Pixel tracking utility
 * Safely calls fbq() only on the client side
 */

export function track(event: string, params?: Record<string, any>) {
  // Check if we're on the client side and fbq is available
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params)
  }
}

// Extend the Window interface to include fbq
declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, any>) => void
  }
}
