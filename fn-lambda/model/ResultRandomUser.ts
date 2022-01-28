import RandomUser from './RandomUser'

type ResultRandomUser = {
  results: RandomUser[];
  info: {
      seed: String;
      results: number;
      page: number;
      version: string
  }
}

export default ResultRandomUser
