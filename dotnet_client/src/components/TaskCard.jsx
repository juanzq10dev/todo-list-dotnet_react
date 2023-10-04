export default function TaskCard({name, isCompleted}) {
    return (
<div className="alert shadow-lg">
    <span></span>
  <div>
    <h3 className="font-bold">{name}</h3>
  </div>
  <input type="checkbox" checked={isCompleted} className="checkbox" />
  <button className="w-5 h-5  btn-square ">
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
</div>
    );   
}