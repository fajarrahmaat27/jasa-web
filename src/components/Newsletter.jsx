import Banner from "../shared/Banner"
import newsletter from "../assets/newsletter.png"

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-ws-screen-2xl mx-auto my-12">
        {/* use our banner components */}
        <Banner banner={newsletter} heading="each student an share their discoud code for friend" subheading={"A simple paragraph is compiresed of three major component. the first sentence, which is often a declarative sesntence, is called the"} btn1={"I have a code"}/>
    </div>
  )
}

export default Newsletter