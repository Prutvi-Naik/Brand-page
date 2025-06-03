import Content from "./Content";

const Hero = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Content />
      </div>
      <div><img className="w-[1200px]" src="https://urban-foot.vercel.app/images/shoe_image.png" alt="item" /></div>
    </div>
  )
}
export default Hero;