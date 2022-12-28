import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'

export function Page01() {
  return (
    <section>
      <div id="cabecalho">
      </div>
      <div id="title">
        <video src="../img/video-principal.mp4" autoPlay loop muted></video>
        <img src="../img/logo-3.png" alt="instituto" />
      </div> 

      <div id="carrocel">
        <h1>NOTÍCIAS</h1>
        <Carousel pause="hover">
          <Carousel.Item interval={1500}>
            <p>ojihiugiyuoduysouyygcouygosaffoa</p>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, perferendis eaque autem dolorem quo unde assumenda dolores architecto quod mollitia odio explicabo hic illo et quibusdam. Corrupti laboriosam placeat accusamus.</p>
          </Carousel.Item>
        </Carousel>
      </div> 

      <div id="quemsomos">
        <h1>QUEM SOMOS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident, velit voluptatem laborum aspernatur debitis quae deserunt accusamus accusantium harum dolorem quisquam, libero sapiente! Nemo asperiores molestiae assumenda iure architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tempora voluptate quidem at natus, maiores distinctio eveniet perferendis doloremque officia laborum dignissimos eum unde tempore! Accusantium cupiditate quidem aliquam distinctio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi ratione temporibus autem aut officia deserunt ad, quas distinctio modi, aliquam vero? Earum, possimus in itaque quae nisi temporibus fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officia accusamus totam doloribus obcaecati. Cupiditate qui earum, sequi corrupti dolor animi sit iure libero omnis? Ad pariatur eaque quod facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque ducimus sunt pariatur maxime porro itaque ratione quas quisquam minima aspernatur minus, sed natus dolore sapiente facilis libero laboriosam fuga?</p>
        <div id='visao'>
          <h1>Visão</h1>
          <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
        </div>
        <div id='missao'>
          <h1>Missão</h1>
          <p>A missão do Studio Crescer é Contribuir para que as pessoas alcancem uma melhor qualidade nos mais diversos aspectos da vida, utilizando serviços especializados e diferenciados com o método de Pilates, hidroginástica, funcional e lutas.</p>
        </div>
      </div>

      <div className="acesso">
        <a href="/Vigor">
          <div className="botao-vigor-seaside">
            <img src="../img/logo-vigor-preto.png" alt="body training" />
          </div>
        </a>
        <a href="/Seaside">
          <div className="botao-vigor-seaside">
            <img src="../img/logo-branca-seaside.png" alt="educacional" />
          </div>
        </a>
      </div>
    </section>
  )
}