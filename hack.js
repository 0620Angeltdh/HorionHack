(function(){
  const _0x1=["\x78","\x79","\x68\x70","\x69\x73\x50\x6C\x61\x79\x65\x72","\x2E\x68\x70"];
  const _d=(a,b)=>Math.hypot(a[_0x1[0]]-b[_0x1[0]],a[_0x1[1]]-b[_0x1[1]]);
  const _e=()=>{const r=[];for(const k in window){const v=window[k];if(v&&typeof v==="object"){try{for(const o of Object.values(v)){if(o&&typeof o[_0x1[2]]==="number"&&typeof o[_0x1[0]]==="number"){r.push(o);}}}catch{}}}return r;};
  let _aura=false,_id=null;

  const _start=()=>{_id=setInterval(()=>{try{const a=_e();const p=a.find(e=>e?.[_0x1[3]]);if(!p)return;const t=a.filter(e=>e!==p&&e[_0x1[2]]>0&&_d(e,p)<=5.5);const f=Object.values(window).find(fn=>typeof fn==="function"&&fn.toString().includes(_0x1[4]));if(f){for(const x of t)f(x);}}catch{}},75);};
  const _stop=()=>{clearInterval(_id);_id=null;};

  document.addEventListener("keydown",e=>{
    if(e.key.toLowerCase()==="k"){
      _aura=!_aura;
      _aura?_start():_stop();
    }
  });
})();
