import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import dotenv from 'dotenv';

dotenv.config()

export const client = createClient({
  projectId:projectId,
  dataset:dataset,
  apiVersion:apiVersion,
  token: process.env.SANITY_TOKEN,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export { createClient };

