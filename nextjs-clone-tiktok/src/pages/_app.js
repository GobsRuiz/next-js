import '../styles/globals.css'
import '../styles/variables.css'

function App({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default App


// https://www.youtube.com/watch?v=GD6UqFFc7K8

// {posts.map((post, index) => (< key={index}></>))}

// Se vier nulo não avança
// {post?.author?.name}

{/* <img src="/images" */}

// function app({user})
// {user.name}

// calc(0.56 * (400px + ((100vw - 768px) / 1152) * 100))