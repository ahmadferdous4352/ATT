interface PolicyItem {
  title: string
  body: string
}

const policyItems: PolicyItem[] = [
  {
    title: 'Informed consent',
    body: 'We explain who we are, what the material is for, and how it may be used before filming or photographing anyone, and we respect a decision not to participate at any point.',
  },
  {
    title: 'Privacy',
    body: 'Personal details are collected only where necessary, stored securely, and never shared beyond what a subject or client has agreed to.',
  },
  {
    title: 'Cultural sensitivity',
    body: 'Production plans account for local customs, gender considerations, and community expectations, adapting our approach rather than asking subjects to adapt to us.',
  },
  {
    title: 'Legal awareness',
    body: 'We work within applicable local requirements and permissions, and adjust plans when access, filming, or publication restrictions change.',
  },
  {
    title: 'Identity protection',
    body: 'Faces, names, and other identifying details are obscured or withheld wherever a subject requests it or context calls for it.',
  },
  {
    title: 'Location protection',
    body: 'Specific locations are generalized in public material — to a province or region rather than an exact site — whenever precision could put people at risk.',
  },
  {
    title: 'Secure handling of sensitive footage',
    body: 'Sensitive footage and images are stored on encrypted, access-controlled systems and retained only as long as a project requires.',
  },
]

const EthicsPage = () => {
  return (
    <section className="w-full max-w-[900px] mx-auto px-5 md:px-8 lg:px-12 pt-40 pb-24 md:pt-48 md:pb-32">
      <p className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]">Ethical Filming Policy</p>
      <h1 className="mt-4 text-[34px] md:text-[52px] font-normal tracking-[-0.03em] text-[#F2F2F2]">
        How we work with the people in front of the camera.
      </h1>
      <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-white/70">
        Working in Afghanistan means the people we film and photograph can carry real risk from
        being seen. These principles guide every project, and take priority over any brief.
      </p>

      <div className="mt-16 space-y-10">
        {policyItems.map((item) => (
          <div key={item.title} className="pt-6 border-t border-white/10">
            <h2 className="text-lg font-medium text-[#F2F2F2]">{item.title}</h2>
            <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-white/60">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EthicsPage
