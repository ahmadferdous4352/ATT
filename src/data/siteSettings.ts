import siteData from '../content/settings/site.json'

export interface SiteSettings {
  heroImage: string
  logoImage: string
  email: string
  whatsappUrl: string
  showreelVideoUrl: string
  showreelPoster: string
}

export const siteSettings: SiteSettings = siteData
