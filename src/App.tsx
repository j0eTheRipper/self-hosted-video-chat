import hero from './assets/hero.png'


function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Square />
      <Square />
    </div>
  );
}

export default App
function Square() {
  return <div style={{ width: '50%', borderColor: 'black', borderWidth: '1px', borderStyle: 'groove', margin: '10px', padding: '10px' }}>
    <img src={hero} alt="" />
  </div>;
}
