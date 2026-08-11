import { useState } from 'react'

const initialState = { name: '', email: '', quantity: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-2 py-4">
        <p className="heading-sm !text-lg">Enquiry received</p>
        <p className="body-text text-sm">
          Thanks, {values.name || 'there'}. Our store team will reply within one business day.
        </p>
        <button className="btn-secondary mt-3 !py-2 !px-4 text-xs" onClick={() => setSent(false)}>
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-gray-400">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            value={values.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-navy dark:border-border-dark dark:bg-navy-dark dark:text-white dark:focus:border-amber-dark"
            placeholder="Jordan Lee"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-gray-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-navy dark:border-border-dark dark:bg-navy-dark dark:text-white dark:focus:border-amber-dark"
            placeholder="jordan@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="quantity" className="mb-1.5 block text-xs font-medium text-gray-400">
          Approximate quantity
        </label>
        <input
          id="quantity"
          name="quantity"
          value={values.quantity}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-navy dark:border-border-dark dark:bg-navy-dark dark:text-white dark:focus:border-amber-dark"
          placeholder="e.g. 40 pairs, mixed sizes"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-gray-400">
          Tell us about the order
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-navy dark:border-border-dark dark:bg-navy-dark dark:text-white dark:focus:border-amber-dark"
          placeholder="Styles, sizes, colourway, timeline..."
        />
      </div>
      <button type="submit" className="btn-primary mt-1 w-full">
        Send enquiry
      </button>
    </form>
  )
}
