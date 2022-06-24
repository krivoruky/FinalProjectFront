import React from 'react';
import Picture from '../UI/Picture';
import Title from '../UI/Title';
import s from './Skills.module.sass';
import Learn from '../../media/Learn.png';
import Skill from './Skill/Skill';

export default function Skills({ skills }) {
  return (
    <div className={s.learn}>
      <Title>What Will You Learn?</Title>
      <div className={s.main}>
        <div className={s.card}>
          {skills.map(skill => (
            <Skill key={skill.id} {...skill} />
          ))}
        </div>
        <div className={s.img}>
          <Picture img={Learn} />
        </div>
      </div>
    </div>
  );
}
