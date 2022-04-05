import { PrismaClient } from "@prisma/client";

//También se puede colocar aquí:
// const prisma = new PrismaClient();

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  res.status(200).json(categories);
}
