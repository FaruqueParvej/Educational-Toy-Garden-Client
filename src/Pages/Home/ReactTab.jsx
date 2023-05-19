import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReactTabCard from "./ReactTabCard";

const ReactTab = () => {
  const [toys, setToys] = useState([]);
  const languageToys=toys.filter(toy=>toy.sub_category==='language')
  const MathematicalToys=toys.filter(toy=>toy.sub_category==='Mathematical')
  const scientificToys=toys.filter(toy=>toy.sub_category==='scientific')

    console.log(languageToys);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>Language toys</Tab>
        <Tab>Mathematical toys</Tab>
        <Tab>puzzle toys</Tab>
      </TabList>

      <TabPanel>
        {languageToys.map((toy) => (
          <ReactTabCard key={toy._id} toy={toy}>
          </ReactTabCard>
        ))}
      </TabPanel>
      <TabPanel>
      {MathematicalToys.map((toy) => (
          <ReactTabCard key={toy._id} toy={toy}>
          </ReactTabCard>
        ))}
      </TabPanel>
      <TabPanel>
      {scientificToys.map((toy) => (
          <ReactTabCard key={toy._id} toy={toy}>
          </ReactTabCard>
        ))}
      </TabPanel>
    </Tabs>
  );
};

export default ReactTab;
