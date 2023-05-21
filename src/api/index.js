import { axiosInstance } from '../service';

export async function getDataCities() {
  const { data: cities } = await axiosInstance.get('/cities');
  cities.sort((a, b) => a.name.localeCompare(b.name));
  return cities;
}

export async function getDataCandidates() {
  const { data: candidates } = await axiosInstance.get('/candidates');
  return candidates;
}

export async function getDataElection(cityId) {
  const { data: election } = await axiosInstance.get(
    `/election?cityId=${cityId}`
  );

  const { absence, name, presence, votingPopulation } = (
    await getDataCities()
  ).find(item => item.id === cityId);

  const candidates = await getDataCandidates();

  const sanitizedElection = {
    city: { absence, name, presence, votingPopulation },

    election: election
      .sort((a, b) => b.votes - a.votes)
      .map((item, index) => {
        const { name, username } = candidates.find(
          candidate => candidate.id === item.candidateId
        );

        const { id, votes } = item;

        const percentage = (votes / presence) * 100;
        const elected = index === 0;

        return {
          id,
          name,
          username,
          votes,
          percentage,
          elected,
        };
      }),
  };
  console.log(sanitizedElection);
  return sanitizedElection;
}
