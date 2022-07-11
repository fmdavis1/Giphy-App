
import {Component} from 'react'
class App extends Component {

  // constructor(){
  //     super()
  //   //  console.log('Hello from Contructor')
  //    this.state = {
  //        todos: []
  //    }
  // }

  state = {
    giphy: []
  }

  componentDidMount(){
      // console.log('Hello from Component did mount')

      fetch('https://api.giphy.com/v1/gifs/trending?api_key=lNRRsrCmRNGi0Og6CDTmK4Ma2TdwkcFa&limit=25&rating=g')
      .then(response => response.json()) // parse the request
      .then(json => {
        console.log(json.data)
      this.setState({giphy:json.data})
    });
      // .then(json => this.setState({todos: json})) // get the data
  }

  // componentDidUpdate(){
  //     console.log('Hello from component did update')
  // }

  render() {
      // console.log('Hello from Render')
      return(
          <div className="App">
              <h1>Giphy App</h1>
              {
                this.state.giphy.map(g => (
                  <div key={g.id}>
                    <img src={g.images.original.url}/>
                    <h3>{g.title}</h3>
                  </div>
                ))
              }
          </div>
      )
  }
}


export default App;
