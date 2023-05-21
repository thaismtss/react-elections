import { useEffect, useState } from 'react';
import { formatNumber } from './helpers';
import { getDataCities, getDataElection } from './api';
import Item from './components/Item';
import Select from './components/Select';
import Sidebar from './components/Sidebar';
import Candidates from './components/Candidates';
import Candidate from './components/Candidate';

function App() {
  const [cities, setCities] = useState([]);
  const [elections, setElections] = useState({});
  const [selectCityId, setSelectCityId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function getCities() {
      try {
        const allCities = await getDataCities();
        setCities(allCities);
        setSelectCityId(allCities[0].id);
      } catch (error) {
        setError(error.message);
      }
    }

    getCities();
  }, []);

  useEffect(() => {
    if (!selectCityId) {
      return;
    }
    async function getElection() {
      try {
        const allElection = await getDataElection(selectCityId);
        setElections(allElection);
      } catch (error) {
        setError(error.message);
      }
    }

    getElection();
  }, [selectCityId]);

  function handleSelectCity(id) {
    setSelectCityId(id);
  }

  const options = cities.map(({ id, name }) => ({ id, name }));

  const { city, election } = elections;

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">{error}</div>
    );
  }

  return (
    <>
      <div className="flex">
        <Sidebar>
          <div className="text-center mt-40 px-8 flex flex-col text-sm md:text-base">
            <h3 className="text-white text-xl font-semibold pb-8">
              Eleição em {city?.name}
            </h3>

            <Item
              label="Total de Eleitores:"
              value={formatNumber(city?.votingPopulation)}
            />
            <Item label="Abstenção:" value={formatNumber(city?.absence)} />
            <Item
              label="Comparecimento:"
              value={formatNumber(city?.presence)}
            />

            <p className="text-white font-semibold text-xl pt-8">
              {election?.length} candidatos
            </p>
          </div>
        </Sidebar>

        <div className="w-3/5 md:h-screen md:w-full p-4 z-10 ml-[-1.5rem] bg-white rounded-3xl">
          <h1 className="text-xl text-[#1E1656]">React Elections</h1>

          <Select
            label="Escolha o Munícipio:"
            options={options}
            onSelectCity={handleSelectCity}
          ></Select>

          {election && (
            <Candidates>
              {election.map(
                ({ id, name, username, votes, percentage, elected }) => (
                  <Candidate
                    key={id}
                    name={name}
                    username={username}
                    votes={votes}
                    percentage={percentage}
                    elected={elected}
                  />
                )
              )}
            </Candidates>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
