import ImageUser1 from '@/assets/ImageUser.png'
import ImageUser2 from '@/assets/avatar1.svg'
import ImageUser3 from '@/assets/avatar2.svg'
import ImageUser4 from '@/assets/avatar3.svg'

export interface MockInfoType {
  id: string
  title: string
  tags: string[]
  linkProject: string
  url: string
  description: string
  userName: string
  userImage: string
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
    id: '1',
    title: 'Aqui um titulo qualquer 1',
    linkProject: 'https://www.google.com/',
    url: 'https://images4.alphacoders.com/134/1341419.png',
    userName: 'Alanna Silva',
    tags: ['UX', 'Web'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
    userImage: ImageUser1,
  },
  {
    id: '1',
    title: 'Aqui um titulo qualquer 2',
    linkProject: 'https://www.google.com/',
    url: 'https://images.photowall.com/interiors/60869/landscape/wallpaper/room45.jpg?w=2000&q=80',
    userName: 'Carolina',
    tags: ['UX', 'UI'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
    userImage: ImageUser2,
  },
  {
    id: '1',
    title: 'Aqui um titulo qualquer 3',
    linkProject: 'https://www.google.com/',
    url: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    userName: 'Douglas shaud',
    tags: ['UI', 'Web'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
    userImage: ImageUser3,
  },

  {
    id: '5',
    title: 'Aqui um titulo qualquer 4',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    userName: 'Douglas',
    tags: ['UI', 'Web'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
    userImage: ImageUser4,
  },

  {
    id: '4',
    title: 'Aqui um titulo qualquer 5',
    linkProject: 'https://www.google.com/',
    url: 'https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2-1024x649.png',
    userName: 'Douglas',
    tags: ['UI', 'Web'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
    userImage: ImageUser1,
  },
  {
    id: '2',
    title: 'Aqui um titulo qualquer 6',
    linkProject: 'https://www.google.com/',
    url: 'https://as1.ftcdn.net/v2/jpg/05/75/80/34/1000_F_575803464_pqACzSefEtLVNUEsgjkdj77OYopRNmuZ.jpg',
    userName: 'Douglas santos',
    tags: ['UI', 'Web'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
    userImage: ImageUser4,
  },
]
