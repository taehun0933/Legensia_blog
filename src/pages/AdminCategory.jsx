import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function AdminCategory() {
  const { userData } = useUserContext();
  if (!userData || !userData.isAdmin) return <Navigate />;
  return <div>어드민카테고리</div>;
}
