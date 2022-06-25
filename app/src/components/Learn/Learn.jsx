import React from 'react';
import Picture from '../UI/Picture';
import Title from '../UI/Title';
import s from './Learn.module.sass';
import LearnImg from '../../media/Learn.png';
import Skill from './Skill/Skill';

export default function Learn({ skills }) {
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
          <Picture img={LearnImg} />
        </div>
      </div>
    </div>
  );
}
