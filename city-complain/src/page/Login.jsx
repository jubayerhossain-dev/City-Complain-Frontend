import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { baseurl } from '../API/BaseUrl'

async function readResponse(response) {
  const text = await response.text()
  try { return text ? JSON.parse(text) : {} } catch { return { detail: text } }
}

function errorMessage(response, data) {
  const detail = typeof data?.detail === 'string' ? data.detail : ''
  if (response.status === 401 || response.status === 400) return detail || 'Email or password is incorrect.'
  if (response.status >= 500) return 'The login service encountered a server error. Please check the FastAPI server logs and try again.'
  return detail || `Sign-in failed (HTTP ${response.status}). Please check your details and try again.`
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const navigate = useNavigate()

  const submit = async (event) => {
    event.preventDefault()
    setBusy(true)
    setError('')
    try {
      const body = new URLSearchParams({ username: email.trim(), password })
      const response = await fetch(`${baseurl}/User_Login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      const data = await readResponse(response)
      if (!response.ok) throw new Error(errorMessage(response, data))
      if (!data.access_token) throw new Error('The login service did not return an access token.')

      localStorage.setItem('lm_token', data.access_token)
      let user = null
      try {
        const userResponse = await fetch(`${baseurl}/user`, { headers: { Authorization: `Bearer ${data.access_token}` } })
        if (userResponse.ok) user = await userResponse.json()
      } catch {
        // A valid token can still be used if the profile endpoint is temporarily unavailable.
      }
      localStorage.setItem('civic_user', JSON.stringify(user))
      navigate(user?.role?.toLowerCase() === 'admin' ? '/admin' : '/dashboard')
    } catch (cause) {
      const message = cause?.message || ''
      setError(/failed to fetch|networkerror|load failed/i.test(message)
        ? 'Cannot reach the API server. Check the VITE_API_BASE_URL setting in your Vercel project and confirm the Render service is running.'
        : message || 'Could not connect to the FastAPI server.')
    } finally {
      setBusy(false)
    }
  }

  return <main className="auth-page"><div className="auth-aside"><span className="eyebrow">WELCOME BACK</span><h1>Good to see you.</h1><p>Sign in to keep your community moving forward.</p><div className="aside-note">“The best way to find yourself is to lose yourself in the service of others.”<small>— Mahatma Gandhi</small></div></div><form className="panel auth-card" onSubmit={submit}><span className="eyebrow">YOUR CIVICDESK ACCOUNT</span><h2>Log in</h2><p className="muted">Enter your details to continue.</p>{error && <div className="notice error" role="alert">{error}</div>}<label>Email address<input type="email" required autoComplete="email" placeholder="you@example.com" value={email} onChange={event => setEmail(event.target.value)} /></label><label>Password<input type="password" required autoComplete="current-password" placeholder="Enter your password" value={password} onChange={event => setPassword(event.target.value)} /></label><button className="button button-primary full" disabled={busy}>{busy ? 'Signing in…' : 'Sign in →'}</button><p className="auth-foot">New to CivicDesk? <Link to="/registration">Create an account</Link></p></form></main>
}
