//MILESTONE 1
  //Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


//MILESTONE 2
  //Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.



//MILESTONE 3
  //Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


  const { createApp } = Vue;

  createApp({
  data() {
  return {
  tasks: [
  { text: "Making the sitemap for the customer Her -Age", done: false },
  { text: "Meeting with the SEO specialist", done: false },
  { text: "Contact Yummy-tech customer for website restyling", done: true },
  { text: "Afternoon Team building event", done: false },
  ],
  newTaskText: "",
  };
  }
  }).mount("#app"); 