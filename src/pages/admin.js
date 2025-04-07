import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Authentification simple avec mot de passe
  useEffect(() => {
    const pass = prompt('Mot de passe admin ?');
    if (pass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      setAuthorized(true);
    } else {
      window.location.href = '/';
    }
  }, []);

  // Récupération des messages uniquement si authorized est vrai
  useEffect(() => {
    if (authorized) {
      fetch('/api/messages')
        .then((res) => res.json())
        .then((data) => {
          setMessages(data);
          setLoading(false);
        });
    }
  }, [authorized]);

  const deleteMessage = async (id) => {
    await fetch('/api/messages', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  if (!authorized) return null; // On ne montre rien tant que pas validé

  if (loading) return <p>Chargement...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin - Messages reçus 🔐</h1>
      {messages.length === 0 ? (
        <p>Aucun message</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <p><strong>Nom :</strong> {msg.name}</p>
              <p><strong>Email :</strong> {msg.email}</p>
              <p><strong>Message :</strong> {msg.message}</p>
              <p><em>{new Date(msg.createdAt).toLocaleString()}</em></p>
              <button onClick={() => deleteMessage(msg.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
