export interface MockInfoType {
  id: string
  title: string
  tags: string[]
  linkProject: string
  url: string
  description: string
  userName: string
}

export const blankProjectMock = {
  id: '',
  title: '',
  linkProject: '',
  url: '',
  userName: '',
  tags: [],
  description: '',
}


export const mockInfo: Array<MockInfoType> = [
  // Info Para Testar Cards
  {
    id: 'a',
    title: 'Aqui um titulo qualquer',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    userName: 'Alanna Silva',
    tags: ['UX', 'Web'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
  {
    id: 'b',
    title: 'Aqui um titulo qualquer1',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    userName: 'Carolina',
    tags: ['UX', 'UI'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
  {
    id: 'c',
    title: 'Aqui um titulo qualquer2',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    userName: 'Douglas',
    tags: ['UI', 'Web'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
]