import "./title.css";
export default function Titles({title, desc}) {
  return (
    <div className="title-content">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
