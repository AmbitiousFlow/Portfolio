export default function Tool({ name, icon }) {
  return (
    <div className="bg-primary text-white w-full h-44 flex flex-row justify-center items-center align-middle gap-2 transition-all duration-300 hover:opacity-80 shadow-md">
      {icon}
      <span className="text-2xl">{name}</span>
    </div>
  );
}
