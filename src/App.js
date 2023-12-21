import Dashboard from "./Dashboard";
import Login from "./Login";

const App = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height:"100vh",
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"column"
      }}
    >
      <h3 >Parent App</h3>
      <Login />
      {/* <Dashboard/> */}
    </div>
  );
};

export default App;
