(function(){
  alert("✅ Hack cargado correctamente"); // Mensaje visible al activar

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
