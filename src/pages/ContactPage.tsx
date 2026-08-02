import { useState, type FormEvent } from 'react'
import { FiMail, FiMessageCircle } from 'react-icons/fi'
import { siteSettings } from '../data/siteSettings'

const projectTypes = ['Documentary', 'Photography', 'Short-form Video', 'Design', 'Mixed / Not sure yet']
const budgetRanges = ['Under $5,000', '$5,000–$15,000', '$15,000–$50,000', '$50,000+', 'Prefer to discuss']
const timelines = ['Within 1 month', '1–3 months', '3–6 months', 'Flexible']

const fieldClasses =
  'mt-2 w-full rounded-xl border border-white/10 bg-[#0B0B0B] px-4 py-3 text-sm text-[#F2F2F2] placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors'

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: wire this up to your form handler or API of choice.
    setSubmitted(true)
  }

  return (
    <section className="w-full max-w-[800px] mx-auto px-5 md:px-8 lg:px-12 pt-40 pb-24 md:pt-48 md:pb-32">
      <p className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]">Contact</p>
      <h1 className="mt-4 text-[34px] md:text-[52px] font-normal tracking-[-0.03em] text-[#F2F2F2]">
        Start a conversation.
      </h1>
      <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/70">
        Tell us about the project and we&apos;ll get back to you. For time-sensitive requests,
        email or WhatsApp reaches us fastest.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${siteSettings.email}`}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/5"
        >
          <FiMail className="h-4 w-4" aria-hidden="true" />
          Email us
        </a>
        <a
          href={siteSettings.whatsappUrl || '#'}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/5"
        >
          <FiMessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      {submitted ? (
        <p className="mt-16 text-base text-white/80">
          Thank you — your message has been noted. We&apos;ll be in touch shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-sm text-white/60">
            Name
            <input type="text" name="name" required className={fieldClasses} />
          </label>
          <label className="block text-sm text-white/60">
            Organization
            <input type="text" name="organization" className={fieldClasses} />
          </label>
          <label className="block text-sm text-white/60">
            Email
            <input type="email" name="email" required className={fieldClasses} />
          </label>
          <label className="block text-sm text-white/60">
            WhatsApp
            <input type="tel" name="whatsapp" className={fieldClasses} />
          </label>
          <label className="block text-sm text-white/60">
            Project type
            <select name="projectType" className={fieldClasses} defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm text-white/60">
            Budget range
            <select name="budget" className={fieldClasses} defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm text-white/60">
            Timeline
            <select name="timeline" className={fieldClasses} defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline}>
                  {timeline}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm text-white/60">
            Location
            <input type="text" name="location" placeholder="e.g. Kabul, Nationwide" className={fieldClasses} />
          </label>
          <label className="block text-sm text-white/60 md:col-span-2">
            Message
            <textarea name="message" rows={5} required className={fieldClasses} />
          </label>

          <button
            type="submit"
            className="md:col-span-2 w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
          >
            Send message
          </button>
        </form>
      )}
    </section>
  )
}

export default ContactPage
