import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/movie/:id" element={<Detail />} />
  </Routes>
  </BrowserRouter>
  );
  }

export default App;



// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Detail from "./routes/Detail";
// import Home from "./routes/Home";
// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/hello">
//           <h1>Hello</h1>
//         </Route>
//         <Route path="/movie">
//           <Detail />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;