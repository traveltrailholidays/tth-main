import prisma from '@/backend/db/prismaDBConfig';

export default async function getListings(){
    try {
        const listings = await prisma.listing.findMany({
            orderBy: {
                CreatedAt: 'desc'
            }
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            CreatedAt: listing.CreatedAt.toISOString(),
        }));

        return safeListings;
    } catch (error: any) {
        throw new Error(error);
    }
}