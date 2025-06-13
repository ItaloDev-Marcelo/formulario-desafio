import './App.css'
import Input from './components/input'
import InputRadio from './components/option'
import Data from './data/inputData'
function App() {


  return (
    <>
      <form>
      <Input tipo={Data[0].type} name={Data[0].name} label={Data[0].label} placeholder={Data[0].placeholder} id={Data[0].id} />
      <Input tipo={Data[1].type} name={Data[1].name} label={Data[1].label} placeholder={Data[1].placeholder} id={Data[1].id} />
      <Input tipo={Data[2].type} name={Data[2].name} label={Data[2].label} placeholder={Data[2].placeholder} id={Data[2].id} />
      <Input tipo={Data[3].type} name={Data[3].name} label={Data[3].label} placeholder={Data[3].placeholder} id={Data[3].id} />
      <div>
        <label>Stack de desenvolvimento</label>
           <InputRadio valor='frontend' name='superhero' />
           <InputRadio valor='mobile' name='superhero' />
           <InputRadio valor='backend' name='superhero' />
           <InputRadio valor='fullstack' name='superhero' />
           <InputRadio valor='devops' name='superhero' />
      </div>
      <button>Enviar</button>
      </form>
    </>
  )
}

export default App
