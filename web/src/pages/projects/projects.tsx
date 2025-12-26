import styles from './projects.module.css'
import ProjectCard from '../../components/projectCard/projectCard'
export default function Projects() {
    return <div className={styles.projects}>
        <ProjectCard imgSrc="/projects/strand.webp" title="Strand" description="An AI travel assistant that learns your preferences" technologies={["TypeScript", "React", "PostgreSQL", "Prisma", "Node", "MCP", "RAG"]} url="https://usestrand.space/" year="2025" />
        <ProjectCard imgSrc="/projects/mythea.webp" title="Mythea" description="Cursor for schoolwork" technologies={["Python", "TypeScript", "React",  "PostgreSQL", "Redis"]} url="https://mythea.io/" year="2025" />
    </div>
}