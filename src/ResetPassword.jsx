import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || "https://cvtukqamaqrhjtdvmslb.supabase.co",
  import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2dHVrcWFtYXFyaGp0ZHZtc2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4NDU1MjQsImV4cCI6MjA5MTQyMTUyNH0.gSksF5jV-UpuaUL7x7vhHHOB6Z7Qq0iehtbc2PoSAxw"
);

const G = {
  bg:"#0b1825",bgMid:"#132030",
  gold:"#c9a84c",goldB:"rgba(180,140,60,0.28)",goldF:"rgba(180,140,60,0.1)",
  green:"#78b878",greenB:"rgba(120,184,120,0.28)",
  red:"#e07070",redB:"rgba(220,100,100,0.25)",
  cream:"#ede3cd",text:"#d8cfc0",muted:"#7e92a2",dim:"#3e5060",
  border:"rgba(255,255,255,0.075)",
};

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Supabase automatically handles the session from the reset link
    supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setReady(true);
      }
    });
  }, []);

  const handleReset = async () => {
    setError(""); setMessage("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
    } else {
      setMessage("Password updated! Redirecting to your journal...");
      setTimeout(() => {
        window.location.href = "https://anchored-steps.vercel.app";
      }, 2000);
    }
    setLoading(false);
  };

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(155deg,#0b1825 0%,#132030 55%,#0b1825 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",fontFamily:"EB Garamond,Georgia,serif"}}>
      <div style={{fontSize:36,color:G.gold,marginBottom:12}}>&#9875;</div>
      <div style={{fontFamily:"Cinzel,serif",fontSize:22,fontWeight:600,color:G.cream,marginBottom:4}}>Anchored Steps</div>
      <div style={{fontSize:12,color:G.muted,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:28}}>Reset Your Password</div>
      <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid "+G.goldB,borderRadius:16,padding:"32px",width:"100%",maxWidth:400}}>
        {!ready ? (
          <div style={{textAlign:"center"}}>
            <p style={{color:G.muted,fontSize:15,lineHeight:1.7}}>Verifying your reset link...</p>
            <p style={{color:G.dim,fontSize:13,marginTop:12,fontStyle:"italic"}}>If nothing happens, please request a new password reset from the app.</p>
          </div>
        ) : (
          <div>
            {error && <p style={{fontSize:12,color:G.red,marginBottom:12,textAlign:"center",background:"rgba(220,100,100,0.08)",border:"1px solid "+G.redB,borderRadius:8,padding:"10px"}}>{error}</p>}
            {message && <p style={{fontSize:12,color:G.green,marginBottom:12,textAlign:"center",background:"rgba(120,184,120,0.08)",border:"1px solid "+G.greenB,borderRadius:8,padding:"10px"}}>{message}</p>}
            <label style={{fontSize:10,color:G.gold,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8,display:"block",fontFamily:"Cinzel,serif"}}>New Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="min 6 characters"
              style={{width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid "+G.border,borderRadius:8,color:G.cream,fontSize:16,padding:"12px 14px",outline:"none",fontFamily:"EB Garamond,Georgia,serif",marginBottom:12}}
            />
            <label style={{fontSize:10,color:G.gold,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8,display:"block",fontFamily:"Cinzel,serif"}}>Confirm Password</label>
            <input
              type="password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder="re-enter password"
              onKeyDown={e => e.key === "Enter" && handleReset()}
              style={{width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid "+G.border,borderRadius:8,color:G.cream,fontSize:16,padding:"12px 14px",outline:"none",fontFamily:"EB Garamond,Georgia,serif",marginBottom:16}}
            />
            <button
              onClick={handleReset}
              disabled={loading}
              style={{width:"100%",background:"linear-gradient(135deg,rgba(180,140,60,0.3),rgba(180,140,60,0.15))",border:"1px solid "+G.goldB,color:G.gold,padding:"12px",borderRadius:8,cursor:"pointer",fontSize:14,fontFamily:"Cinzel,serif",letterSpacing:"0.1em"}}
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
