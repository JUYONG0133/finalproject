import mainPhoto from './K-040.png';
function App() {
  return (
    <div className="App">
      <img alt='main'
        src={mainPhoto}
           style={{width:'300px',border:'5px inset gray'}}
      />
      <h3><b>배포</b></h3>
      <h3><b>성공</b></h3>
    </div>
  );
}

export default App;
