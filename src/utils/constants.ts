export interface MockInfoType {
  id: string;
  titulo: string;
  linkProject: string;
  url: string;
  nome: string;
  tags: Array<string>,
  descricao: string;
}

export const mockInfo: Array<MockInfoType> = [
  // Info Para Testar Cards
  {
    id: 'a',
    titulo: 'Aqui um titulo qualquer',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    nome: 'Alanna Silva',
    tags: ['UX', 'Web'],
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
  {
    id: 'b',
    titulo: 'Aqui um titulo qualquer1',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    nome: 'Carolina',
    tags: ['UX', 'UI'],
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
  {
    id: 'c',
    titulo: 'Aqui um titulo qualquer2',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    nome: 'Douglas',
    tags: ['UI', 'Web'],
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
]