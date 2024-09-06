import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import RowCards from './Components/RowCards/RowCards'
import {originals,action,horror,romance,documentaries} from './constants/constants'

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <RowCards isBig  title="Nelfix Orginals" url={originals}/>
    <RowCards title="Action Movies" url={action} />
    <RowCards title="Horror Movies" url={horror} />
    <RowCards title="Romantic Movies" url={romance} />
    <RowCards title="Documentaries" url={documentaries} />
    </>
  )
}

export default App
