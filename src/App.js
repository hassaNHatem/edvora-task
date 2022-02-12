import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Products from './components/Products';
function App() {
  const [data, setData] = useState([])
  const [allstatess , setallstates] = useState([])
  const [ allcities , setallcities] = useState([])
  const [ update , setupdate] = useState(false)
  useEffect(() => {
    axios.get('https://assessment-edvora.herokuapp.com/').then(res => {
      setData(res.data)
    })
  }, [])
  let product_names = []
  let allproducts = []
  
  data.map(el => {
    if (!product_names.includes(el.product_name)) {

      product_names = [...product_names, el.product_name]

    }
  })
  
  
 

  product_names.map(name => {
    let product = []
    data.map(el => {
      if (el.product_name === name) {
        let obj = {
          product_name: el.product_name,
          brand_name: el.brand_name,
          price: el.price,
          state: el.address.state,
          city: el.address.city,
          discreption: el.discription,
          time: el.time,
          image: el.image
        }
        product = [...product, obj]

      }

    })

    allproducts = [...allproducts, product]

  })
  return (
    <div className="App">
      <div className='filter-container'>
        <div className='wrapper'>
          <h3>Filters</h3>
          <hr></hr>
          <select onChange={(e) => {
            let states = []
            
            allproducts.map(el => {

              el.map(arr => {
                if (arr.product_name === e.target.value) {
              
                  states = [...states, arr.state]
                }
              })
            })
            
            let uniqueChars = [];
            states.forEach((c) => {
              if (!uniqueChars.includes(c)) {
                uniqueChars.push(c);
              }
              console.log('states' , uniqueChars)
              setallstates(uniqueChars)
            });

            
          }}>
            <option value="none" selected disabled hidden>Products</option>
            {product_names.map(el => {
              return <option value={el}>{el}</option>
            })}
          </select>
          <select onChange={(e) => {
            let states = []
            
            allproducts.map(el => {

              el.map(arr => {
                if (arr.state === e.target.value) {
              
                  states = [...states, arr.city]
                }
              })
            })
            
            let uniqueChars = [];
            states.forEach((c) => {
              if (!uniqueChars.includes(c)) {
                uniqueChars.push(c);
              }
             setallcities(uniqueChars)
            });

            
          }}>
            <option value="none" selected disabled hidden>State</option>
            {allstatess.map(el => {
              return <option value={el}>{el}</option>
            })}
          </select>
          <select >
            <option value="none" selected disabled hidden>city</option>
            {allcities.map(el => {
              return <option value={el}>{el}</option>
            })}
          </select>
        </div>
      </div>
      <div className='Products-wrapp'>
        <h1>Edvora</h1>
        <h2>Products</h2>

        {allproducts.map(el => {
          return <Products product={el}></Products>
        })

        }
      </div>
    </div>
  );
}

export default App;
