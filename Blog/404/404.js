/* ----------------- Partículas en canvas ----------------- */
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let W = canvas.width = innerWidth;
    let H = canvas.height = innerHeight;

    window.addEventListener('resize', ()=>{W=canvas.width=innerWidth;H=canvas.height=innerHeight})

    const particles = [];
    const P = 120; // cantidad aproximada
    function rand(min,max){return Math.random()*(max-min)+min}

    for(let i=0;i<P;i++){
      particles.push({
        x:rand(0,W), y:rand(0,H), vx:rand(-0.2,0.2), vy:rand(-0.15,0.15), r:rand(0.6,2.4), life:rand(80,400)
      })
    }

    function draw(){
      ctx.clearRect(0,0,W,H);
      // faint grid
      ctx.save();
      ctx.globalAlpha=0.06;
      ctx.strokeStyle='#ffffff';ctx.lineWidth=1;
      for(let gx=0;gx<W;gx+=180){ctx.beginPath();ctx.moveTo(gx,0);ctx.lineTo(gx,H);ctx.stroke()}
      for(let gy=0;gy<H;gy+=120){ctx.beginPath();ctx.moveTo(0,gy);ctx.lineTo(W,gy);ctx.stroke()}
      ctx.restore();

      // particles
      for(let p of particles){
        p.x+=p.vx; p.y+=p.vy; p.life-=0.3;
        if(p.x<0) p.x=W; if(p.x>W) p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
        const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*6);
        g.addColorStop(0, 'rgba(83,240,255,0.12)');
        g.addColorStop(0.5, 'rgba(155,89,255,0.06)');
        g.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=g;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
      }

      // connecting lines
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a=particles[i], b=particles[j];
          const dx=a.x-b.x, dy=a.y-b.y; const dist=Math.hypot(dx,dy);
          if(dist<140){
            ctx.globalAlpha=(1-dist/140)*0.06;
            ctx.strokeStyle='rgba(83,240,255,0.5)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();

    /* ----------------- Cursor ship (parallax) ----------------- */
    const ship = document.getElementById('cursorShip');
    let shipX = innerWidth/2, shipY=innerHeight/2;
    window.addEventListener('pointermove',(e)=>{
      shipX = e.clientX; shipY=e.clientY;
      ship.style.transform = `translate3d(${shipX}px,${shipY}px,0)`;
    });

    /* subtle parallax for particles based on mouse */
    window.addEventListener('pointermove', (e)=>{
      const mx = (e.clientX/W-0.5)*2; const my=(e.clientY/H-0.5)*2;
      for(let p of particles){p.x+=mx*0.2; p.y+=my*0.12}
    })

    /* ----------------- Terminal and controls ----------------- */
    const terminal = document.getElementById('terminal');
    const clockEl = document.getElementById('clock');
    const memEl = document.getElementById('mem');
    const portEl = document.getElementById('port');
    const sysState = document.getElementById('sysState');
    const retryBtn = document.getElementById('retryBtn');
    const homeBtn = document.getElementById('homeBtn');
    const warpBtn = document.getElementById('warpBtn');
    const warpInput = document.getElementById('warpInput');
    const glitchToggle = document.getElementById('glitchToggle');
    let glitchOn = true;

    function now(){return new Date().toLocaleTimeString('es-MX')}
    function appendLine(text,muted){
      const d=document.createElement('div');d.className='term-line'+(muted?' muted':'');d.textContent=text;terminal.appendChild(d);terminal.scrollTop=terminal.scrollHeight;
    }

    // fake diagnostics
    function startDiagnostics(){
      portEl.textContent = '/sys/'+Math.floor(Math.random()*9999);
      sysState.textContent='Escaneando';
      appendLine('> iniciando reintentos...');
      setTimeout(()=>appendLine('ping -> no responde',true),600);
      setTimeout(()=>appendLine('señal: débil — estabilizando...',true),1200);
      setTimeout(()=>{appendLine('rutas encontradas: 0/3');sysState.textContent='Sin ruta';},1800);
    }
    startDiagnostics();

    // clock + mem
    setInterval(()=>{clockEl.textContent=now(); memEl.textContent = Math.floor(30+Math.random()*55)+'%';},1000);

    retryBtn.addEventListener('click', ()=>{
      appendLine('> reintentando enlace...');
      setTimeout(()=>{appendLine('> enlace restablecido — estado: estable');sysState.textContent='Estable';},1100);
    });

    homeBtn.addEventListener('click', ()=>{
      appendLine('> recalibrando al inicio...');
      // simple animation then go to '/'
      document.body.animate([{opacity:1},{opacity:0}],{duration:800,fill:'forwards'});
      setTimeout(()=>{window.location.href='../index.html';},850);
    });

    warpBtn.addEventListener('click', ()=>{const val=warpInput.value.trim();if(!val){appendLine('> warp: objetivo vacío',true);return;}warpSequence(val)});
    warpInput.addEventListener('keydown',(e)=>{if(e.key==='Enter')warpBtn.click()});

    function warpSequence(target){
      appendLine('> iniciando warp hacia: '+target);
      let steps = ['cargando propulsores','estabilizando vector','calibrando espacio-tiempo','emitiendo pulso'];
      let i=0; const t = setInterval(()=>{
        if(i<steps.length){appendLine(' - '+steps[i]);i++;}else{clearInterval(t);appendLine('> warp completo — redirigiendo...');
          // pretend navigation
          setTimeout(()=>{appendLine('> destino no encontrado — retorno al origen',true);},700);
        }
      },550);
    }

    // glitch toggle
    glitchToggle.addEventListener('click', ()=>{
      glitchOn = !glitchOn; document.documentElement.style.setProperty('--card-blur', glitchOn? '12px':'2px');
      glitchToggle.textContent = 'Glitch: '+(glitchOn?'ON':'OFF');
      document.querySelector('.code').style.setProperty('-webkit-text-stroke', glitchOn? '1px rgba(83,240,255,0.9)':'0px');
    });

    /* small accessibility: focus trap for terminal (keyboard users) */
    warpInput.addEventListener('focus', ()=>appendLine('> input activo — escribe tu destino',true));

    /* Fancy: occasional terminal random events */
    setInterval(()=>{
      const r = Math.random();
      if(r<0.2) appendLine('> paquete perdido — reensamblando');
      else if(r<0.35) appendLine('> eco: latencia 43ms', true);
      else if(r<0.42) appendLine('> detected: starfield anomaly — queuing diagnostics', true);
    },3500);

    /* Small keyboard easter egg */
    let konami = '';
    window.addEventListener('keydown', (e)=>{
      konami += e.key.toLowerCase(); if(konami.length>20) konami=konami.slice(-20);
      if(konami.includes('void')){
        appendLine('> acceso al vacío desbloqueado — mostrando rastro de partículas');
        for(let i=0;i<30;i++){particles.push({x:rand(0,W),y:rand(0,H),vx:rand(-0.8,0.8),vy:rand(-0.6,0.6),r:rand(1.2,3.2)})}
        konami='';
      }
    });

    /* Accessibility: reduce motion respects */
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced){
      document.getElementById('bgCanvas').style.display='none';
      ship.style.display='none';
    }

    /* End of script */