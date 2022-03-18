import LayoutIndex from '../components/layout/index';

function Index({ posts }){
  return 
    <LayoutIndex>
      {/* <Feed posts={posts}></Feed> */}
    </LayoutIndex>
}

export async function getServerSideProps(content) {
  const data = [
    {
      id: 1,
      author: {
        id: 1, 
        avatar: '',
        name: '', 
        username: ''
      },
      description: 'descricao',
      tags: [{title: '#youtube'}, {title: '#clone'}],
      songName: '',
      videoUrl: '',
      likes: 650,
      comments: 10,
      replies: 50,
    }
  ]

  return {
    props: {
      posts: [],
    },
  }
}

export default  Index();