import './App.css';
import axios from 'axios';
import ArrayToList from './helpers/createList';
import reload from './helpers/reloadPage';
import data from './types/dataType'

let form: data;

axios.get('http://localhost:5000/')
.then((res) => {
  console.log(res)
  let list = ArrayToList(res.data);
  
  let block: any = document.querySelector('.display-comments');

  block.innerHTML = list
})

function myfunc() : void {
  axios.post('http://localhost:5000/', form)
}

function handleSubmit(e: React.FormEvent<HTMLFormElement> | any) {
  e.preventDefault();
  form = {
    name: e.target[0].value,
    email: e.target[1].value,
    homePage: e.target[2].value,
    comment: e.target[3].value,
  }
  return myfunc()
}

function App() {
  return (
    <div onLoad={myfunc} className='main-block'>
      <div className='create-comment'>
        <form method="post" onSubmit={handleSubmit}>
          <input type={'name'} placeholder='Name' name='name'></input>
          <input type={'email'} placeholder='Email' name='email'></input>
          <input type={'url'} placeholder='Home Page' name='url'>{}</input>
          <textarea placeholder='Your comment'></textarea>
          <button onClick={reload}>Enter </button>
        </form>
      </div>
      <h1>COMMENTS:</h1>
      <div className='display-comments'>
      </div> 
    </div>
  );
}

export default App;
