import "./styles.css";
import {useState, useEffect} from 'react'
export default function App() {

const [text, setText] = useState(""); 
const [fullText, setFullText] = useState([]);
const [index, setIndex] = useState(0)

useEffect(() => {
  fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e73')
  .then(res => res.text())
  .then(res => setFullText(res))
  .catch(err => console.log(err))
})

useEffect(() => {
  if (index < fullText.length) {
    setTimeout(() => {
      setText(text + fullText[index])
      setIndex(index + 1)
    }, 500)
  }
}, [index,text,fullText])

const result = text.split('').map((char, index) => (
  <li key = {index}> {char} </li>  

))

  return (
    <div className="App">
      <h1>Capture the Flag</h1>
      <h2> The flag today is: {text} </h2>
      <h2> {result}</h2>
    </div>
  );
}
