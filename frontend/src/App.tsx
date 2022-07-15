import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard"

function App() {
  return (
    // fragment<></>
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>
          <SalesCard />
        </section>
      </main>
    </>
  )
}

export default App
