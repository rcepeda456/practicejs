import React from 'react';
import ReactDOM from 'react-dom';

class First extends React.Component{
  render() {
    return
    <h1> Hello, This is my first React Component!</h1>;
  }
}
 class Second extends React.Component{
   render() {
     return (
     <div>
     <h2> This is my Second Component!</h2>
     </First>
     </div>
     );
   }
 }
