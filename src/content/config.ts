import { defineCollection, z } from 'astro:content';

// Collection des œuvres
const oeuvresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    technique: z.string().optional(),
    dimensions: z.string().optional(),
    date: z.date().optional(),
    prix: z.number().optional(),
    disponible: z.boolean().default(true),
    featured: z.boolean().default(false),
    description: z.string().optional(),
    lieu: z.string().optional(),
    ordre: z.number().optional(),
  }),
});

// Collection des pages (pour le CMS)
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// Collection de paramètres
const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    siteName: z.string(),
    tagline: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string().optional(),
    socialLinks: z.object({
      instagram: z.string().url().optional(),
      facebook: z.string().url().optional(),
      tumblr: z.string().url().optional(),
    }).optional(),
  }),
});

export const collections = {
  'oeuvres': oeuvresCollection,
  'pages': pagesCollection,
  'settings': settingsCollection,
};

