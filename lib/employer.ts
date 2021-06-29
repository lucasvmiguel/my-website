export interface Employer {
  name: string;
  description: string;
  image: string;
  jobTitle: string;
  tags: string[];
}

export const employers: Array<Employer> = [
  {
    name: 'Workday',
    description: 'Finance, HR, and planning',
    image: 'workday-logo.png',
    jobTitle: 'Software Engineer',
    tags: ['Kubernetes', 'Go', 'Helm', 'Istio', 'Terraform', 'Ruby', 'Ruby on Rails', 'Sidekiq', 'React', 'AWS', 'Docker']
  },
  {
    name: 'Noa',
    description: 'Journalism over audio',
    image: 'noa-logo.png',
    jobTitle: 'Software Engineer',
    tags: ['React', 'Redux', 'NodeJS', 'React Router', 'Google Analytics', 'Elasticsearch', 'MySQL', 'Express', 'Sequelize', 'Redux Form', 'AWS']
  },
  {
    name: 'B2W',
    description: 'E-commerce',
    image: 'b2w-logo.png',
    jobTitle: 'Software Engineer',
    tags: ['Go', 'Elasticsearch', 'Clojure', 'React', 'Redux', 'AngularJS', 'Microservices', 'Mongo', 'AWS', 'Docker']
  }
]
