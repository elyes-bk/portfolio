"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AdminPage() {

  const { session, status } = useSession();

  if (status === "loading") return <p>Chargement...</p>;
  if (!session){
    return redirect("/");
  }

  return <div>Bienvenue dans l’espace admin</div>;
}
