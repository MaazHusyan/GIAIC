import { createClient } from "./client";
import { apiVersion, dataset, projectId } from '../env'

export const uploadImageToSanity = async (imageUrl: string): Promise<string | null> => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        const client = createClient({
            projectId: projectId,
            dataset: dataset,
            apiVersion: apiVersion,
            token: process.env.SANITY_TOKEN,
            useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
        });
        const asset = await client.assets.upload("image", blob);
        return asset._id;
    } catch (error) {
        console.error("Image upload failed:", error);
        return null;
    }
};
