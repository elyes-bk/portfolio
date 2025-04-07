import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("portfolio"); // remplace par le nom exact de ta base
  const collection = db.collection("messages");

  // 📥 GET : Récupérer tous les messages, triés par date décroissante
  if (req.method === "GET") {
    try {
      const messages = await collection
        .find({})
        .sort({ createdAt: -1 }) // tri décroissant
        .toArray();

      return res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }

  // ❌ DELETE : Supprimer un message par ID
  if (req.method === "DELETE") {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID manquant" });
    }

    try {
      await collection.deleteOne({ _id: new ObjectId(id) });
      return res.status(200).json({ message: "Message supprimé" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erreur lors de la suppression" });
    }
  }

  // Méthode non autorisée
  res.setHeader("Allow", ["GET", "DELETE"]);
  res.status(405).end(`Méthode ${req.method} non autorisée`);
}
