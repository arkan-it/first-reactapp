import react, { useState } from 'react'
import './App.css';
import Birthday from './Components/Birthday'
import { data } from './Components/data'

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);

    data.length = 0;

    document.querySelector('.container').style.height = '20vh';
  }

  const removeItem = (id) => {
    console.log(data.length)
    let newPeople = people.filter(person => {

      return (person.id !== id)

    }
    );


    if (data.length > 0) {
      document.querySelector('.header').innerHTML = `${data.length = data.length - 1} Birthday Today`;
    }

    setPeople(newPeople);

  }

  return (
    <main>
      <div className="container">
        <h3 className='header'>{data.length} Birthday Today</h3>
        {
          people.map((person) => {
            const { id, name, age, image } = person;

            return (
              <div className="birthdays">
                <Birthday id={id} name={name} age={age} image={image} />
                <div className="btn" >
                  <span onClick={() => removeItem(id)}>Remove</span>
                </div>
              </div>
            )
          })
        }
        <div className="button-container" onClick={clearAll}>
          <span>Clear All</span>
        </div>
      </div>
    </main>
  )
}

export default App;
