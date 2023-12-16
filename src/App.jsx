import './App.css'
import { useApi } from './utilities/hucks.js'

function App() {
 const {data, setCity} = useApi()
  function getLocation(event) {
    event.preventDefault()
    const input = new window.FormData(event.target)
    let location = input.get('queryCity')
    if (location === undefined) return
    setCity(location)
  }
  return (
    <div className='app'>
      <header>
        <section className='location'>
          <h1>{data?.location.name}</h1>
          <h3>{data?.location.country}</h3>
        </section>
        <form className='input-wrapper' onSubmit={getLocation}>
          <input className='input' name='queryCity' placeholder='Madrid, Paris, London' />
          <button className='icon' type='submit'> 🔍 </button>
        </form>

      </header>
      <aside>
          <img src={data?.current.condition.icon} alt={`icon with ${data?.current.condition.icon}`}/>
          <h1>{data?.current.temp_c} ℃</h1>
      </aside>
      <footer>
        <p className='current-time'>Updated at {data?.current.last_updated}</p>

      </footer>
    </div>
  )
}

export default App