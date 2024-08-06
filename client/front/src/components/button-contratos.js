class Contratos extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
                box-sizing: border-box;
            }

            section{
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            .title{               
                align-items: center;
                display: flex;
                gap: 0.5rem;
            } 
            h1{
              color:#fff;
              font-size: 5em;
            }
            .data-req{               
                align-items: center;
                display: flex;
                gap: 0.5rem;
            }   
            .data-req button{
              color:#fff;
              font-family: ubuntu;
              font-size: 2em;
              border-radius: 20px;
              background: #562897;
              cursor:pointer;
            }
            p{
              color: #fff;
            }
        </style>
        <section>
            <div class="title">
                <h1>Consulta AEMET</h1>
            </div>
            <div class="data-req">
                <button class="sent-data">Consulta CAIB</button>
            </div>
        </section>
        `

    const fetchButton = this.shadow.querySelector('.sent-data')

    fetchButton.addEventListener('click', async () => {
      let response = await fetch('https://catalegdades.caib.cat/resource/anss-9wx4.json')
      let data = await response.json()

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/contratos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      data = await response.json()
      console.log(data)
    })
  }
}

customElements.define('button-contratos-component', Contratos)
