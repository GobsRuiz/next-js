import Header from "../header/header";
import Sidebar from "../main/sidebar";

function LayoutIndex({children}){
  return (
    <>
      <Header></Header>

      <main>
        <Sidebar></Sidebar>

        <div>
          {children}
        </div>
      </main>
    </>
  )
}

export default LayoutIndex()