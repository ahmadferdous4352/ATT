const AboutPage = () => {
  return (
    <section className="w-full max-w-[900px] mx-auto px-5 md:px-8 lg:px-12 pt-40 pb-24 md:pt-48 md:pb-32">
      <p className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]">About</p>
      <h1 className="mt-4 text-[34px] md:text-[52px] font-normal tracking-[-0.03em] text-[#F2F2F2]">
        A studio built for working in Afghanistan.
      </h1>

      <div className="mt-8 space-y-6 max-w-[65ch] text-base leading-relaxed text-white/70">
        <p>
          Afghanistan Tales &amp; Trails is a visual production studio working across Afghanistan,
          creating documentary films, photography, design, and visual stories for global audiences.
        </p>
        <p>
          We work with NGOs, international media organizations, and creative agencies that need
          production support on the ground — combining local access and cultural knowledge with a
          workflow built around consent, discretion, and international production standards.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10">
        <h2 className="text-lg font-medium text-[#F2F2F2]">Team</h2>
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-white/55">
          Team profiles are being finalized and will be added here.
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-white/10">
        <h2 className="text-lg font-medium text-[#F2F2F2]">Nationwide capability</h2>
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-white/55">
          We plan every production around current local access, permissions, and security
          conditions, and adjust scope where those conditions require it.
        </p>
      </div>
    </section>
  )
}

export default AboutPage
