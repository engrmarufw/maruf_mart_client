import { z } from "zod";

export const shopSchema = z.object({
    shopName: z.string().min(3, "Shop name must be at least 3 characters"),
    businessLicenseNumber: z.string().min(5, "Invalid license number"),
    address: z.string().min(5, "Address is required"),
    contactNumber: z.string().min(10, "Invalid contact number"),
    website: z.string().url("Invalid URL"),
    servicesOffered: z.array(z.string()).min(1, "At least one service is required"),
    establishedYear: z.coerce.number().min(1900).max(new Date().getFullYear(), "Invalid year"),
    socialMediaLinks: z.object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
    }),
    taxIdentificationNumber: z.string().min(5, "Invalid TIN"),
    shopImage: z.any().optional(), // Accepts file input
});