import prisma from '@/backend/db/prismaDBConfig';

export interface IListingsParams {
    dest?: string;
    category?: string;
};

export default async function getListings(
    params: IListingsParams
) {
    try {

        const { dest, category } = params;

        let query: any = {};

        if(dest) {
            query.dest = dest;
        }

        if(category) {
            query.category = category;
        }

        const listings = await prisma.listing.findMany({
            where: query,
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