// In local development, use Vite's same-origin proxy so API calls work whether
// the frontend is opened at localhost or 127.0.0.1. Set VITE_API_BASE_URL when
// the frontend is deployed with a separately hosted API.
export const baseurl = import.meta.env.VITE_API_BASE_URL || '/api'
