export default function Card({ name, isCompleted }: { name: string; isCompleted: boolean }) {
    return (
        <div className="alert shadow-lg">
        <svg  fill="none" viewBox="0 0 24 24"></svg>
        <div>
          <h3 className="font-bold">{name}</h3>
        </div>
        <input type="checkbox" checked={isCompleted} className="checkbox checkbox-primary" />
      </div>
    );

}