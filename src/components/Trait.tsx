import { ReactNode } from 'react';

const Trait = ({ number, name, content }: {
  number: number,
  name: string,
  content: ReactNode
}) => (
  <>
    <h1 className="title">
      <span className="badge">Trait {number}</span>

      <span className="text">{name}</span>
    </h1>

    <div className="liquid-shape-container">
      <p className="content">{content}</p>
      <div className={`liquid-shape trait-${number}`}></div>
    </div>
  </>
);

export default Trait;
