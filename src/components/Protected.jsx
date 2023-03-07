import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function Protected({ children }) {
  const navigate = useNavigate();
  const { userData } = useUserContext();
  useEffect(() => {
    if (!userData || !userData.isAdmin) navigate("/", { replace: true });
  }, [navigate, userData]);
  return <>{children}</>;
}
