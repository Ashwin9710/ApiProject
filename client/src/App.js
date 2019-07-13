import React from 'react';
import api from "./modules/api";
import './App.css';
import axios from 'axios'
import {
  Jumbotron,
  Alert,
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table
} from 'reactstrap';
import PlaceList from "./components/PlaceList"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      alertVisible: false,
      title: '',
      movies: [],

      query: "",
      places: [],
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  // getAllMovies = () => {
  //   axios
  //     .get('/getallmovies')
  //     .then(result => {
  //       this.setState({ movies: result.data });
  //       console.log(this.state.movies);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  componentDidMount() {
    // this.getAllMovies();
  }

  //for popup
  onDismiss() {
    this.setState({ alertVisible: false });
  }

  handleInputKeydown({ keyCode }) {
    if (keyCode === 13) {
      this.onSubmit()
    }
  }
  
  //for form
  onSubmit = e => {
    this.setState({ loading: true })
    api.getCurrentWeather(this.state.query, (err, res, body) =>
     {
      if (err) {
        // If error
        console.error(err)
      } else {
        // If success
        const parsedCurrent = JSON.parse(body)
        // console.log(parsedCurrent)
        // this.setState({ places: [parsedCurrent.location] })

        const { lat, lon } = parsedCurrent.location
        api.getForecastWeather(lat, lon, (err, res, body) => {
          this.setState({ loading: false })
          if (err) {
            console.error(err)
          } else {
            const parsedForecast = JSON.parse(body)
            console.log(parsedForecast)
            const { summary, temperature, windSpeed } = parsedForecast.currently
            let partialData = { ...parsedCurrent.location, summary, temperature, windSpeed }
            this.setState({ places: [partialData] })
          }
        })
      }
    })
  };

  // for form field
  onChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    const { places, loading, query } = this.state
    return (
      <div className="App">
        <Jumbotron>
          <h1 className="display-3">Weathers</h1>
          <p className="lead">Search for weathers</p>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Alert
                color="danger"
                isOpen={this.state.alertVisible}
                toggle={this.onDismiss}
              >
                Movie not found
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <FormGroup>
                  <Label for="title">Please enter the location :</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="enter place name..."
                    onChange={this.onChange}
                    onKeyDown={(e)=>{ this.handleInputKeydown(e) }}
                  />
                </FormGroup>
                <button onClick={this.onSubmit} disabled={loading || query.length <= 0}
                children={loading ? "Loading" : "Submit"}/>
                <p />
              </div>
            </Col>
          </Row>
          <Row>
            <PlaceList places={places}/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;