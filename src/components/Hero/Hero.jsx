import { logo } from '../../assets';  
import './hero.scss'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      
      <nav className="flex justify-between items-center w-full mb-10 pt-3">

      <div className="snapOverviewTitle">
        <h1 className="font-satoshi font-bold text-white text-3xl italic w-28"><span className="text-black">SNAP</span>overview</h1>
      </div>

        <button 
          type="button"
          onClick={() => window.open('https://github.com/BrandonG99')}
          className="github_btn font-satoshi font-semibold"
        >
          GitHub
        </button>
      </nav>

      <h1 className="header_text">
        <span className="">S</span>ummarise <span>A</span>rticles with <br className="max-md: hidden" />
        ChatGPT
      </h1>

      <h2 className="description">
        Reading articles is easy with <span className="text-black font-semibold">SNAP</span>overview, an AI tool that transforms lengthy articles into brief simple summaries.
      </h2>
    </header>
  )
}

export default Hero