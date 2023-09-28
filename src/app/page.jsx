import AboutCard from "@/components/about"
import BirthdayCard from "@/components/birth"
import OnlineCard from "@/components/discord"
import EmailCard from "@/components/email"
import GithubCard from "@/components/github"
import LinkedinCard from "@/components/linkedin"
import ProjectsCard from "@/components/projects"
import Skills from "@/components/skills"
import SpotifyCard from "@/components/spotify"

const page = () => {
  return (
    
    <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
        <AboutCard/>
        <BirthdayCard/>
        <Skills/>
        <LinkedinCard/>
        <GithubCard/>
        <EmailCard/>
        <OnlineCard/>
        <ProjectsCard/>
        <SpotifyCard/>
    </div>
  )
}

export default page