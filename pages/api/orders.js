import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const pedido = await prisma.purshaseOrder.create({
      data: {
        customerName: req.body.customerName,
        date: req.body.date,
        total: req.body.total,
        order: req.body.order,
      },
    });

    res.json(pedido);

    //   res.json({ metodo: "POST!!!!" });
    // } else {
    //   res.json({ metodo: "GET!!!!!" });
  }
}
