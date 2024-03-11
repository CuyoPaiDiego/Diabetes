import Swal from 'sweetalert2'

function App() {


  const handlePredc = ()=>{
    Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="#">links</a>,
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }

  return (
    <>
      <header>
        <h1>Formulario para saber si tienes diabetes</h1>
      </header>
      <div>
        <form>
          <label>Glucosa:</label>

          <input type="text" id="glucosa" name="glucosa" required></input>

          <label>Presión arterial:</label>
          <input type="text" id="presion" name="presion" required></input>

          <label>Grosor de la piel:</label>
          <input type="text" id="grosor" name="grosor" required></input>

          <label>Insulina:</label>
          <input type="text" id="insulina" name="insulina" required></input>

          <label>IMC:</label>
          <input type="text" id="imc" name="imc" required></input>

          <label>DiabetesPedigríFunción:</label>
          <input type="text" id="diabetes_pedigree" name="diabetes_pedigree" required></input>
          <div></div>
          <button onClick={handlePredc}>Predecir</button>
        </form>
      </div>
    </>
  )
}

export default App
