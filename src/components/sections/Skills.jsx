import SectionShell from '../ui/SectionShell';
import SkillGroup from '../ui/SkillGroup';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <SectionShell id="skills" eyebrow="Skills" title="Grouped foundations without overclaiming expertise.">
      <div className="skill-grid">
        {skills.map((group) => <SkillGroup key={group.title} group={group} />)}
      </div>
    </SectionShell>
  );
}