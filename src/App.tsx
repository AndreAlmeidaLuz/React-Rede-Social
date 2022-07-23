import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andrealmeidaluz.png',
      name: 'André Almeida',
      role: 'Analista de Tecnologia'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return,evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-06 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Thais Marinho',
      role: 'Assistente Administrativa'
    },
    content: [
      { type: 'paragraph', content: ' ut sunt corrupti aut' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet. Qui libero libero in quia mollitia vel praesentium reprehenderit. Qui perspiciatis aperiam et voluptas doloribus non alias labore ut sunt corrupti aut voluptate dolor est sequi necessitatibus ab dignissimos inventore. Aut eaque fugiat est aliquid libero quo tempora eius. E'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
