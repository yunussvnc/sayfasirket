export default function GradientBG() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-400 opacity-40 blur-[160px]" />
            <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 opacity-40 blur-[180px]" />
            <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-orange-300 via-red-300 to-pink-400 opacity-30 blur-[130px]" />
        </div>
    );
}

