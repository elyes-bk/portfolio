import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Champs requis manquants' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio'); // Remplace par ton nom de DB

    await db.collection('messages').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ message: 'Message reçu avec succès !' });
  } catch (error) {
    console.error('Erreur MongoDB:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}
