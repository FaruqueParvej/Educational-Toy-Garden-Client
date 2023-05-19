import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReactTabCard from "./ReactTabCard";

const ReactTab = () => {
  const [toys, setToys] = useState([]);
  const languageToys = toys.filter((toy) => toy.sub_category === "language");
  const MathematicalToys = toys.filter(
    (toy) => toy.sub_category === "Mathematical"
  );
  const scientificToys = toys.filter(
    (toy) => toy.sub_category === "scientific"
  );

  console.log(languageToys);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="mx-auto">
      <Tabs>
        <div>
          <TabList className="flex justify-center">
            <Tab>Language toys</Tab>
            <Tab>math learning toys</Tab>
            <Tab>science kits</Tab>
          </TabList>
        </div>
        <div className="my-5" >
          <TabPanel style={{display:"flex"}} className="flex-col md:flex-row justify-center"  >
            {languageToys.map((toy) => (
              <ReactTabCard key={toy._id} toy={toy}></ReactTabCard>
            ))}
          </TabPanel>
          <TabPanel style={{display:"flex"}} className="flex-col md:flex-row justify-center" >
            {MathematicalToys.map((toy) => (
              <ReactTabCard key={toy._id} toy={toy}></ReactTabCard>
            ))}
          </TabPanel>
          <TabPanel style={{display:"flex"}} className="flex-col md:flex-row justify-center" >
            {scientificToys.map((toy) => (
              <ReactTabCard key={toy._id} toy={toy}></ReactTabCard>
            ))}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ReactTab;
