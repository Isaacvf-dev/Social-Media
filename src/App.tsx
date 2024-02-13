import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { PostType} from './components/Post'

import "./global.css"

import styles from "./App.module.css"

const posts: PostType[] = [
  {
    id: 1,
  author: {
    avatarUrl: "https://github.com/isaacvf-dev.png",
    name: "Isaac Vieira",
    role: "Frontend Developer",
  },
  content:[
    { type: 'paragraph', content: 'Fala galeraa 👋' },
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: 'jane.design/doctorcare' },         
  ],
  publishedAt: new Date('2024-02-12 16:00:00')
  },
  {
    id: 2,
  author: {
    avatarUrl: "https://github.com/lostcode-js.png",
    name: "Daniel Soares",
    role: "Fullstack Developer",
  },
  content:[
    { type: 'paragraph', content: 'Fala pessoal 👋' },
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: 'jane.design/doctorcare' },         
  ],
  publishedAt: new Date('2024-02-11 12:00:00')
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
                post={post}
              
              />
            )
          })}
        </main>
      </div>      
      
    </div>
  )
}
