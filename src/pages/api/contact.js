import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, subject } = req.body;

    console.log("📨 Reçu :", { name, email, message, subject });

    if (!name || !email || !message || !subject) {
      console.log("⛔ Champs manquants");
      return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    try {
      const client = await clientPromise;
      const db = client.db("portfolio");
      const collection = db.collection("messages");

      const newMessage = {
        name,
        email,
        message,
        subject,
        createdAt: new Date(),
      };

      const result = await collection.insertOne(newMessage);
      console.log("✅ Message stocké :", result.insertedId);

      return res.status(200).json({
        message: "Message stocké avec succès",
        data: { id: result.insertedId, ...newMessage },
      });

    } catch (error) {
      console.error("🔥 Erreur dans MongoDB :", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }

  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
