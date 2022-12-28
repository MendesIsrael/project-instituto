import styles from './Page01.module.css'

export function Page01() {
  return (
    <section>
      <div id="cabecalho">
      
      </div>
      <div id="title">
        <video src="../img/video-principal.mp4" autoPlay loop muted></video>
        <img src="../img/logo-3.png" alt="instituto" />
      </div>  
      <div className="acesso">
        <div className="botao-vigor-seaside">
          <img src="../img/logo-vigor.png" alt="body training" />
        </div>
        <div className="botao-vigor-seaside">
          <img src="../img/logo-preta-seaside.png" alt="educacional" />
        </div>
      </div>
    </section>
  )
}