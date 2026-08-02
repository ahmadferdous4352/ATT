export interface Project {
  slug: string
  title: string
  category: 'Documentary' | 'Photography' | 'Short-form Video' | 'Design' | 'Mixed'
  location: string
  year: number
  coverImage?: string
  videoUrl?: string
  summary: string
  description?: string
  ethicsNote?: string
  featured: boolean
}

type ProjectFile = Omit<Project, 'slug'>

// Every .json file in src/content/projects becomes one project. The CMS
// (see public/admin/config.yml) creates/edits/deletes files in that folder;
// the filename it generates from the title becomes the project's URL slug.
const projectModules = import.meta.glob<{ default: ProjectFile }>('../content/projects/*.json', {
  eager: true,
})

export const projects: Project[] = Object.entries(projectModules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()?.replace(/\.json$/, '') ?? ''
    return { ...mod.default, slug }
  })
  .sort((a, b) => b.year - a.year)
