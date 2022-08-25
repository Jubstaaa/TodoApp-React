// JSX - Javascript XML

const root = document.getElementById("root");
const app = {
  title:"Todo Application",
  description:"Lorem, ipsum dolor.",
  items:["item1","item2"]
}

const onFormSubmit=(event)=>{
  event.preventDefault();

  let item = event.target.elements.txtItem.value
  if(item){
    app.items.push(item);
    event.target.elements.txtItem.value="";
  }

  render();
}

const clearItems=()=>{
  app.items=[];
  render();
}

const render=()=>{


  let listItems= app.items.map((item,index)=>
    <li key={index}>{item}</li>
  )

  let template = (
    <div>
      <h1 >{app.title}</h1>
      <div>{app.description}</div>
      {<ul>
          {listItems}
      </ul>}
      <p><button onClick={clearItems} >Clear Items</button></p>
      <p>{app.items.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="txtItem"/>
        <button type="submit">Add Item</button>

      </form>
    </div>
  );
  
  ReactDOM.render(template, root);
}

render();