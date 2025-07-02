(function(){
  // Crea mensaje visual flotante en pantalla
  const msg = document.createElement("div");
  msg.textContent = "✅ Hack cargado correctamente";
  Object.assign(msg.style, {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#0f0",
    color: "#000",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    zIndex: 9999
  });
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000); // Lo quita después de 3 segundos

  // Kill Aura ofuscado
  const _x1 = ["x","y","hp","isPlayer",".hp"];
  const _d = (a,b)=>Math.hypot(a[_x1[0]]-b[_x1[0]],a[_x1[1]]-b[_x1[1]]);
  const _e = ()=>{const r=[];for(const k in window){const v=window[k];if(v&&typeof v==="object"){try{for(const o of Object.values(v)){if(o&&typeof o[_x1[2]]==="number"&&typeof o[_x1[0]]==="number"){r.push(o);}}}catch{}}}return r;};
  setInterval(()=>{
    try{
      const all=_e();
      const p=all.find(e=>e?.[_x1[3]]);
      if(!p)return;
      const targets=all.filter(e=>e!==p&&e[_x1[2]]>0&&_d(e,p)<=5.5);
      const atk=Object.values(window).find(f=>typeof f==="function"&&f.toString().includes(_x1[4]));
      if(atk){for(const t of targets)atk(t);}
    }catch{}
  },75);
})();
