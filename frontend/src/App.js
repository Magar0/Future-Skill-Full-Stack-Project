import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = async () => {
    setLoading(true);
    const res = await fetch(`${process.env.REACT_APP_URL}cards`);
    const cards = await res.json();
    setData(cards);
    setFilteredData(cards);
    setLoading(false);
  };

  const handleSearch = () => {
    const newData = data.filter((e) => e.title.match(new RegExp(search, "i")));
    setFilteredData(newData);
  };

  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <section>
      <Header />
      <div className="flex justify-center items-center bg-indigo-200 h-[300px] flex-col gap-4">
        <p className="text-5xl font-semibold ">How can we Help?</p>
        <div className="relative ">
          <input
            type="text"
            className="py-2 px-5 text-base w-[450px] rounded-md "
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaArrowRightLong
            className="absolute top-3 right-3 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12  md:grid-cols-2  mx-auto w-fit my-10 min-h-[50vh] justify-center items-center ">
        {filteredData.map((ele, ind) => (
          <Card key={ind} data={ele} />
        ))}

        {filteredData.length === 0 && loading === false && (
          <p className="text-red-500 text-xl   ">Nothing Found</p>
        )}
        {loading && <div className="loader"></div>}
      </div>

      <Footer />
    </section>
  );
}

export default App;
