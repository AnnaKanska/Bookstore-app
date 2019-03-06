// import React, { Component } from "react";
// import "./App.css";
// import Header from "./components/header";

// class App extends Component {
//   state = {
//     genres: [],
//     currentGenre: ""
//   };

//   handleChange = input => {
//     this.setState({
//       currentGenre: input
//     });
//   };

//   addGenre = e => {
//     e.preventDefault();
//     this.setState({
//       genres: [e, ...this.state.genres],
//       currentGenre: ""
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Header />
//         <div className="genres-block">
//           <form onSubmit={() => this.addGenre(this.state.currentGenre)}>
//             <input
//               name="name"
//               value={this.state.currentGenre}
//               onChange={e => this.handleChange(e.target.value)}
//               placeholder="new genre"
//             />
//             <button type="submit">Add</button>
//           </form>
//           <ul>
//             {this.state.genres.map(name => (
//               <li>{name}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
