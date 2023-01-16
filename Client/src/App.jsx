
function App() {

  const data = [
    {
      category: "Manufacturing",
      subCategory: ["Construction materials", "Electronics and Optics", "Food and Beverage", "Bakery & confectionery products"]
    },
    {
      category: "Food and Beverage",
      subCategory: ["Bakery & confectionery products", "Beverages", "Fish & fish products", "Meat & meat products", "Milk &amp; dairy products", "Other", "Sweets & snack food"]
    },
    {
      category: "Furniture",
      subCategory: ["Bathroom/sauna", "Bedroom", "Children's room", "Kitchen", "Living room", "Office", "Other (Furniture)", "Outdoor", "Project furniture"]
    },
    {
      category: "Machinery",
      subCategory: ["Machinery components"]
    },
    {
      category: "Metalworking",
      subCategory: ["Construction of metal structures"]
    },
    {
      category: "Plastic and Rubber",
      subCategory: ["Packaging"]
    },
    {
      category: "Printing",
      subCategory: ["Advertising"]
    },
    {
      category: "Other",
      subCategory: ["Creative industries"]
    },
    {
      category: "Service",
      subCategory: ["Business services", "Engineering"]
    },
  ]

  return (
    <div className="App">
      <h1>HK Task</h1>
      {
        data.map((d) => {
          return (
            <div>
              <b>{d.category}</b>
              <ul>
                {
                  d.subCategory.map(t => {
                    return (
                      <li>{t}</li>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
