export default function Button({children, secondary}) {
    return (
        <button className={`bg-dark-blue-100 hover:bg-blue-700 text-white py-4 px-5 tracking-[0.0150rem] uppercase font-bold ${secondary ? "bg-white border-dark-blue-100 border text-dark-blue-100" : ""}`}>
        {children}
        </button>
    );
}