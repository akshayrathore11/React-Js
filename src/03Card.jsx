import Cardd from "./Components/Cardd";

function Card() {
    let myObj = {
        "name": "John",
        "age": 30,
        "city": "New York"
    }
    let newArr = [1,2,4,5]
  return (
    <>
      <h1 className=" bg-green-400 text-black p-4 rounded-xl mb-4">
        React And Tailwind
      </h1>
      <Cardd username ="Anushka" btnText ="Click me"/>
      <Cardd username="Khusi"  />
    </>
  );
}

export default Card;
