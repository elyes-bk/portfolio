import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('messages');

    if (req.method === 'POST'){
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Champs requis manquants' });
        }

        try {
            await db.collection('messages').insertOne({
                name,
                email,
                subject,
                message,
                createdAt: new Date(),
            });
        return res.status(200).json({ message: 'Message reçu avec succès !' });
        } catch (error) {
            console.error('Erreur MongoDB:', error);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
    }
    else if (req.method === 'GET'){
        try{
            const messages = await collection
                .find({})
                .sort({ createdAt: -1 })
                .toArray();
            return res.status(200).json(messages);
        }catch(error){
            console.error('Erreur récupération des messages:', error);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
    }else if(req.method === 'DELETE'){
        const {id} = req.query;
        if(!id){
            return res.status(400).json({ message: 'ID requis manquant' });
        }
        try {
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            if(result.deletedCount === 0){
                return res.status(404).json({ message: 'Message non trouvé' });
            }
            return res.status(200).json({ message: 'Message supprimé avec succès' });
        }catch(error){
            console.error('Erreur suppression message:', error);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
    }
    else{
        return res.status(405).json({ message: 'Méthode non autorisée' });
    }
}
