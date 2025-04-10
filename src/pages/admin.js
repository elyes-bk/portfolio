import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function AdminPage() {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async() => {
      try{
        const res = await fetch('/api/messages');
        const data = await res.json();
        setMessages(data);
      }catch(error){
        console.error('Erreur de récupération des messages:', error);
      }finally{
        setLoading(false);
      }
    };
    fetchMessages();
  },[]);

  const handleDelete = async (id) => {
    if(!window.confirm('Supprimer ce message ?'))return;
    try{
      const res = await fetch(`api/messages?id=${id}`,{
        method: 'DELETE',
      })
      const data = await res.json();
      alert(data.message);

      if(res.ok){
        setMessages(messages.filter((msg) => msg._id !== id));
      }
    }catch(error){
      console.error('Erreur de suppression:', error);
    }
    
  }
  return(
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>  
    
      <button onClick={()=>signOut({ callbackUrl: '/' })}>
        Déconnexion
      </button>
      <h1>Admin Page</h1>

      {loading ? (
        <p>Loading...</p>
      ) : messages.length === 0 ? (
        <p>No messages available.</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
              <p><strong>Nom :</strong> {msg.name}</p>
              <p><strong>Email :</strong> {msg.email}</p>
              <p><strong>Message :</strong> {msg.message}</p>
              <p style={{ fontSize: '0.8rem', color: '#555' }}>
                Reçu le {new Date(msg.createdAt).toLocaleString()}
              </p>
              <button 
                onClick={() => handleDelete(msg._id)}
                style={{ background: 'red', color: 'white', padding: '0.5rem 1rem', border: 'none', marginTop: '1rem', cursor: 'pointer' }}
>
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
    
    if(!session){
      return{
        redirect:{
          destination: 'api/auth/signin',
          permanent: false,
        }
      }
    }
    return{
      props: {session},
    }
}