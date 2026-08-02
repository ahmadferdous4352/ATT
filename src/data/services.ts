import servicesData from '../content/settings/services.json'

export interface Service {
  number: string
  title: string
  description: string
}

export const services: Service[] = servicesData.items
