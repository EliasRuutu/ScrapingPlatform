interface PropsType{
    children:React.ReactNode
}
const ProjectDiv: React.FC<PropsType> = ({children})=>{
    return (
        <div className=" border-[0.5px] border-[#5B56EF] border-l-[5px] p-7">
            {children}
        </div>
    )
}
export default ProjectDiv