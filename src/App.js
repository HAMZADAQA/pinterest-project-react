import { useState, useEffect } from 'react';
import unsplash from './api/unsplash';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';

function App() {
const [pins, setPins] = useState([])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    })
  }

  const onSearchSubmit = (term) => {
    console.log('good search or not',term)
    getImages(term).then((res) => {
      let results = res.data.results
      console.log(results)

      let newPins = [
        ...results,
        ...pins,
      ]

      newPins.sort(function(a, b) {
        return 0.5 - Math.random();
      })
      setPins(newPins)

    })
  }
  

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['ocean', 'Tokyo', 'dogs', 'cats', 'bali', 'cars'];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      )
      })
    Promise.all(promises).then(() => {
      setPins(pinData)
    })
  }

  useEffect(() => {
    getNewPins()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins}/>
    </div>
  );
}

export default App;
