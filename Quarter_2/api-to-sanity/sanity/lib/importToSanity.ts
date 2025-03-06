import { createClient } from "./client";
import slugify from "slugify";
import { apiVersion, dataset, projectId } from '../env'
import { fetchApiData } from "./fetchData";
import { uploadImageToSanity } from "./uploadImage";


const client = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: false,
    apiVersion: "2025-02-03",
    token: process.env.SANITY_TOKEN, // Required for write operations
  });
  
  export const importData = async () => {
    try {
      const products = await fetchApiData();
  
      for (const product of products) {
        const categoryRef = await createCategory({ name: product.category.name });
  
        const imageRef = await uploadImageToSanity(product.image);
  
        const newProduct = {
          _id: product._id || `product-${slugify(product.name, { lower: true })}`,
          _type: "product",
          name: product.name,
          slug: { _type: "slug", current: slugify(product.name, { lower: true }) },
          price: product.price,
          quantity: product.quantity || 0,
          tags: product.tags || [],
          description: product.description || "No description provided.",
          features:
            product.features?.map((feature: string, index: number) => ({
              _key: `feature-${index}`,
              value: feature,
            })) || [],
          dimensions: product.dimensions || { height: "N/A", width: "N/A", depth: "N/A" },
          category: { _type: "reference", _ref: categoryRef },
          image: imageRef ? { _type: "image", asset: { _type: "reference", _ref: imageRef } } : null,
        };
  
        await client.createIfNotExists(newProduct); // ✅ Corrected here
      }
  
      console.log("Data imported successfully!");
    } catch (error) {
      console.error("Error importing data:", error);
    }
  };
  

interface Category {
  name: string;
}

export const createCategory = async (category: Category): Promise<string> => {
  const categorySlug = slugify(category.name, { lower: true });
  const categoryId = `category-${categorySlug}`;

  try {
    const client = createClient(
        {
                    projectId: projectId,
                    dataset: dataset,
                    apiVersion: apiVersion,
                    token: process.env.SANITY_TOKEN,
                    useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
                }
    );

    const existingCategory = await client.fetch(
      `*[_type == "category" && slug.current == $slug][0]`,
      { slug: categorySlug }
    );

    if (existingCategory) {
      return existingCategory._id;
    }

    const newCategory = await client.create({
      _id: categoryId,
      _type: "category",
      name: category.name,
      slug: { _type: "slug", current: categorySlug },
    });

    return newCategory._id;
  } catch (error) {
    console.error("Error creating category:", error);
    return "";
  }
};
