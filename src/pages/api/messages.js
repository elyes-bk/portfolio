import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const messages = await prisma.message.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    try {
      await prisma.message.delete({ where: { id: parseInt(id) } });
      return res.status(200).json({ message: 'Message supprimé' });
    } catch (error) {
      return res.status(500).json({ error: 'Erreur lors de la suppression' });
    }
  }

  res.setHeader('Allow', ['GET', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
